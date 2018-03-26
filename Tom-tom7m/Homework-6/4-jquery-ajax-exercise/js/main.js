/* openweathermap.org
    1. Sign up for  and generate an API key.
    2. Create a fetch request to pull current weather data for San Francisco.
       (Hint: http://api.openweathermap.org/data/2.5/weather?q=...).
    3. Log the temperature to the console. Note that the temperature will be in
       Kelvin.
    4. Incorporate the following code into your app to log a Fahrenheit value for 
       the temperature to the console (Fahrenheit temperature is stored in the 
       degFInt variable):
       const degF = (temp - 273.15) * 1.8 + 32;
       const degFInt = Math.floor(degF);
    5. Use DOM manipulation to add the returned temperature to the span element with
       the id "temp".
    6. Sign up for developer.weatherunlocked.com and obtain your application ID and 
       application key.
    7. Repeat the above steps to obtain the current temperature from this data 
       source, convert it to Fahrenheit, log it to the console, and then add it to 
       the DOM (uncomment out the 3 lines indicated in index.html for this step,
       and add your temperature value to the span element with the id "temp2").
    8. Refactor your code as necessary to separate the code for DOM manipulation
       from the code for sending an HTTP request.

    BONUS 1: Refactor your code to use jQuery (either $.ajax or $.get) instead of 
       Fetch to pull current weather data.
    BONUS 2: Implement a form that prompts users for a city and state and returns
       data for the location they specify 
       (Uncomment out the existing form code in index.html as marked).
    BONUS 3: The response data for each request includes the name of an image
       file that illustrates current weather conditions. Use the documention to
       figure out the URL for these files on the server, and then incorporate
       this image into the DOM.
 */

'use strict';

const openWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey1 = '***';

function getOpenWeather(zip) {
  $.ajax({
    url: openWeatherURL + zip + '&APPID=' + apiKey1,
    success: function(response) {
      updateOWUISuccess(response.main.temp, response.weather[0].icon)
    },
    error: function(error) {
      console.log('There was a problem - 1.' + error);
      alert('There is a connection error')
    }
  })
};

function updateOWUISuccess(temp, icon){
  const degF = (temp - 273.15) * 1.8 + 32;
  const degFInt = Math.floor(degF);
  $('#temp').html(degFInt);
  const icon1 = 'http://openweathermap.org/img/w/' + icon + '.png';
  $('#img1').html('<img id="weatherIcon1" src="icon1" />');
  // Is it expected images do not render (although URL correct)?
}

const weatherRunURL = 'http://api.weatherunlocked.com/api/current/';
const key2 = '***';
const apiId2 = '***';

function getWeatherRun(zip) {
  $.ajax({
    url: weatherRunURL + 'us.' + zip + '?app_id=' + apiId2 + '&app_key=' + key2,
    success: function(response) {
      updateWRUISuccess(response.temp_f, response.wx_icon);
    },
    error: function(error) {
      console.log('There was a problem - 2.' + error)
    }
  })
};

function updateWRUISuccess(temp, icon){
  $('#temp2').html(temp);
  const icon2 = 'http://www.weatherunlocked.com/Images/icons/1/' + icon;
  $('#img2').html('<img id="weatherIcon1" src="icon2" />');
}

// Instead of asking / using city and state, we are getting it from the zip

let city, state;

function getLocation(zip) {
  fetch('http://api.zippopotam.us/us/' + zip).then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log('There was a problem - 3.');
    }
  }).then(function(data) {
    return getDetails(data);
    console.log(data);
  }).then(function(data) {
    return updateLUISuccess(data);
  }).catch(function(error) {
    console.log('There was a problem - 4.' + error);
  });
}

function getDetails(data) {
  city = data.places[0]['place name'];
  state = data.places[0]['state'];
}

function updateLUISuccess(data) {
  $('[id=location]').html(city + ', ' + state);
}

$('#getTemp').on('click', function(){
  let zip = $('#zip').val()
  getOpenWeather(zip);
  getWeatherRun(zip);
  getLocation(zip);
  $('#zip').val('');
})

