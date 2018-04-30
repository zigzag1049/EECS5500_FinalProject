window.onload = function () {
   if(!localStorage.seasonPassPrice){ // has not been created yet set to these values
      localStorage.seasonPassPrice       = 365;
      localStorage.dailyAdminAdultPrice  = 45;
      localStorage.dailyAdminChildPrice  = 20;
      localStorage.dailyAdminSeniorPrice = 25;
   }
   document.getElementById("AdultPass").innerHTML  = "The Price of this ticket is: $" + localStorage.dailyAdminAdultPrice;
   document.getElementById("ChildPass").innerHTML  = "The Price of this ticket is: $" + localStorage.dailyAdminChildPrice;
   document.getElementById("SeniorPass").innerHTML = "The Price of this ticket is: $" + localStorage.dailyAdminSeniorPrice;
   document.getElementById("SeasonPass").innerHTML = "The Price of this ticket is: $" + localStorage.seasonPassPrice;
}

function Login(){
   // The userName is mike, austin or tei 
   // The password is EECSRULEZ
   var username = document.getElementById("Username").value;
   var password = document.getElementById("Password").value;

   if(username == "mike"){
      if(password == "EECSRULEZ"){
            document.getElementById("login").style.display       = "none";
            document.getElementById("changePrice").style.display = "block";
            document.getElementById("ticket-info").style.display  = "none";
         
      }else{
            document.getElementById("wrongLogin").innerHTML = "The password was incorrect!";
      }
   }else{
      document.getElementById("wrongLogin").innerHTML = "The user name and password was incorrect!";
   }
}

function changePrice(typeOfticket) {
   if(typeof(Storage) !== "undefined") {
      if(typeOfticket == 0){
            if (localStorage.dailyAdminAdultPrice) {
               localStorage.dailyAdminAdultPrice =  document.getElementById("DAP").value;
            } else {
               localStorage.dailyAdminAdultPrice = 1;
            }
            document.getElementById("AdultPass").innerHTML = "The Price of this ticket is: $" + localStorage.dailyAdminAdultPrice;
      
      }else if(typeOfticket == 1){
            if (localStorage.dailyAdminChildPrice) {
               localStorage.dailyAdminChildPrice =  document.getElementById("DAC").value;
            } else {
               localStorage.dailyAdminChildPrice = 1;
            }
            document.getElementById("ChildPass").innerHTML = "The Price of this ticket is: $" + localStorage.dailyAdminChildPrice;
      
      }else if(typeOfticket == 2){
            if (localStorage.dailyAdminSeniorPrice) {
               localStorage.dailyAdminSeniorPrice =  document.getElementById("DAS").value;
            } else {
               localStorage.dailyAdminSeniorPrice = 1;
            }
            document.getElementById("SeniorPass").innerHTML = "The Price of this ticket is: $" + localStorage.dailyAdminSeniorPrice;
      
      }else if(typeOfticket == 3){
            if (localStorage.seasonPassPrice) {
               localStorage.seasonPassPrice =  document.getElementById("SP").value;
            } else {
               localStorage.seasonPassPrice = 1;
            }
            document.getElementById("SeasonPass").innerHTML = "The Price of this ticket is: $" + localStorage.seasonPassPrice;  
      }
   } else {
         document.getElementById("AdultPass").innerHTML = "Sorry, your browser does not support web storage...";
         document.getElementById("ChildPass").innerHTML = "Sorry, your browser does not support web storage...";
         document.getElementById("SeniorPass").innerHTML = "Sorry, your browser does not support web storage...";
         document.getElementById("SeasonPass").innerHTML = "Sorry, your browser does not support web storage...";
   }
}