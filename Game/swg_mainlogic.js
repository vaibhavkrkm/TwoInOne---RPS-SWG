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


var gameArray = ["snake", "water", "gun"];

var snakeButton = document.getElementById("snake");
var waterButton = document.getElementById("water");
var gunButton = document.getElementById("gun");
var backButton = document.getElementById("goBack");
var compMoveElement = document.getElementById("compMove");
var playerMoveElement = document.getElementById("playerMove");
var victorElement = document.getElementById("victorText");

var turn = "player";
var playerMove;
var compMove;
var victor;

snakeButton.addEventListener("click", function(){                               // snake button
	turnFunction("snake");
})

waterButton.addEventListener("click", function(){                         // water button
	turnFunction("water");
})

gunButton.addEventListener("click", function(){                           // gun button
	turnFunction("gun");
})

backButton.addEventListener("click", function(){                              // back button for going back to main menu
	backToMenu();
})
