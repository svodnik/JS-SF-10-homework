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

// 'Event'
// Every 'Event' has
// - a name
// - a start time
// - an end time
// - A location

// Every 'Event' can
// - start
// - end

// 'Person'
// Every 'Person' has
// - a name
// - a calendar

// Every 'Person' can
// - schedule events
// - invite other people to events
// Answer Ends Here

// 'Day'
// Every 'Day' has
// - a name
// - a date

//Every 'Day' can
// - begin
// - end
// - accept events


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

let pet_owner;

// Answer Starts Here

pet_owner = {
  name: 'Sasha',
  address: '225 Bush Street, San Francisco, CA, 94103'
}

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

let somePet;

// Answer Starts Here

somePet = {
  name: 'Mr. Bunny',
  species: 'Rabbit',
  breed: 'Easter Rabbit',
  noise: 'hippity hop!',
  makeNoise: function() {
    console.log(this.noise)
  }
}

console.log(somePet.name + ' says ' + somePet.noise)

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
