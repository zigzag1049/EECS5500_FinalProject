var listOfRides = [
   "Twisty_Tyrant", "Loopy_Log", "Winds_of_Change", "Space_Race",
   "Techno_Torando", "Devilish_Derby", "Seagrams_escape", "Night_Train"
];

function mouseOver(rideNum) {
   for (var i = 0; i < listOfRides.length; i++)
      if (i == rideNum)
         document.getElementById(listOfRides[i]).style.border = "2px solid red";
}

function mouseOut() {
   for (var i = 0; i < listOfRides.length; i++)
      document.getElementById(listOfRides[i]).style.border = "2px solid black";
}

function displayRideInfo(rideNum){
   for (var i = 0; i < listOfRides.length; i++)
      if (i != rideNum)
         document.getElementById(listOfRides[i]).style.display = "none";
   document.getElementById(listOfRides[rideNum]).style.height  = "95%";
   document.getElementById(listOfRides[rideNum]).style.width   = "95%";
   document.getElementById(listOfRides[rideNum]+"_desc").classList.add("visible");
}

function goBack(e) {
   for (var i = 0; i < listOfRides.length; i++) {
      document.getElementById(listOfRides[i]).style.display = "block";
      document.getElementById(listOfRides[i]).style.height  = "45%";
      document.getElementById(listOfRides[i]).style.width   = "20%";
      document.getElementById(listOfRides[i]+"_desc").classList.remove("visible");
   }
}

window.onload = function(e) {
   for (var i = 0; i < document.getElementsByClassName("back").length; i++)
      document.getElementsByClassName("back")[i].onclick = goBack;
}