setInterval(saveInfo, 10000);

function saveInfo() {
    localStorage.setItem("flag", "1");
    var adultData = $("#adult-form").serializeArray();
    var seniorData = $("#senior-form").serializeArray();;
    var childData = $("#child-form").serializeArray();;
    var seasonData = $("#season-form").serializeArray();

    $.each(adultData, function (i, obj) {
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(seniorData, function (i, obj) {
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(childData, function (i, obj) {
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(seasonData, function (i, obj) {
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
}

if (localStorage.getItem("flag") == "1") {
    console.log("info saved");
    
    var adultData = $("#adult-form").serializeArray();
    var seniorData = $("#senior-form").serializeArray();;
    var childData = $("#child-form").serializeArray();;
    var seasonData = $("#season-form").serializeArray();

    $.each(adultData, function (i, obj) {
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(seniorData, function (i, obj) {
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(childData, function (i, obj) {
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(seasonData, function (i, obj) {
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
}