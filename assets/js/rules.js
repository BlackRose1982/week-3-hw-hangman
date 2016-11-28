var wordOptions = ["earth", "mars", "mercury", "jupiter", "saturn", "uranus", "venus", "neptune"];
var selectedWord = "";
var letterInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var guessesLeft = 9
var winCount = 0 
var lossCount = 0

function startGame (){
	selectedWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
	letterInWord = selectedWord.split("");
	numBlanks = letterInWord.length;

	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	document.getElementById("guessForWord").innerHTML = blanksAndSuccesses.join (" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;
	
	console.log(selectedWord);
	console.log(letterInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetter (letter){

	// alert(letter);
	var letterFound = false;

	for (var i = 0; i<numBlanks; i++) {
		if (selectedWord [i]== letter) {
			letterFound = true;
			// console.log("letter Found");
		}
	}

	if (letterFound) {

			for(var i = 0; i<numBlanks; i++){
				if (selectedWord[i] == letter) {
					blanksAndSuccesses[i] = letter;
				}
			}
	}
	else {
		wrongLetters.push(letter);

		guessesLeft--

	}

	console.log(blanksAndSuccesses);
}

function gameOver(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + "| Guesses Left " + guessesLeft);

	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("guessForWord").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	if(letterInWord.toString()== blanksAndSuccesses.toString()){

		alert("You won!" +  selectedWord + " ");

		winCount++;
		// alert("You won!");

		document.getElementById("winCounter").innerHTML = winCount;

		document.getElementById("wrongGuesses").innerHTML = " ";

		startGame();
	}

	else if (guessesLeft == 0){

		alert("You Lost!" + selectedWord + " ");

		lossCount++;
		

		document.getElementById("lossCounter").innerHTML = lossCount;


		document.getElementById("wrongGuesses").innerHTML = " ";

		startGame();
	}

}

startGame();

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetter(letterGuessed);
	gameOver();


	console.log(letterGuessed);
}












