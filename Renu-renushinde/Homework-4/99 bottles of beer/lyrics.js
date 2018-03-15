
for(var i=99; i > 0; i--){
	if (i<99 && i>1){
		var list = document.querySelector("#lyrics");  // selecting ul.
		var listItem = document.createElement("li");   // create li
		listItem.innerHTML = i + " " + "bottles of beer on the wall," + " " + i + " " + "bottles of beer.\nTake one down and pass it around," + " " + (i-1) + " " + "bottles of beer on the wall.";
		list.appendChild(listItem);    //parent.appendChild('child');
		console.log(listItem);         // display 
	}
	
	else{
		var list = document.querySelector("#lyrics");
		var listItem = document.createElement("li");
		listItem.innerHTML = i + " " + "bottle of beer on the wall," + " " + i + " " + "bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.";
		list.appendChild(listItem);
		console.log(listItem);	
	}
};