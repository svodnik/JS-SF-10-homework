

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

 let createButton = document.querySelector("#create");
 let saveButton = document.querySelector("#save");
 let printButton = document.querySelector("#print");
 let favoriteButton = document.querySelector("#favorites")
 let h1= document.querySelector("h1");
 let favorites = [];

 createButton.addEventListener("click", function() {
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  h1.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}, false);



saveButton.addEventListener("click", function() {
  favorites.push(xForY.innerHTML);
  console.log(favorites);
}, false);

printButton.addEventListener("click", function() {
  favoriteButton.innerHTML = favorites.join(" \br");
}, false);