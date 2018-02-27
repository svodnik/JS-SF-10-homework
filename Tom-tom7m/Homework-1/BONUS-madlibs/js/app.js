"use strict";

let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

/* let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

let output = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]; 

console.log(output); */

let outputGlobal;
let favorites = [];
let printFavorites;

document.getElementById("create").addEventListener("click", function(){
	// Need to redefine random1 and random2 (and output) locally, so they run on each click
	let random1 = Math.floor((Math.random() * startupX.length));
	let random2 = Math.floor((Math.random() * startupY.length));
	let output = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	outputGlobal = output;
	document.getElementById("xForY").innerHTML = output;
});

document.getElementById("save").addEventListener("click", function(){
	// Want to prevent the user multiple clicking and recording the same favorite multiple times
	if(favorites[favorites.length - 1] !== outputGlobal){
		favorites.push(outputGlobal);
	}
});

document.getElementById("print").addEventListener("click", function(){
	// Want to print favorites each on a different line. Using line break as outputting back to HTML
	if(favorites.length > 0) {
		printFavorites = favorites.join("<br>");
	}
	document.getElementById("favorites").innerHTML = printFavorites;
});