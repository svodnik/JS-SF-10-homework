/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/


function singRefrain(bottles) {
  console.log(bottles + " bottles of beer on the wall!");
  console.log(bottles + " bottles of beer!");
  console.log("Take one down and pass it around.");
  bottles--;
  if (bottles===1) {
    console.log(bottles + " bottle of beer on the wall!");
  } else {
    console.log(bottles + " bottles of beer on the wall!");
  }
}

function sing99Bottles(bottles) {
  if (bottles===1) {
  console.log(bottles + " bottle of beer on the wall!");
  console.log(bottles + " bottle of beer!");
  console.log("Take one down and pass it around.");
  bottles--
  console.log(bottles + " bottles of beer on the wall!");
  } else {
    singRefrain(bottles);
    sing99Bottles(bottles - 1);
  }
}
sing99Bottles(99);