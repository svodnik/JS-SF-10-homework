/*Your job is to add code to the JavaScript file that makes the "Create new startup" button work. Basically, when the user clicks that buttons, your JavaScript should generate a new madlib saying, which should appear inside the `XforY` h1.

*Add functionality to make the "Favorite Startup" button work--when the "Favorite Startup" button is clicked, it should save that madlib saying to an array.

*Add functionality to make the "Print favorites" button work--when the "Print favorites" button is clicked, it should display all of the favorited startups in the array underneath the h2 with an ID of `favorites`.
*/


var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var createStartup = document.querySelector('#create');
var saveFavStartup = document.querySelector('#save');
var printFavStartup = document.querySelector('#print');

let h1 = document.querySelector("h1");
var favs = [];

createStartup.addEventListener('click', function(){
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));
	h1.innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
},false);


saveFavStartup.addEventListener('click', function(){
	favs.push(h1.innerHTML);
	console.log(favs);
},false);

printFavStartup.addEventListener('click',function(){
	var items = document.createElement('p');
	var itemsText = document.createTextNode(favs);
	items.appendChild(itemsText);
	var h2 = document.querySelector("h2");
	h2.appendChild(items);

},false);



