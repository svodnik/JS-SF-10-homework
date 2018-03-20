

function madlibs(){
    let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    var txtNode = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    document.getElementById('xForY').textContent = txtNode;
}


var favorites= [];
let favList = document.querySelector('#favorites')
let printFavs = document.querySelector('#print')


function favorite(){
    let el = document.querySelector('#xForY')
    let savedStartup = el.textContent
    favorites.push(savedStartup)

}



printFavs.addEventListener('click', function printFav(){
    while (favList.firstChild) {
        favList.removeChild(favList.firstChild);
    }   
    for (i = 0; i < favorites.length; i++){
        let fav = document.createElement('li')
        fav.textContent = favorites[i]
        favList.appendChild(fav);
    }
})