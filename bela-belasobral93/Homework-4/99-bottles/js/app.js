/*In your HTML file, you'll want to have an unordered list (<ul>) that contains all of your lyrics.
Each line of the song should appear inside of a list item (<li>) within that unordered list.
Your JavaScript file should programatically append each line of the song to the page
Code this project using vanilla JavaScript methods.
Then refactor your code to use jQuery instead (preserving your original code in comments)
*/

/* Vanilla Javascript

for(var i=99; i > 0; i--){
	if (i<99 && i>1){
		var list = document.querySelector("#list");
		var listItem = document.createElement("li");
		listItem.innerHTML = i + " " + "bottles of beer on the wall," + " " + i + " " + "bottles of beer.\nTake one down and pass it around," + " " + (i-1) + " " + "bottles of beer on the wall.";
		list.appendChild(listItem);
		console.log(listItem);
	}
	
	else{
		var list = document.querySelector("#list");
		var listItem = document.createElement("li");
		listItem.innerHTML = i + " " + "bottle of beer on the wall," + " " + i + " " + "bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.";
		list.appendChild(listItem);
		console.log(listItem);	
	}
};

*/



for(var i=99; i > 0; i--){
	if (i<99 && i>1){
		var listItem = i + ' ' + "bottles of beer on the wall," + ' ' + i + ' ' + "bottles of beer.\nTake one down and pass it around," + ' ' + (i-1) + ' ' + "bottles of beer on the wall.";
		$("ul").append('<li>' + listItem + '</li>');
	}
	
	else{
		var listItem = i + " " + "bottle of beer on the wall," + " " + i + " " + "bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.";
		$("ul").append('<li>' + listItem + '</li>');

	}
};
