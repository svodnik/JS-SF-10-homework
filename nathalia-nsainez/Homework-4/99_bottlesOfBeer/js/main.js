/* You'll need to create both an HTML file and a JavaScript file.
In your HTML file, you'll want to have an unordered list (<ul>) 
that contains all of your lyrics.
Each line of the song should appear inside of a list item (<li>)
 within that unordered list.
Your JavaScript file should programatically append each line 
of the song to the page--no hard-coding lyrics in HTML!
*/

let allLyrics = document.querySelector('#allLyrics');
let button = document.querySelector("#button");
let ul;

console.log(allLyrics);
console.log(button);

let newLine =document.createElement('li');
newLine.className = 'allLyrics';
let newLineText=document.createTextNode(newLine);
newLine.appendChild(newLineText);
allLyrics.appendChild(newLine);

$("li").hide();

$("button").click(function(){
    $("li").each(function (index, element){
        let ul = document.getElementById("allLyrics");
        let items = ul.getElementsByTagName("li");
            for (let i=0; i <items.length; i++){
                  $(ul).show();
                // console.log(ul);
            }
});


/*
$(document).ready(function(){
    $("button").click(function(){
        $("li").show();
    })
});
*/

/*
$(
    function(){
    $("li").hide();


        "lyrics",
        {
            Index: 0,
            Collection: $("li")
        }

    button.click(
        function( objEvent){
            let txt =$(this);
                if(txtConfig<txtConfig.Collection.length){
                    $(txtConfig.Collection[txtConfig.Index++]).slideDown();
                }
        txtConfig.preventDefault();
        return(false);  
        }
        );
    }
);
*/


/*
$("button").click(function(){
    $("li").each(function (index, element){
        $(element).show();
        
    });

});
*/


/*
$("#show").click(function() {
    $("allLyrics").show();
});
*/

/*
function iterate(){
    let ul = document.getElementById("allLyrics");
    let items = ul.getElementsByTagName("li");
        for (let i=0; i <items.length; ++i) {
    
} }
*/

/*
button.addEventListener('click', function(event) {
    event.preventDefault();
    let ul = document.getElementById("allLyrics");
    let newLine =document.createElement('li');
    newLine.className = 'allLyrics';
    let newLineText=document.createTextNode(ul);
    let items = ul.getElementsByTagName("li");
        for (let i=0; i <items.length; ++i) {
    newLine.appendChild(newLineText);
    allLyrics.appendChild(newLine);
}

}, false);

*/
