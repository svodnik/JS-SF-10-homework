/*
1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
   Note: Equation to convert F to C:
   C = (F - 32) / 1.8
   Test your function. 
*/

    // let convertF2C = function (F) {
    //    let C = Math.floor((F - 32) / 1.8);
    //     console.log(C);
    // }

    // convertF2C(56);


/*
2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
   Note: Equation to convert C to F:
   F = 1.8 * C + 32
   Test your function. 
*/

    // let convertC2F = function (C) {
    //    let F = Math.ceil(1.8 * C + 32);
    //     console.log(F);
    // }

    // convertC2F(13);
    

/*
BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.   
	    (Hint: read about the document.querySelector() method.)
	2.  Set the appropriate function to run when each button is clicked.
        (Hint: read about the addEventListener() method.)
*/


/*
BONUS 2: Display the result of each calculation in the browser window rather than in the console:
    1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.
*/


/*
BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
*/



/* ******************************************** 
// VERSION 1
******************************************** */

// let tempConverter = function () {
  
//     // The function to convert Celsius to Fahrenheit
//     function convertC2F() {
//         let result = document.querySelector('#result');        
//         let temp = document.querySelector('#temperature').value;  

//         if (temp === '' || isNaN(temp)) {
//             result.textContent = "Error! Please enter a number."
//         } else {
//             let getResult = result.textContent = Math.ceil(1.8 * temp + 32)
//         }              
//     }
  
//     // The function to convert Fahrenheit to Celsius
//     function convertF2C() {
//         let result = document.querySelector('#result');       
//         let temp = document.querySelector('#temperature').value;    

//         if (temp === '' || isNaN(temp)) {
//             result.textContent = "Error! Please enter a number."
//         } else {
//             let getResult = result.textContent = Math.floor((temp - 32) / 1.8);
//         }                 
//     }
  
//     // Grab the button
//     let C2Fbutton = document.querySelector('#celsius_to_fahrenheit');
//     let F2Cbutton = document.querySelector('#fahrenheit_to_celsius');
    
//     // Attach a Click Event for Celsius button
//     C2Fbutton.addEventListener('click', convertC2F);
//     // Attach a Click Event for Fahrenheit button
//     F2Cbutton.addEventListener('click', convertF2C);

//     // Clear the form field and the result when you click inside the form  
//     let temp = document.querySelector('#temperature');
//     let result = document.querySelector('#result'); 

//     function clearField() {
//       temp.value = '';
//       result.textContent = '';
//     }
  
//     // Attach a Click Event for Celsius button
//     temp.addEventListener('click', clearField);
    
// }

// tempConverter();



/* ******************************************** 
// VERSION 2
******************************************** */

let tempConverter = function() { 
  
    // Grab the input field and result area
    let result = document.querySelector('#result');        
    let temp = document.querySelector('#temperature');
    // Grab the buttons
    let C2Fbutton = document.querySelector('#celsius_to_fahrenheit');
    let F2Cbutton = document.querySelector('#fahrenheit_to_celsius');
  

    // The function to convert Celsius to Fahrenheit
    function convertC2F() { 
        if (temp.value === '' || isNaN(temp.value)) {
            result.textContent = "Error! Please enter a number.";
        } else {
            let getResult = result.textContent = Math.ceil(1.8 * temp.value + 32);
        }              
    }
  
  
    // The function to convert Fahrenheit to Celsius
    function convertF2C() {    
        if (temp.value === '' || isNaN(temp.value)) {
            result.textContent = "Error! Please enter a number.";
        } else {
            let getResult = result.textContent = Math.floor((temp.value - 32) / 1.8);
        }                 
    }
  
  
    // The function to clear the form field and result areas  
    function clearField() {
      let emptyField = temp.value = '';
      let emptyResult = result.textContent = '';
    }
  
  
    // Attach a Click Event for Celsius button
    C2Fbutton.addEventListener('click', convertC2F);
    // Attach a Click Event for Fahrenheit button
    F2Cbutton.addEventListener('click', convertF2C);
    // Attach a Click Event for input form
    temp.addEventListener('click', clearField);
    
}

tempConverter();
