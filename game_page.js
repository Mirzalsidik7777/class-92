player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_name + player1_score ;
document.getElementById("player2_score").innerHTML = player2_name + player2_score ;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    localStorage.setItem("number1" , number1);
    localStorage.setItem("number1" , number1);

    window.location = "index.html";
}
