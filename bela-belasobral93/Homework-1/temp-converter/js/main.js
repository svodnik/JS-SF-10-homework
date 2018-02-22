/*
1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
   Note: Equation to convert F to C:
   C = (F - 32) / 1.8
   Test your function.
*/


 //return first element in document with id "temperature", in this case, the user input

let celcius;
let temp = document.querySelector("#temperature").value;

   function fToC(){
      return celcius = (temp - 32) / 1.8;
      console.log(celcius);
      document.getElementById("result").value = celcius;

   };
   
   let firstButton = document.getElementById('fahrenheit_to_celsius');
   firstButton.addEventListener('click', fToC);






/*
2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
   Note: Equation to convert C to F:
   F = 1.8 * C + 32
   Test your function.
*/



  let fahrenheit;
   function cToF(){
      return fahrenheit = (1.8 * temp) + 32;
      console.log(fahrenheit);
      document.getElementById("result").value = fahrenheit;

      };
   
   let secondButton = document.getElementById('celsius_to_fahrenheit');
   secondButton.addEventListener('click', cToF); 






/*
BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.   
	2.  Set the appropriate function to run when each button is clicked.
		(Hint: read about the addEventListener() method.)

BONUS 2: Display the result of each calculation in the browser window rather than in the console:
	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.

BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 
'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
*/



