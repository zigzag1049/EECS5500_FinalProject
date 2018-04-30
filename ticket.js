setInterval(saveInfo, 5000);
function saveInfo() 
{
    localStorage.setItem("flag", "1");
    var AdultInfo 	= $("#adult-form").serializeArray();
    var SeniorInfo 	= $("#senior-form").serializeArray();;
    var ChildInfo 	= $("#child-form").serializeArray();;
    var SeasonInfo 	= $("#season-form").serializeArray();

    $.each(AdultInfo, function (i, obj) 
	{
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(SeniorInfo, function (i, obj) 
	{
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(ChildInfo, function (i, obj) 
	{
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(seasonInfo, function (i, obj) 
	{
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
}

if (localStorage.getItem("flag") == "1") {
    console.log("info saved");
    
    var AdultInfo = $("#adult-form").serializeArray();
    var SeniorInfo = $("#senior-form").serializeArray();;
    var ChildInfo = $("#child-form").serializeArray();;
    var seasonInfo = $("#season-form").serializeArray();

    $.each(AdultInfo, function (i, obj) 
	{
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(SeniorInfo, function (i, obj) 
	{
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(ChildInfo, function (i, obj) 
	{
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(seasonInfo, function (i, obj) 
	{
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
}