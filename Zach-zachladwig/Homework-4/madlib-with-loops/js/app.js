var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];


const xforY = document.querySelector("#xForY")
const createButton = document.querySelector("#create")
const saveButton = document.querySelector("#save")
const printButton = document.querySelector("#print")
const favoritesText = document.querySelector("#favorites")

let favorites = [];

createButton.addEventListener("click", function() {
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  let text = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  xForY.innerHTML = text;
}, false);



saveButton.addEventListener("click", function() {
  favorites.push(xForY.innerHTML);
  console.log(favorites);
}, false);

printButton.addEventListener("click", function() {
  favoritesText.innerHTML = favorites.join("<br>");
}, false);
