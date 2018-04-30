var listOfRides = [
"Twisty_Tyrant", "Loopy_Log", "Winds_of_Change", "Space_Race",
"Techno_Torando", "Devilish_Derby", "Seagrams_escape", "Night_Train"
];

window.onload = function(e) {
   for (var i = 0; i < document.getElementsByClassName("back").length; i++)
      document.getElementsByClassName("back")[i].onclick = goBack;
}

function mouseOver(rideNum) {
   for (var i = 0; i < listOfRides.length; i++) {
      if (i == rideNum){
         document.getElementById(listOfRides[i]).style.border = "2px solid red";
      }
   }
}

function mouseOut() {
   for (var i = 0; i < listOfRides.length; i++) {
      document.getElementById(listOfRides[i]).style.border = "2px solid black";
   }
}

function displayRideInfo(rideNum){
   for (var i = 0; i < listOfRides.length; i++) {
      if( i != rideNum){
         document.getElementById(listOfRides[i]).style.display = "none";
      }
   }
   document.getElementById(listOfRides[rideNum]).style.height = "95%";
   document.getElementById(listOfRides[rideNum]).style.width = "95%";
   // document.getElementById(listOfRides[rideNum]+"_pic").style.height = "25%";
   // document.getElementById(listOfRides[rideNum]+"_pic").style.width = "25%";
   document.getElementById(listOfRides[rideNum]+"_desc").classList.add("visible");
}

function goBack(e) {
   for (var i = 0; i < listOfRides.length; i++) {
      document.getElementById(listOfRides[i]).style.display = "block";
      document.getElementById(listOfRides[i]).style.height = "45%";
      document.getElementById(listOfRides[i]).style.width = "20%";
      // document.getElementById(listOfRides[i]+"_pic").style.height = "70%";
      // document.getElementById(listOfRides[i]+"_pic").style.width = "100%";
      document.getElementById(listOfRides[i]+"_desc").classList.remove("visible");
   }
}