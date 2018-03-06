


let origins="24 Sussex Drive Ottawa ON"
origins = origins.split(' ').join('+')
let destination = "1461 Alice Street Oakland CA"
destination = destination.split(' ').join('+')
let mode = 'driving'

let Url = makeURL(origins,destination)
let json_obj = JSON.parse(Get(Url));
console.log(json_obj)
console.log(timeToDestination(json_obj))


function makeURL(origins, destination){
const key = "AIzaSyAoII95Lhck_6i3XJHBfQefjxqDqHCN358"
let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins='+ origins + '&destinations=' + destination+ '&mode='+mode+'&language=en-US&key=' + key
console.log(url)
return url
}

function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

function timeToDestination(json_obj) {
  if ( json_obj.rows[0].elements[0].status !=='OK') {
    console.log('err');
  } else {
    let origin = json_obj.origin_addresses[0];
    let destination = json_obj.destination_addresses[0];
    if (json_obj.rows[0].elements[0].status === "ZERO_RESULTS") {
      console.log("Better get on a plane. There are no roads between " 
                        + origin + " and " + destination);
    } else {
      let duration = json_obj.rows[0].elements[0].duration;
      let duration_text = duration.text;
      return ("It will take "+ duration_text+" to get from " +origin+ " to "+ destination);
    }
  }
}
  
