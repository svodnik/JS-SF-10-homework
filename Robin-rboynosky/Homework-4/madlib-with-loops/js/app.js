var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

const createNewStartup = document.querySelector('#create');


let nameBox = document.querySelector('#xForY');

let startupNameText = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2])

createNewStartup.addEventListener('click', function() {
    event.preventDefault();
    nameBox.appendChild(startupNameText);
}, false)
   



