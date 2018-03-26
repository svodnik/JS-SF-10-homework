/*
    1. Sign up for openweathermap.org and generate an API key.
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

// get elements
const $openWeatherMapTemp = $('#temp1');
const $weatherUnlockedTemp = $('#temp2');
const $getWeatherButton = $('#getTemp');
const $location1 = $('#location1');
const $location2 = $('#location2');
const $errorMessage = $('#error');
const $openWeatherMapImg = $('#img1')
const $weatherUnlockedImg = $('#img2')
const $openWeatherMapDesc = $('#desc1')
const $weatherUnlockedDesc = $('#desc2')
// define some variables we will need later
let city;
let state;
let country;
let openWeatherMapTemp;
let openWeatherMapImg;
let openWeatherMapDesc;
let openWeatherMapUrl;
let weatherUnlockedUrl;
let weatherUnlockedTemp;
let weatherUnlockedImg;
let weatherUnlockedDesc;
let zip;
let lat;
let long;

// define some information we know and won't change
const units = 'imperial';

// here is where the API keys were but I removed them.

//BONUS 2: Attempting to use form
$getWeatherButton.on('click', function() {
  city = $('#city').val();
  state = $('#state').val();
  let googleMapsUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city},${state}&key=${googleMapsApiKey}`;
  getLatLong(googleMapsUrl, parseGoogleMaps, setURLs, getWeatherData);
});


function updateUISuccess() {
  $location1.html(city + ', ' + state);
  $location2.html(city + ', ' + state);
  $openWeatherMapTemp.html(openWeatherMapTemp);
  $openWeatherMapImg.attr("src", openWeatherMapImg);
  $openWeatherMapDesc.html(openWeatherMapDesc);
  $weatherUnlockedTemp.html(weatherUnlockedTemp);
  $weatherUnlockedImg.attr("src", weatherUnlockedImg);
  $weatherUnlockedDesc.html(weatherUnlockedDesc);
  $('#city').val('');
  $('#state').val('');
}

function updateUIFailure() {
  $location.html('');
  $errorMessage.html('That is not a valid city or state. Please try again');
  $errorMessage.addClass('error');
}

function parseWeatherUnlocked(data) {
  let temp = data.temp_f + ' degrees Fahrenheit'
  let description = data.wx_desc;
  let icon = data.wx_icon;
  let img = `set/${data.wx_icon}`;
  weatherUnlockedTemp = temp;
  weatherUnlockedImg = img;
  weatherUnlockedDesc= description;
};

function parseOpenWeatherMap(data) {
  let temp = data.main.temp + ' degrees Fahrenheit';
  let description = data.weather[0].description;
  let icon = data.weather[0].icon;
  let img = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
  openWeatherMapTemp = temp;
  openWeatherMapImg = img;
  openWeatherMapDesc = description;
};

function parseGoogleMaps(data) {
  lat = data.results[0].geometry.location.lat;
  long = data.results[0].geometry.location.lng;
};

function getLatLong(url, parseData, setURLs, getWeatherData) {
  return $.get(url, function(data) {})
  .done(function(data) {
    parseData(data);
  })
  .done(function(data) {
    setURLs();
  })
  .done(function(data) {
    getWeatherData(weatherUnlockedUrl, parseWeatherUnlocked);
    getWeatherData(openWeatherMapUrl, parseOpenWeatherMap);
  })
  .done(function(data) {
    updateUISuccess();
  })
  .fail(function() {
    updateUIFailure();
  })
};

function setURLs() {
  openWeatherMapUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${openWeatherMapApiKey}&units=${units}`;
  weatherUnlockedUrl = `http://api.weatherunlocked.com/api/current/${lat},${long}?app_id=${weatherUnlockedAppId}&app_key=${weatherUnlockedAppKey}`;
}

// get Weather Data in a few different flavors.
function getWeatherData(url, parseData) {
  return $.get(url, function(data) {})
  .done(function(data) {
    parseData(data);
  })
  .done(function(data) {
    updateUISuccess();
  })
  .fail(function() {
    updateUIFailure();
  })
};

function getWeatherData1(url, parseData) {
  return fetch(url)
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }
      else {
        updateUIFailure();
      }
    })
    .then(function(data) {
      parseData(data);
    })
    .then(function(data) {
      updateUISuccess();
    });
};


function getWeatherData2(url, parseData) {
  return $.ajax({
    url: url,
  })
  .done(function(data) {
    parseData(data);
  })
  .fail(function() {
    updateUIFailure();
  })
};
