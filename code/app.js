
console.log("linked");

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');

// Move blocks forward

var stepsFor1FB = 1;
var stepsFor2FB = 1;
var stepsFor1TB = 4;
var stepsFor2TB = 14;


function step(player, steps){
	player.style.left = steps + "%";
}

function forward(e){
	if(e.keyCode == 76){
		stepsFor1FB += 1;
	}
	if(e.keyCode == 65){
		stepsFor2FB += 1;
	}
}


function keyPressedF(e){
	if(e.keyCode == 76){
		console.log("L key pressed");	
		step(player1, stepsFor1FB);
		checkWin();
	}  
	if(e.keyCode == 65){
		console.log("A key pressed");
		step(player2, stepsFor2FB);
		checkWin();
	}
}

window.addEventListener("keydown", keyPressedF);
window.addEventListener("keyup", forward);


//Alert the winner

function checkWin(){
	if(player1.style.left == "90%" && player2.style.left != "90%"){
		alert("Blue Win!");
	}
	if(player2.style.left == "90%" && player1.style.left != "90%"){
		alert("Red Win!");
	}
}

//Move blocks backword

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
	stepsFor1FB = 1;
	stepsFor2FB = 1;
}


function keyPressedDown(e){
	if(e.keyCode == 32){
		console.log("spacebar is pressed");
		resetPlayer();
	}  
}




