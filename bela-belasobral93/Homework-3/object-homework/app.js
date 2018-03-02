
///////////////////////// Challenge /////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. 
//In comments, list at least three reasonable abstractions that you might use to build this program; 
//for each abstraction, list out at least two properties and behaviors that it would make sense for that 
//abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
// 'Coffee Shop'
// Description: Our app manages drink sales.
  // Every 'coffee shop' has
  // - a barista
  // - a customer
  // - a menu
  // Every 'coffee shop' can
  // - brew coffee
  // - brew tea
  // - grind beans

// 'Cell Phone'
// Description: Our app manages your phone's functionality.
  // Every 'cell phone' has
  // - an app store
  // - a music player
  // - a photo album
  // Every 'coffee shop' can
  // - make calls
  // - send e-mails
  // - explore the web

// 'Club'
// Description: Our app manages your night club's popularity.
  // Every 'club' has
  // - a bouncer
  // - a bartender
  // - a DJ
  // Every 'club' can
  // - sell alcohol
  // - play music
  // - kick people out


// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 
//'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

// Answer Starts Here
let pet_owner = {
  Owner: {
    ownerName: ["Bela", "Alexis", "Mark"],
    ownerAddress: ["123 coffee st, San Francisco", "456 tea st, Oakland", "789 latte st, Berkeley"] 
  },
  Description: "Pet vaccination management"
};
// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable 
//`some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.


// Answer Starts Here
let some_pet = {
  Pet: {
    petName: ["leah", "xuxu", "gucci"],
    petSpecies: ["cat", "dog", "hamster"],
    petBreed: ["maltese", "siamese", "teddy"],
    noise: ["bark","meow","whisker"]
  },
  makeNoise: function(noise){
  },
  Description: "Pet vaccination management"
};


// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
