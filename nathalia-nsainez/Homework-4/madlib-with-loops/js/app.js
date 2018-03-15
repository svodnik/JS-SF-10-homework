//Madlibs

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'GM', 'Youtube','SnapChat','Target','Kinnek','WePay','Konfio','BarkBox','Canva','Le Tote','Algolia', 'Lucid Chart'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest','LinkedIn','Credit Karma', 'Remind', 'TalkDesk', 'Udemy','Smule','Intercom','VivaReal'];

const createNew = document.querySelector('#create');
const saveFav = document.querySelector('#save');
const printFav = document.querySelector('#print');
const h1 = document.querySelector('#XforY');
const h3 = document.querySelector('#favorites');
let statement;
let arr = [];

/*
function createStatement (){
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    statement = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]+ ". ";
    console.log(statement);
}
*/

createNew.addEventListener('click', function(event) {
    event.preventDefault();
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    statement = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    let statementItem = document.createElement('li');
    statementItem.className = 'XForY';
    let statementText = document.createTextNode(statement);
    statementItem.appendChild(statementText);
    h1.appendChild(statementItem);
}, false);


saveFav.addEventListener('click', function() {
    arr.push(statement);
}, false);


printFav.addEventListener('click', function() {
    let favoritesItem = document.createElement('li');
    favoritesItem.className ='favorites';
    let favItemText = document.createTextNode(arr);
    favoritesItem.appendChild(favItemText);
    h3.appendChild(favoritesItem);
}, false);





/*  Your job is to add code to the JavaScript file that makes the
"Create new startup" button work. Basically, when the user clicks that 
buttons, your JavaScript should generate a new madlib saying, which 
should appear inside the `XforY` h1.     */

/* Add functionality to make the "Print favorites" button work--when 
the "Print favorites" button is clicked, it should display all of 
the favorited startups in the array underneath the h2 with an ID of 
`favorites`.   */