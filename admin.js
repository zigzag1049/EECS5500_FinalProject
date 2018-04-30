window.onload = function () {
   if (!localStorage.dailyAdminAdultPrice)
      localStorage.dailyAdminAdultPrice  = 45;
   if (!localStorage.dailyAdminChildPrice)
      localStorage.dailyAdminChildPrice  = 20;
   if (!localStorage.dailyAdminSeniorPrice)
      localStorage.dailyAdminSeniorPrice = 25;
   if (!localStorage.seasonPassPrice)
      localStorage.seasonPassPrice       = 365;
   document.getElementById("DAP").value = localStorage.dailyAdminAdultPrice;
   document.getElementById("DAC").value = localStorage.dailyAdminChildPrice;
   document.getElementById("DAS").value = localStorage.dailyAdminSeniorPrice;
   document.getElementById("SP").value  = localStorage.seasonPassPrice;
   document.getElementById("AdultPass").innerHTML  = localStorage.dailyAdminAdultPrice;
   document.getElementById("ChildPass").innerHTML  = localStorage.dailyAdminChildPrice;
   document.getElementById("SeniorPass").innerHTML = localStorage.dailyAdminSeniorPrice;
   document.getElementById("SeasonPass").innerHTML = localStorage.seasonPassPrice;
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
            }
            document.getElementById("AdultPass").innerHTML = localStorage.dailyAdminAdultPrice;
      
      }else if(typeOfticket == 1){
            if (localStorage.dailyAdminChildPrice) {
               localStorage.dailyAdminChildPrice =  document.getElementById("DAC").value;
            }
            document.getElementById("ChildPass").innerHTML = localStorage.dailyAdminChildPrice;
      
      }else if(typeOfticket == 2){
            if (localStorage.dailyAdminSeniorPrice) {
               localStorage.dailyAdminSeniorPrice =  document.getElementById("DAS").value;
            }
            document.getElementById("SeniorPass").innerHTML = localStorage.dailyAdminSeniorPrice;
      
      }else if(typeOfticket == 3){
            if (localStorage.seasonPassPrice) {
               localStorage.seasonPassPrice =  document.getElementById("SP").value;
            }
            document.getElementById("SeasonPass").innerHTML = localStorage.seasonPassPrice;  
      }
   } else {
         document.getElementById("AdultPass").innerHTML = "Sorry, your browser does not support web storage...";
         document.getElementById("ChildPass").innerHTML = "Sorry, your browser does not support web storage...";
         document.getElementById("SeniorPass").innerHTML = "Sorry, your browser does not support web storage...";
         document.getElementById("SeasonPass").innerHTML = "Sorry, your browser does not support web storage...";
   }
}