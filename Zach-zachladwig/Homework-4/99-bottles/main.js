// The javascript way

// const lyricsList = document.querySelector("#lyrics");
//
// for(var i=99; i > 0; i--) {
//   var newLyric = document.createElement("li");
//   lyricsList.appendChild(newLyric);
//   var text;
//
//   if(i === 1) {
//     text = (i + " bottle of beer on the wall, " + i + " bottle of beer. \n Take one down and pass it around, no more bottles of beer on the wall.")
//   }
//   else {
//     text = (i + " bottles of beer on the wall, " + i + " bottles of beer. \n Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.")
//   }
//   newLyric.innerHTML = text;
// }
//
//
// text = ("No more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, 99 bottles of beer on the wall.")
// var newLyric = document.createElement("li");
// lyricsList.appendChild(newLyric);
// newLyric.innerHTML = text;

// the jquery way

const $lyricsList = $("#lyrics")

for(var i=99; i > 0; i--) {
  var $newLyric = $("<li></li>");
  $lyricsList.append($newLyric)
  var text;

  if(i === 1) {
    text = (i + " bottle of beer on the wall, " + i + " bottle of beer. \n Take one down and pass it around, no more bottles of beer on the wall.")
  }
  else {
    text = (i + " bottles of beer on the wall, " + i + " bottles of beer. \n Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.")
  }
  $newLyric.text(text)
}

text = ("No more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, 99 bottles of beer on the wall.")
var $newLyric = $("<li></li>");
$lyricsList.append($newLyric)
$newLyric.text(text)
