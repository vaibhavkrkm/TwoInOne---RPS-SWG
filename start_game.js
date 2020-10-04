gameArray = undefined;

function startGame(game)                                         // gameArray = ["snake", "water", "gun"] OR gameArray = ["rock", "scissor", "paper"]
{
	location.href = "./Game/" + game + ".html";
}

var buttonRPS = document.getElementById("RPS");
var buttonSWG = document.getElementById("SWG");

buttonRPS.addEventListener("click", function(){
	startGame("rps_game");
});

buttonSWG.addEventListener("click", function(){
	startGame("swg_game");
});
