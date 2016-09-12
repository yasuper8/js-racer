
console.log("linked");

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player3 = document.getElementById('cat');
var player4 = document.getElementById('cat2');

// Move blocks forward

var stepsFor1FB = 2;
var stepsFor2FB = 2;
var stepsFor1TB = 4;
var stepsFor2TB = 14;

//cat forward

var stepsForCat1 = 0;
var stepsForCat2 = 0;

//win counters
var howManyWins1 = 0;
var howManyWins2 = 0;


function step(player, steps){
	player.style.left = steps + "%";
}

function forward(e){
	if(e.keyCode == 76){
		stepsFor1FB += 1;
		stepsForCat1 += 1;
	}
	if(e.keyCode == 65){
		stepsFor2FB += 1;
		stepsForCat2 += 1;
	}
}


function keyPressedF(e){
	if(e.keyCode == 76){
		console.log("L key pressed");	
		step(player1, stepsFor1FB);
		step(player3, stepsForCat1);
		checkWin();
	}  
	if(e.keyCode == 65){
		console.log("A key pressed");
		step(player2, stepsFor2FB);
		step(player4, stepsForCat2);
		checkWin();
	}
}

window.addEventListener("keydown", keyPressedF);
window.addEventListener("keyup", forward);

//winner counter

var winnerDiv1 = document.getElementById("winsOfP1");
var winnerDiv2 = document.getElementById("winsOfP2");
console.log(winnerDiv1.textContent);

function displayTotalWin(playerWin,wincount){
	playerWin.textContent = wincount;
}

//Alert the winner

function checkWin(){
	if(player1.style.left == "90%" && player2.style.left != "90%"){
		alert("Black Win!");
		howManyWins1 += 1;
		displayTotalWin(winnerDiv1, howManyWins1);
	}
	if(player2.style.left == "90%" && player1.style.left != "90%"){
		alert("White Win!");
		howManyWins2 += 1;
		displayTotalWin(winnerDiv2, howManyWins2);
	}
}

//Move blocks backward

function backword(e){
	if(e.keyCode == 75){
		stepsFor1FB -= 1;
		step(player1, stepsFor1FB);
	}
	if(e.keyCode == 83){
		stepsFor2FB -= 1;
		step(player2, stepsFor2FB);
	}
}

window.addEventListener("keydown", backword);

//Move blocks up

function upOrDown(player, steps){
player.style.top = steps + "em";
}

function keyPressedUp(e){
	if(e.keyCode == 79){
		console.log("o is pressed");
		upOrDown(player1, stepsFor1TB);
	}  
	if(e.keyCode == 81){
		console.log("q is pressed");
		upOrDown(player2, stepsFor2TB);
	}
}

function toUp(e){
	if(e.keyCode == 79){
		stepsFor1TB -= 1;
	}
	if(e.keyCode == 81){
		stepsFor2TB -= 1;
	}
}

window.addEventListener("keydown", keyPressedUp);
window.addEventListener("keyup", toUp);

// Move blocks down

function keyPressedDown(e){
	if(e.keyCode == 190){
		console.log(". is pressed");
		upOrDown(player1, stepsFor1TB);
	}  
	if(e.keyCode == 88){
		console.log("x is pressed");
		upOrDown(player2, stepsFor2TB);
	}
}

function toDown(e){
	if(e.keyCode == 190){
		stepsFor1TB += 1;
	}
	if(e.keyCode == 88){
		stepsFor2TB += 1;
	}
}

window.addEventListener("keydown", keyPressedDown);
window.addEventListener("keyup", toDown);


//Moving a breen block


var green = document.getElementById("object1");
var greenSteps = 90;

function objSteps(obj, move){
	obj.style.left = move + "%";
}

function moveObjLeft(){
	for(var i = 90; i >= 1; i--){
		objSteps(green, i);
	} 
}

moveObjLeft();


//Reset Game

function resetPlayer(){
	player1.style.left = 1 +"%";
	player2.style.left = 1 +"%";
	player3.style.left = -1 +"%";
	player4.style.left = -1 +"%";
	stepsFor1FB = 2;
	stepsFor2FB = 2;
	stepsForCat1 = 0;
	stepsForCat2 = 0;
}


function keyPressedDown(e){
	if(e.keyCode == 32){
		console.log("spacebar is pressed");
		resetPlayer();
	}  
}















