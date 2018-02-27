/* Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses As a first step, create
    arrays that contain dummy data for each of the following: street number,
    street name, city name, state name, and zip code Your script should
    randomly select one item from each of these arrays and then use them to
    construct a random address Each time you load or reload the page in a
    browser, your program should print a new randomly-generated address to the
    terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506 */

"use strict";

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let streetNumber = getRandomInteger(0,100);
let streetName = ['Street Name #1','Street Name #2','Street Name #3','Street Name #4','Street Name #5'];
let cityName = ['City Name #1','City Name #2','City Name #3','City Name #4','City Name #5'];
let stateName = ['State Name #1','State Name #2','State Name #3','State Name #4','State Name #5'];
let zipCode = getRandomInteger(10000,99999);

let address = streetNumber + ' ' + streetName[getRandomInteger(0,streetName.length-1)] + ', ' + 
				cityName[getRandomInteger(0,cityName.length-1)] + ' ' + 
				stateName[getRandomInteger(0,stateName.length-1)] + ', ' + zipCode;

console.log(address);