

$('#create').on('click', function() {
  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));

  let madString = `A startup that is ${startupX[random1]}, but for ${startupY[random2]}.`;
$('#xForY').text(madString);
});
