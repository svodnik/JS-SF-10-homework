var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// Get the h1 with the id of 'xForY'
const h1 = document.querySelector('#xForY');
// Get the 'Create New Startup' button
const createBtn = document.querySelector('#create');

// Add a click event to the create button to generate the random message on the page
createBtn.addEventListener('click', function () {  
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    h1.textContent = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.';
});



/* ----------------------------------
    BONUS
------------------------------------ */

// 01. Save favorite Startups
//
const saveBtn = document.querySelector('#save');
const favoritesStartup = [];

saveBtn.addEventListener('click', function () {
    favoritesStartup.push(h1.textContent);
    console.log(favoritesStartup);
});

// 02. Print a list of the saved favorites Startups on the page
//
const favoritesHeader = document.querySelector('#favorites');
const printBtn = document.querySelector('#print');
const ol = document.createElement('ol');
ol.className = 'fav-list';
// Insert the ul as the sibling of #favorites instead of as the child
favoritesHeader.parentNode.insertBefore(ol, favoritesHeader.nextSibling);


printBtn.addEventListener('click', function () {
    // clear the ul to prevent duplicates
    ol.innerHTML = '';
    // Add a h2 text heading when the button is clicked
    favoritesHeader.textContent = 'My Favorites:';
    // Loop through the favoritesStartup array
    favoritesStartup.forEach(function (currentItem) {
        const li = document.createElement('li');
        const liText = document.createTextNode(currentItem);
        ol.appendChild(li);
        li.appendChild(liText);  
    });
});





// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


