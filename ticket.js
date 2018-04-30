setInterval(saveInfo, 5000);

function saveInfo() {
    localStorage.setItem("flag", "1");
    var dailyInfo 	= $("#daily-form").serializeArray();
    var twodayInfo 	= $("#2day-form").serializeArray();;
    var friendsInfo = $("#friends-form").serializeArray();;
    var seasonInfo 	= $("#season-form").serializeArray();

    $.each(dailyInfo, function (i, obj) {
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(twodayInfo, function (i, obj) {
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(friendsInfo, function (i, obj) {
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
    $.each(seasonInfo, function (i, obj) {
        console.log(i, obj);
        localStorage.setItem(obj.name, obj.value);
    });
}

if (localStorage.getItem("flag") == "1") {
    console.log("info saved");
    
    var dailyInfo = $("#daily-form").serializeArray();
    var twodayInfo = $("#2day-form").serializeArray();;
    var friendsInfo = $("#friends-form").serializeArray();;
    var seasonInfo = $("#season-form").serializeArray();

    $.each(dailyInfo, function (i, obj) {
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(twodayInfo, function (i, obj) {
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(friendsInfo, function (i, obj) {
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
    $.each(seasonInfo, function (i, obj) {
        $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
    });
}