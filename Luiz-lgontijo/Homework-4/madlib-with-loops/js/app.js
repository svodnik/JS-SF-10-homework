var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];


let buttonCreate = document.querySelector('#create');
let buttonSave = document.querySelector('#save');
let buttonPrint = document.querySelector('#print');
let string;
let fav = [];
let print = document.querySelector('#favorites');

buttonCreate.addEventListener('click', function newStartup() {
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  string = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
  title = document.querySelector('#xForY');
  title.innerHTML = string;
}, false);

buttonSave.addEventListener('click', function favoriteStartUp(){
  fav.push(string);
}, false);

buttonPrint.addEventListener('click', function printStarUp(){

  for (var i = 0; i < fav.length; i++) {
    var li = document.createElement('li');
    var node = document.createTextNode(fav[i]);
    li.appendChild(node);
    print.appendChild(li);

  }
}, false);
