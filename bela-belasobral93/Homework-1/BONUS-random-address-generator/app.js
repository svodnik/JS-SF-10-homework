/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses.
    As a first step, create arrays that contain dummy data for each of the following: street number, 
    street name, city name, state name, and zip code. Your script should randomly select one item from 
    each of these arrays and then use them to construct a random address. Each time you load or reload 
    the page in a browser, your program should print a new randomly-generated address to the terminal. 
    For example:
   
    34578 Dolphin Street, Wonka NY, 44506
*/



 var adressInfo = {
 streetNumber : [820, 555, 718, 415],
 streetName :  ["joost", "ocean", "portola", "hazelwood"],
 stateName:  ["california","oregon","washington","hawaii"],
 zipCode : [94127, 94545, 94222, 94012]

};

/*console.log(Object.entries(adressInfo)[2][1][1]);
for (let entries in adressInfo){
	let first = adressInfo.streetNumber;
	console.log(first);
}
*/


let first = adressInfo.streetNumber[Math.floor(Math.random() * adressInfo.streetNumber.length)];
let second = adressInfo.streetName[Math.floor(Math.random() * adressInfo.streetName.length)];
let third = adressInfo.stateName[Math.floor(Math.random() * adressInfo.stateName.length)];
let fourth = adressInfo.zipCode[Math.floor(Math.random() * adressInfo.zipCode.length)];

console.log (first + " " + second + " st., " + third + ", " + fourth);

