/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
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

  // 'Calendar'
  // Description: Our app is a browser-based calendar for keeping track of things
  // Every 'calendar' has
  // - name of the month
  // - days of the week
  // - the year
  // Every 'calendar' can
  // - create or delete an event
  // - send notification about upcoming event
  // - highlight the current date
  
// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

let pet_owner;

// Answer Starts Here
pet_owner = {
  name: 'Venus Langmuir',
  address: '123 Nowhere St. San Jose, CA 91234'
};
// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

let some_pet;

// Answer Starts Here

some_pet = {
  name: 'Lily',
  species: "cat",
  breed: 'Siamese',
  noise: 'meow',
  makeNoise: function() {
    console.log(some_pet.name + ' makes a ' + some_pet.noise + ' noise.')
  }
};

some_pet.makeNoise();

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
