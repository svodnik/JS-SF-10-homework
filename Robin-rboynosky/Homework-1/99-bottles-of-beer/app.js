/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/
//Tried this...
/*let bottlesOfBeer = 98;

function sing(bottlesOfBeer) {
    if(bottlesOfBeer <= 99)
 {console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer!\nTake one down and pass it around, \n"+ bottlesOfBeer -1 + " bottles of beer on the wall!");
   return bottlesOfBeer -1;
  } else if(bottlesOfBeer = 1)
 {console.log(bottlesOfBeer + " bottle of beer on the wall, " + bottlesOfBeer + " bottle of beer!\nTake it down, and recycle the bottle, \n no more bottles of beer on the wall.");
 }
   else if (bottlesOfBeer = 0) {
     console.log("Would you like some tea?");
   }
};
sing(98);*/


/*let songPart = ['beginning', 'middle', 'end'];
let bottles = 99;
function song(bottles) {
  for(let i = 0; 1 < songPart.length; i++) {
    if (bottles = 99) {
    console.log(bottles + "bottles of beer on the wall,\n" + bottles + " of beer!\nTake one down, pass it around " + (bottles -=1) + " bottles of beer on the wall!");
    } else if (bottles = 1) {
    console.log( bottle + " bottle of beer on the wall!");
    } else if (bottles = 0){
      console.log("No more beer. Would you like some tea?");
     } else if (bottles > 99) {
       console.log("Stop.");
     }
    };

song(bottles);}*/



var bottles

for (counter = 99; counter >= 1; counter = counter -1) {
  if (counter == 1) {
  bottles = "bottle";
  }
  else {
    bottles = "bottles";
  }
  console.log(counter +" "+ bottles+ " of beer on the wall.");
  if (counter < 99); {
   console.log("");
   console.log(counter+ " " +bottles+ " of beer of the wall.");
   }
   console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
     }
}
