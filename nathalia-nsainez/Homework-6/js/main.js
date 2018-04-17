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

//openweathermap.org
const weatherUrl1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey1 = '';
//developer.weatherunlocked.com
const weatherUrl2 = 'http://api.weatherunlocked.com/current/';
const apiKey2 = '';


let button = document.querySelector('#getTemp');
let city = document.querySelector('.city');
let state = document.querySelector('.state');
let zip = document.querySelector('.zip');
button.addEventListener('click', getWeather(), false);


//getWeather('San Jose', 'CA', 94088);
//http://api.weatherunlocked.com/api/forecast/us.33109?app_id={APP_ID}&app_key={APP_KEY}

function getWeather(city, state, zip){
    fetch(weatherUrl2 + 'us.' + zip + '?app_id=18ad6132&app_key='+ apiKey2).then(function(response){
        if (response.ok){
           return response.json();
        } else {
           updateUIError();
        }
 
    }).then(function(data){
         console.log(data);
         updateUISuccess(data.temp_f, city, state, 'F');
    });
}

function updateUISuccess(temp, city, state, scale='K'){
   let tempF;
    //DOM manipulation
    $('#city','#state','#zip').val('');
    $('#location').html(city +','+ state);
    if(scale ==='F') {
            tempF = temp;
        } else {
            tempF = (temp - 273.15) * 1.8 + 32;
        }
   const degFInt = Math.floor(tempF);
   $('#temp').html(degFInt + '&deg; F');
}

function updateUIError(){
    console.log('There is an error: ');
}

