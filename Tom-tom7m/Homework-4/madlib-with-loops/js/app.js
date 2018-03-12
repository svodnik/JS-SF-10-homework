"use strict";

let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let outputGlobal;
let favorites = [];
let printFavorites;

document.querySelector("#create").addEventListener("click", function(){
	// Need to redefine random1 and random2 (and output) locally, so they run on each click
	let random1 = Math.floor((Math.random() * startupX.length));
	let random2 = Math.floor((Math.random() * startupY.length));
	let output = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	outputGlobal = output;
	document.querySelector("#xForY").innerHTML = output;
});

document.querySelector("#save").addEventListener("click", function(){
	// Want to prevent the user multiple clicking and recording that same favorite multiple times
	if(favorites[favorites.length - 1] !== outputGlobal){
		favorites.push(outputGlobal);
	}
});

document.querySelector("#print").addEventListener("click", function(){
	// Want to print favorites each on a different line. Using line break as outputting back to HTML
	if(favorites.length > 0) {
		printFavorites = favorites.join("<br>");
	}
	document.querySelector("#favorites").innerHTML = printFavorites;
});