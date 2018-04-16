
var APPID = "472a0ccb4d2b4145877165300181604"; //Old api code through open weathemap-"6dc253026a1f4224464386df48b23e9d";
var dayTrack = 0;
var weatherObj = [weatherDay1={}, weatherDay2={},weatherDay3={}, weatherDay4={},weatherDay5={}];
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

function previousDay(){
	if(!(dayTrack <= 0)){
		dayTrack--;
		update(weatherObj,dayTrack);
	}
}
function nextDay(){
	if(!(dayTrack >= 4)){
		dayTrack++;
		update(weatherObj,dayTrack);
	}
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
	currDate.innerHTML = getCurretDate(day);
}

function getCurretDate(day){
	/* This function returns what day of the week it is
		if the the user is looking at the current day, it will
		return the day it will be in the future if the user is 
		looking for the next day
	*/
	var dateObj = new Date();
    var weekday = new Array(7);
	// this probaly can be cleaned up tbh
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var dayOfWeek = weekday[dateObj.getDay()];
		
	if(day == 0){ // current day
		return dayOfWeek;
	}else{ // day in the furtre
		for(i =0;i< 7;i++){
			if(dayOfWeek == weekday[i]){
				return weekday[i+day]
			}
		}		
		return dayOfWeek;
	}		
}


function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
			var data = JSON.parse(xmlhttp.responseText);
			var loopCountSpec = 0;
			for (i = 0; i < 5; i++) { // these statements below get data from API
				weatherObj[i].code = data.forecast.forecastday[i].day.condition.icon; // code for picture
				weatherObj[i].clouds = data.forecast.forecastday[i].day.condition.text;				
				weatherObj[i].humidity = data.forecast.forecastday[i].day.avghumidity;
				weatherObj[i].location = data.location.name+ ", " + data.location.region;
				weatherObj[i].tempDataCurr = data.current.temp_f;
				weatherObj[i].tempDataAvg = data.forecast.forecastday[i].day.avgtemp_f
				weatherObj[i].tempDataMin = data.forecast.forecastday[i].day.mintemp_f;
				weatherObj[i].tempDataMax = data.forecast.forecastday[i].day.maxtemp_f;
			}
			update(weatherObj,0);
		}
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();    
}