/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.
* generate a random number between 1 - 6 and store to a variable, random1
* generate another random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
* get the first die by ID and update the CSS class name to firstDie 
* get the first die by ID and update the CSS class name to secondDie 

2) Follow the steps in your pseudocode to write your code.

3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.

*/

"use strict";

document.querySelector('#roll-dice').addEventListener("click", function(){
	
	let numberDie = 2;
	let dieCSS = ['#first-die','#second-die'];

	for (let i=0; i < numberDie; i++){

		let random = Math.floor((Math.random() * 6))+1;
		let randomCSS = 'dice-' + random;

		var die = document.querySelector(dieCSS[i]);
		die.className = randomCSS;

	}

});

/* Alternative without for loop

document.querySelector('#roll-dice').addEventListener("click", function(){
	
	let random1 = Math.floor((Math.random() * 6))+1;
	let random2 = Math.floor((Math.random() * 6))+1;
	console.log(random1 + ' and ' + random2);

	let random1CSS = 'dice-' + random1;
	let random2CSS = 'dice-' + random2;
	console.log(random1CSS + ' and ' + random2CSS);

	var die1 = document.querySelector('#first-die');
	console.log(die1.className);
	die1.className = random1CSS;

	var die2 = document.querySelector('#second-die');
	console.log(die2.className);
	die2.className = random2CSS;

}); */