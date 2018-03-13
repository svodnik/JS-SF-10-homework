var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var favorites = [];
var xForY;
const $startUpHeader = $('#xForY');
const $favHeader = $('#favorites ul');
const $createBtn = $('#create');
const $favBtn = $('#save');
const $printBtn = $('#print');

$createBtn.click(function(e) {
  e.preventDefault();
  let random1 = Math.floor((Math.random() * startupX.length));
  let random2 = Math.floor((Math.random() * startupY.length));
  xForY = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  $startUpHeader.html(xForY);
});

$favBtn.click(function(e) {
  e.preventDefault();
  xForY = $startUpHeader.text();
  if (xForY!=='' && favorites.indexOf(xForY)===-1) {
    favorites.push(xForY);
  }; 
});

$printBtn.click(function(e) {
  e.preventDefault();
  $favHeader.empty();
  for (i=0; i<favorites.length; i++) {
    $favHeader.append('<li>'+favorites[i]+'</li>')
  }
})
