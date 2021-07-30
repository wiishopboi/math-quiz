function adduser(){
    player_1 = document.getElementById("player-1").value;
    player_2 = document.getElementById("player-2").value;
 
   localStorage.setItem("player_1name",player_1);
   localStorage.setItem("player_2name",player_2);
 
   window.location="login.html";
 }
 