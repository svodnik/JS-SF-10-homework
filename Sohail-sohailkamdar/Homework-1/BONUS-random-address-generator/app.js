/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

let street = ['Oak Street', 'Maple Street', 'Spruce Street', 'Magnolia Drive'];
let house = ['112', '102', '23','1208', '92-87', '11', '129'];
let city = ['New York', 'Houston', 'Dallas', 'Miami', 'Newark', 'Los Angeles', 'Seattle'];
let zip = ['12345', '23456', '34567', '45678'];
let state = ['CA', 'WA', 'TX', 'NY', 'FL', 'NJ'] ;

function randomAddress(){
    let randomStreet = Math.floor((Math.random() * street.length));
    let randomHouse = Math.floor((Math.random() * house.length));
    let randomCity = Math.floor((Math.random() * city.length));
    let randomZip = Math.floor((Math.random() * zip.length));
    let randomState = Math.floor((Math.random() * state.length));
    let address = house[randomHouse] + " " + street[randomStreet] + ", " + city[randomCity] + " " + state[randomState] + ", " + zip[randomZip]
    document.getElementById('randomAddress').textContent = address;
}
