/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/



for (let bottles = 99; bottles >= 0; bottles--) {

    // case: 99 - 2 bottles:
    console.log(bottles + " bottles of beer on the wall, " +  bottles + " bottles of beer.\n");
    console.log("Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall. \n \n" );

    // case: 1 bottle:
    if (bottles == 1) {
      console.log(bottles + " bottle of beer on the wall, " +  bottles + " bottle of beer.\n");
      console.log("Take one down and pass it around, " + " no more bottles of beer on the wall. \n \n" );
    }

    // case: no more beer bottles:
    if (bottles == 0) {
      console.log("No more bottles of beer on the wall, no more bottles of beer. \n");
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }

};
