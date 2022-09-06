//Declaring word theme sets?//

var USstates = [
"A",
"AB",
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

var colors = [
"RED",
"ORANGE",
"YELLOW",
"GREEN",
"BLUE",
"INDIGO",
"VIOLET"];

var euroCountries = [
"ALBANIA",
"ANDORRA",
"ARMENIA",
"AUSTRIA",
"AZERBAIJAN",
"BELARUS",
"BELGIUM",
"BOSNIAANDHERZEGOVINA",
"BULGARIA",
"CROATIA",
"CYPRUS",
"CZECHREPUBLIC",
"DENMARK",
"ESTONIA",
"FINLAND",
"FRANCE",
"GEORGIA",
"GERMANY",
"GREECE",
"HUNGARY",
"ICELAND",
"IRELAND",
"ITALY",
"KOSOVO",
"LATVIA",
"LIECHTENSTEIN",
"LITHUANIA",
"LUXEMBOURG",
"MACEDONIA",
"MALTA",
"MOLDOVA",
"MONACO",
"MONTENEGRO",
"THENETHERLANDS",
"NORWAY",
"POLAND",
"PORTUGAL",
"ROMANIA",
"RUSSIA",
"SANMARINO",
"SERBIA",
"SLOVAKIA",
"SLOVENIA",
"SPAIN",
"SWEDEN",
"SWITZERLAND",
"TURKEY",
"UKRAINE",
"UNITEDKINGDOM",
"VATICANCITY"];

var porscheCars = [
"BOXTER",
"CAYENNE",
"MACAN",
"PANAMERA",
"TAYCAN"];

var laParishes = [    
"ACADIA",
"ALLEN",
"ASCENSION",
"ASSUMPTION",
"AVOYELLES",
"BEAUREGARD",
"BIENVILLE",
"BOSSIER",
"CADDO",
"CALCASIEU",
"CALDWELL",
"CAMERON",
"CATAHOULA",
"CLAIBORNE",
"CONCORDIA",
"DESOTO",
"EASTBATONROUGE",
"EASTCARROLL",
"EASTFELICIANA",
"EVANGELINE",
"FRANKLIN",
"GRANT",
"IBERIA",
"IBERVILLE",
"JACKSON",
"JEFFERSON",
"JEFFERSONDAVIS",
"LAFAYETTE",
"LAFOURCHE",
"LASALLE",
"LINCOLN",
"LIVINGSTON",
"MADISON",
"MOREHOUSE",
"NATCHITOCHES",
"ORLEANS",
"OUACHITA",
"PLAQUEMINES",
"POINTECOUPEE",
"RAPIDES",
"REDRIVER",
"RICHLAND",
"SABINE",
"STBERNARD",
"STCHARLES",
"STHELENA",
"STJAMES",
"STJOHNTHEBAPTIST",
"STLANDRY",
"STMARTIN",
"STMARY",
"STTAMMANY",
"TANGIPAHOA",
"TENSAS",
"TERREBONNE",
"UNION",
"VERMILION",
"VERNON",
"WASHINGTON",
"WEBSTER",
"WESTBATONROUGE",
"WESTCARROLL",
"WESTFELICIANA",
"WINN"];

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
  currentAlphaIndex = -1;
  playersWord = "";
  speedLevel = 1000;
  $("#letter-wheel").replaceWith('<span id="letter-wheel">&nbsp;</span>');
	$("#word-bar").replaceWith('<div id="word-bar">&nbsp;</div>');
  $("#score-block").replaceWith('<div id="score-block">00</div>');
	// themeSetID = getRandom(1, 5);
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
    clearInterval(intID);
		alert("Oh no! You lost!");
		// newGame();
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
		const newAlphabet = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
    };
    const scrabbleScore = word =>
      word
      .split('')
      .map(letter => newAlphabet[letter])
      .reduce((a, b) => a + b);

    score = scrabbleScore(playersWord);

    $("#score-block").replaceWith('<div id="score-block">' + score + '</div>');
  	// $("#new-game-button").removeClass("disabled");
		alert("your word works with a score of " + score + "!");
	} else {
		alert("that word doesn't work :(");
	}
  
});

$("#new-game-button").click(function() {
  newGame();
});

})