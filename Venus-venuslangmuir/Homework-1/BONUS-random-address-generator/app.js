/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

// Arrays of data
let streetNumber = [1234, 5678, 9101, 1121, 3141, 5161, 7181, 9202, 1222, 3242];
let streetName = ['Nowhere', 'Rosemary', 'Catnip', 'Somewhere', 'Lily', 'Willow', 'Sleepy', 'Seventeen', 'Camper', 'General'];
let cityName = ['Olympia', 'Charleston', 'Raleigh', 'Concord', 'Helena', 'Salem', 'Albuquerque', 'Milwaukee', 'Fargo', 'San Francisco'];
let stateName = ['KS', 'OK', 'MD', 'AR', 'CA', 'PA', 'CT', 'DE', 'FL', 'GA' ];
let zipCode = [90001, 90002, 90003, 90004, 90005, 90006, 90007, 90008, 90009, 90010];


// Generate 5 different random number to make it truly random combination of fake address
let randomNumber1 = Math.floor(Math.random() * streetNumber.length);
let randomNumber2 = Math.floor(Math.random() * streetName.length);
let randomNumber3 = Math.floor(Math.random() * cityName.length);
let randomNumber4 = Math.floor(Math.random() * stateName.length);
let randomNumber5 = Math.floor(Math.random() * zipCode.length);


// Function to put together the random address and output the result in the console
var randomAddress = function() {
    let addressGenerator = streetNumber[randomNumber1] + ' ' + streetName[randomNumber2] + ' Street \n' + cityName[randomNumber3] + ', ' + stateName[randomNumber4] + ' ' + zipCode[randomNumber5];

    console.log(addressGenerator);
}

// Call the function
randomAddress();