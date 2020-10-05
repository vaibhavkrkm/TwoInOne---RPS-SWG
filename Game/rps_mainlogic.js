function backToMenu()
{
	window.history.back();
}


function turnFunction(move)
{
	// player's turn
	if(turn == "player")
	{
		turn = "comp";
		playerMove = gameArray.indexOf(move);
		playerMoveElement.innerHTML = gameArray[playerMove].toUpperCase();
	}
	
	// computer's turn
	if(turn == "comp")
	{
		compMove = Math.round(Math.random() * 2);
		compMoveElement.innerHTML = gameArray[compMove].toUpperCase();
		turn = "player";
	}
	
	// checking for win
	if((playerMove == 0 && compMove == 2) || (playerMove == 2 && compMove == 0))
	{
		if(playerMove < compMove)
		{
			victor = "Computer";
		}
		else if(compMove < playerMove)
		{
			victor = "Player";
		}
		else
		{
			victor = null;
		}
	}
	else
	{
		if(playerMove < compMove)
		{
			victor = "Player";
		}
		else if(compMove < playerMove)
		{
			victor = "Computer";
		}
		else
		{
			victor = null;
		}
	}
	
	// displaying the victor
	if(victor != null || victor != undefined)
	{
		victorElement.innerHTML = victor + " Victory!";
	}
	else
		victorElement.innerHTML = "Draw!";
}


var gameArray = ["rock", "scissor", "paper"];

var rockButton = document.getElementById("rock");
var scissorButton = document.getElementById("scissor");
var paperButton = document.getElementById("paper");
var backButton = document.getElementById("goBack");
var compMoveElement = document.getElementById("compMove");
var playerMoveElement = document.getElementById("playerMove");
var victorElement = document.getElementById("victorText");

var turn = "player";
var playerMove;
var compMove;
var victor;


rockButton.addEventListener("click", function(){                               // rock button
	turnFunction("rock");
});

scissorButton.addEventListener("click", function(){                         // scissor button
	turnFunction("scissor");
});

paperButton.addEventListener("click", function(){                           // paper button
	turnFunction("paper");
});

backButton.addEventListener("click", function(){                              // back button for going back to main menu
	backToMenu();
});
