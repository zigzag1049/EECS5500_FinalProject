
var APPID = "472a0ccb4d2b4145877165300181604"; //Old api code through open weathemap-"6dc253026a1f4224464386df48b23e9d";
var dayTrack = 0;
var weatherObj = [];
var tempCurr;
var tempMin;
var tempMax;
var loc;
var icon;
var cloud;
var humidity;
var currDate;

window.onload = function () {
    tempCurr = document.getElementById("temperature");
	tempMin = document.getElementById("temperatureMin");
	tempMax = document.getElementById("temperatureMax");
	tempCurrOrAvg = document.getElementById("currOrAvgTemp");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
	cloud  = document.getElementById("cloud");
    humidity = document.getElementById("humidity");
	currDate = document.getElementById("currDay");
	
	//43606 -toledo
	//43065 - columbus
	var zip = 43606;
	updateByZip(zip);
}

function previousDay() {
	if (dayTrack > 0)
		update(weatherObj, --dayTrack);
}
function nextDay() {
	if (dayTrack < 4)
		update(weatherObj, ++dayTrack);
}

function updateByZip(zip){
	var url = "http://api.apixu.com/v1/forecast.json?" +
	"key=" + APPID +
	"&q=" + zip + "&days=5";
    sendRequest(url);
}

function update(weather,day) {
	/* This function updates the current html elements with
		the update to dat data for API
	*/
	icon.src = "http:" + weather[day].code;
	cloud.innerHTML = weather[day].clouds;
    humidity.innerHTML = weather[day].humidity;
    loc.innerHTML = weather[day].location;	
	if(day ==0){ // if its the current day display current temp
		tempCurrOrAvg.innerHTML = "Current Temperature: ";
		tempCurr.innerHTML = weather[day].tempDataCurr;
	}else{ // if it is a day in the future display average temp 
		tempCurrOrAvg.innerHTML = "Average Temperature: ";
		tempCurr.innerHTML = weather[day].tempDataAvg;	
	}	
	tempMin.innerHTML = weather[day].tempDataMin;
	tempMax.innerHTML = weather[day].tempDataMax;
	currDate.innerHTML = getCurrentDate(day);
}

function getCurrentDate(day){
	/* This function returns what day of the week it is
		if the the user is looking at the current day, it will
		return the day it will be in the future if the user is 
		looking for the next day
	*/
	var dateObj = new Date();
    var weekdayNames = new Array(
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	);
	return weekdayNames[ (dateObj.getDay()+day) % 7 ];
}


function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText);
			var loopCountSpec = 0;
			for (var i = 0; i < data.forecast.forecastday.length; i++) {
				// these statements below get data from API
				weatherObj[i] = {
					code: data.forecast.forecastday[i].day.condition.icon, // code for picture
					clouds: data.forecast.forecastday[i].day.condition.text,
					humidity: data.forecast.forecastday[i].day.avghumidity,
					location: data.location.name + ", " + data.location.region,
					tempDataCurr: data.current.temp_f,
					tempDataAvg: data.forecast.forecastday[i].day.avgtemp_f,
					tempDataMin: data.forecast.forecastday[i].day.mintemp_f,
					tempDataMax: data.forecast.forecastday[i].day.maxtemp_f
				};
			}
			update(weatherObj, 0);
		}
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();    
}
