//Declaring word scoring matrix//

const newAlphabet = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10,
};

//Declaring word theme sets?//

var USstates = [
"A",
"ALABAMA",
"ALASKA",
"ARIZONA",
"ARKANSAS",
"CALIFORNIA",
"COLORADO",
"CONNECTICUT",
"DELAWARE",
"FLORIDA",
"GEORGIA",
"HAWAII",
"IDAHO",
"ILLINOIS",
"INDIANA",
"IOWA",
"KANSAS",
"KENTUCKY",
"LOUISIANA",
"MAINE",
"MARYLAND",
"MASSACHUSETTS",
"MICHIGAN",
"MINNESOTA",
"MISSISSIPPI",
"MISSOURI",
"MONTANA",
"NEBRASKA",
"NEVADA",
"NEWHAMPSHIRE",
"NEWJERSEY",
"NEWMEXICO",
"NEWYORK",
"NORTHCAROLINA",
"NORTHDAKOTA",
"OHIO",
"OKLAHOMA",
"OREGON",
"PENNSYLVANIA",
"RHODEISLAND",
"SOUTHCAROLINA",
"SOUTHDAKOTA",
"TENNESSEE",
"TEXAS",
"UTAH",
"VERMONT",
"VIRGINIA",
"WASHINGTON",
"WESTVIRGINIA",
"WISCONSIN",
"WYOMING"
];

// import { USstates } from './themesets.js';

//Define global variables and set to zero//

var score = 0;
var intID = 0;
// var letterNow = 0;
var speedLevel = 1000;
var themeSetID = 0;
var themeTitle = 0;
// var themeSet = 
var alphaNumber = 0;
var playersWord = "";
var currentAlphaIndex = -1;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//Function to get a random number//

var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};

//New Game Function//

function newGame() {
	$("new-game-button").addClass("disabled");
	score = 0;
	$("#word-bar").replaceWith('<div id="word-bar">&nbsp;</div>');
	themeSetID = getRandom(1, 5);
	$("#theme-title").html(themeTitle);
};

//Letterwheel turn function//

function letterTurn() {
	++currentAlphaIndex;
	if (currentAlphaIndex >= alphabet.length) {
		currentAlphaIndex = 0;}
	$("#letter-wheel").replaceWith('<span id="letter-wheel">' + alphabet[currentAlphaIndex] + '</span>');
};

//When the page loads//

$(document).ready(function() {

//Call the newGame Function//

newGame();

//On Click Events for Game//

$("#start-button").click(function() {
	intID = setInterval(letterTurn, speedLevel);
});

$("#stop-button").click(function() {
	playersWord = playersWord + alphabet[currentAlphaIndex];
	var matches = USstates.filter(element => {
		if (element.startsWith(playersWord)) {
			return true;
		}
	});
	console.log(matches);
	if (matches.length > 0) {
		console.log("success, game continues");
		$("#word-bar").replaceWith('<div id="word-bar">' + playersWord + '</div>');
		speedLevel = speedLevel * .88;
		clearInterval(intID);
		intID = setInterval(letterTurn, speedLevel);
	} else {
		prompt("Oh no! You lost!");
		newGame();
	};

});

$("#lock-button").click(function() {
	clearInterval(intID);
	var wordCheck = USstates.filter(element => {
		if (USstates.includes(playersWord)) {
			return true;
		}
	});
	if (wordCheck.length > 0) {
// 		const newAlphabet = {
//   a: 1,
//   e: 1,
//   i: 1,
//   o: 1,
//   u: 1,
//   l: 1,
//   n: 1,
//   r: 1,
//   s: 1,
//   t: 1,
//   d: 2,
//   g: 2,
//   b: 3,
//   c: 3,
//   m: 3,
//   p: 3,
//   f: 4,
//   h: 4,
//   v: 4,
//   w: 4,
//   y: 4,
//   k: 5,
//   j: 8,
//   x: 8,
//   q: 10,
//   z: 10,
// };

// const scrabbleScore = word =>
//   word
//     .split('')
//     .map(letter => newAlphabet[letter])
//     .reduce((a, b) => a + b);

		prompt("your word works with a score of " + score + "!");
	} else {
		prompt("that word doesn't work :(");
	}

	$("#new-game-button").removeClass("disabled");
});

$("#new-game-button").click(function() {
	//if button is active, run newGame function//
});

})