/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

let streetNumber = ['2312', '324', '134', '413', '4323'];
let streetName = ['Campus Dr', 'Dolphin', 'Haight', 'Bulhoes', 'Forest'];
let city = ['Daly City', 'San Francisco', 'Burlingame', 'New York', 'San Bruno', 'Austin'];
let state = ['CA', 'NY', 'TX', 'FL'];
let zipCode = ['94015', '94403', '45215', '53134'];

function randomAddress() {
	let x = streetNumber[Math.floor(Math.random()*streetNumber.length)];
	let y = streetName[Math.floor(Math.random()*streetName.length)];
	let z = city[Math.floor(Math.random()*city.length)];
	let c = state[Math.floor(Math.random()*state.length)];
	let a = zipCode[Math.floor(Math.random()*zipCode.length)];
	console.log(x +' ' + y + ', ' + z +' '+ c +', '+ a);
	document.getElementById("change").innerHTML = (x +' ' + y + ', ' + z +' '+ c +', '+ a);
}


