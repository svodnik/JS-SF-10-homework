// //Vanilla JavaScript
// var lyrics = document.querySelector('#unorganized');
// for (i = 99; i >= 0; i--){
// 	if (i > 2){
// 		var li = document.createElement('li');
// 		var node = document.createTextNode(i + " Bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
// 		li.appendChild(node);
// 		lyrics.appendChild(li);
// 	}
//
// 	else if (i === 2){
// 		var li = document.createElement('li');
// 		var node = document.createTextNode(i + " Bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
// 		li.appendChild(node);
// 		lyrics.appendChild(li);
// 	}
//
// 	else if (i === 1){
// 		var li = document.createElement('li');
// 		var node = document.createTextNode(i + " Bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
// 		li.appendChild(node);
// 		lyrics.appendChild(li);
// 	}
//
// 	else {
// 		var lis = document.createElement('li');
// 		var node2 = document.createTextNode('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
// 		lis.appendChild(node2);
// 		lyrics.appendChild(lis);
// 	}
// }




//JQuery
let lyrics = $('#unorganized');
for (i = 99; i >= 0; i--){
	if( i > 2){
		var  $li = $('<li>');
		var $node = document.createTextNode(i + " Bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
		$li.append($node);
		lyrics.append($li);
	}
else if(i === 2){
		var  $li = $('<li>');
		var $node = document.createTextNode(i + " Bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
		$li.append($node);
		lyrics.append($li);
}
else if(i === 1){
		var  $li = $('<li>');
		var $node = document.createTextNode(i + " Bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
		$li.append($node);
		lyrics.append($li);
}
else{
	var  $li = $('<li>');
	var $node = document.createTextNode('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
	$li.append($node);
	lyrics.append($li);
}
};
