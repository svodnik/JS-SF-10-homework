"use strict";

// Below is the function with vanila JS
function printLyricsJS(lyrics){
	let nextLine = document.createElement('li');
	let nextLyric = lyrics;
	nextLine.appendChild(nextLyric);

	let toPrint = document.querySelector('ul');
	toPrint.appendChild(nextLine);
}

// Below is the function with jQuery
function printLyricsJQ($lyrics){
	let $nextLyric = $lyrics;
	const $toPrint = $('ul');
	let $nextLine = $('<li></li>').text($nextLyric);
	$toPrint.append($nextLine);
}

// Below is the loop with vanila JS
/* let bottle, bottleNum;
for(bottleNum = 99; bottleNum > 0; bottleNum --){
	if(bottleNum == 1){
		bottle = 'bottle';
	} else {
		bottle = 'bottles';
	}

	let lyric1 = document.createTextNode(bottleNum + ' ' + bottle + ' of beer on the wall, ' + bottleNum + ' ' + bottle + ' of beer.');
	printLyricsJS(lyric1);

	let lyric2 = document.createTextNode('Take one down and pass it around, ' + (bottleNum - 1) + ' ' + bottle + ' of beer on the wall.');
	printLyricsJS(lyric2);

}
// Still imperfection with: 'Take one down and pass it around, no more bottles of beer on the wall.' 
// But do not want to console.log additional 2 standalone lines.

let finalLyric1 = document.createTextNode('No more bottles of beer on the wall, no more bottles of beer.');
printLyricsJS(finalLyric1);

let finalLyric2 = document.createTextNode('Go to the store and buy some more, 99 bottles of beer on the wall.');
printLyricsJS(finalLyric2); */

// Below is the loop with jQuery
let bottle, bottleNum;
for(bottleNum = 99; bottleNum > 0; bottleNum --){
	if(bottleNum == 1){
		bottle = 'bottle';
	} else {
		bottle = 'bottles';
	}

	let lyricJQ1 = bottleNum + ' ' + bottle + ' of beer on the wall, ' + bottleNum + ' ' + bottle + ' of beer.';
	printLyricsJQ(lyricJQ1);

	let lyricJQ2 = 'Take one down and pass it around, ' + (bottleNum - 1) + ' ' + bottle + ' of beer on the wall.';
	printLyricsJQ(lyricJQ2);

} 
// Still imperfection with: 'Take one down and pass it around, no more bottles of beer on the wall.' 
// But do not want to console.log additional 2 standalone lines.

let finalLyric1 = 'No more bottles of beer on the wall, no more bottles of beer.';
printLyricsJQ(finalLyric1);

let finalLyric2 = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
printLyricsJQ(finalLyric2);
