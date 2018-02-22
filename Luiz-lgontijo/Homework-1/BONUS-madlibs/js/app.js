const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let string;
let fav = [];

function displayStartup(){
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));
	string = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	document.getElementById("xForY").innerHTML = string;
}

function saveFavorite() {
	fav.push(string);
	console.log(fav);
}

function printFavorite() {
		const markup = fav.map(function(string) {
			return '<li>' + string + '</li>';
		});
		console.log(markup);
		document.getElementById("favPrint").innerHTML = markup.join('');
}