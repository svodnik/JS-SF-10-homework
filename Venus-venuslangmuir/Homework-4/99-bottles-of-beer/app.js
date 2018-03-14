
function song99BottlesLyrics() { 

  const ul = document.querySelector('ul');
  ul.className = 'lyrics-list';
  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode('99 Bottles of Beer on the Wall');
  h1.appendChild(h1Text);
  // insert h1 before ul as a sibling
  ul.insertAdjacentElement('afterbegin', h1);
  
  for (let i = 99; i > -1; i-- ) {
    let beerBottle = i;
    let oneLessBottle = (i - 1);  
    const li = document.createElement('li');
    
    let lyricsText;
     
    if ( oneLessBottle === 0 ) {
      oneLessBottle = 'no more';
      lyricsText = beerBottle + ' ' + 'bottle of beer on the wall, ' + beerBottle + ' bottle of beer. Take one down and pass it around, ' + oneLessBottle +  ' bottle of beer on the wall.'; 
      
    } else if ( oneLessBottle === 1 ) {
      lyricsText = beerBottle + ' ' + 'bottles of beer on the wall, ' + beerBottle + ' bottles of beer. Take one down and pass it around, ' + oneLessBottle +  ' bottle of beer on the wall.';
      
    } else if ( beerBottle === 0 ) {
      lyricsText = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.';

    } else {
      lyricsText = beerBottle + ' ' + 'bottles of beer on the wall, ' + beerBottle + ' bottles of beer. Take one down and pass it around, ' + oneLessBottle +  ' bottles of beer on the wall.';
    }
    
    const liText = document.createTextNode(lyricsText);
    li.appendChild(liText);
    ul.appendChild(li);

  }
}

song99BottlesLyrics();


