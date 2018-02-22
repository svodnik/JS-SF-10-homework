
function madlibs(){
    let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    var txtNode = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    document.getElementById('xForY').textContent = txtNode;
}

var favorites=[];

function favorite(){
    let el = document.querySelector('#xForY')
    let savedStartup = el.textContent
    favorites.push(savedStartup)
}

function printFav(){
    console.log(favorites)
    for (i = 0; i < favorites.length; i++){
        let fav = document.createElement('text')
        fav.textContent  = '\n' + (i+1) + ": " + favorites[i]
        document.getElementById('favorites').appendChild(fav);
    }
}