/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.

random1 = randomnumber between 1-6 
random2 = randomnumber between 1-6 
first 



2) Follow the steps in your pseudocode to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate another random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
* get the first die by ID and update the CSS class name to firstDie 
* get the first die by ID and update the CSS class name to secondDie 

3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.

*/

let classDice = ['dice-1','dice-2','dice-3','dice-4','dice-5','dice-6']
let roll = document.querySelector('#roll-dice')


roll.addEventListener('click',function(){
    let firstDie = document.querySelector('#first-die')
    let secondDie = document.querySelector('#second-die')
    let random1 = Math.floor((Math.random() * classDice.length));
    let random2 = Math.floor((Math.random() * classDice.length));
    let css1 = "dice" + " "+ classDice[random1]
    let css2 =  "dice" + " "+ classDice[random2]
    firstDie.className = css1
    secondDie.className= css2
})