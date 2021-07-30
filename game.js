var player_1 = localStorage.getItem("player_1name");
var player_2 = localStorage.getItem("player_2name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("name_1").innerHTML = player_1 + ":";
document.getElementById("name_2").innerHTML = player_2 + ":";

document.getElementById("playerscore_1").innerHTML = player1_score;
document.getElementById("playerscore_2").innerHTML = player2_score;

document.getElementById("qs").innerHTML = "Question Turn - " + player_1;
document.getElementById("as").innerHTML = "Answer Turn - " + player_2;

function send() {

number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;


    question_number = "<h4>" + number1+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}