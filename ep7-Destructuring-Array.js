//  Destructuring  work with Array

// ! -------------------------------------------------------------------------

// * ex 1   Array   (Old way)

const colors = ['green', 'blue', 'red'];

const green = colors[0];
const blue = colors[1];

console.log(green); //  green

console.log(blue); // blue

// ! -------------------------------------------------------------------------

// * ex 2   Destructuring *****  (New way)

const colors2 = ['yellow', 'white', 'black'];

const [yellow, white, black] = colors2;

console.log(yellow); //  yellow

console.log(white); // white

// ! -------------------------------------------------------------------------

// * ex 3   Destructuring *****  (need data in array only  "One quantity")
// need index 2 = orange

const colors3 = ['pink', 'darkblue', 'orange'];

const [, , orange] = colors3;

console.log('ex 3 =' + orange); //  orange

// ! -------------------------------------------------------------------------

// * ex 4   Destructuring *****  (need data in array only  "Two quantity")
// need index 0 & 2 = pink & orange

const animal = ['dog', 'cat', 'lion'];

const [dog, , lion] = animal;

console.log('ex 4 =' + dog); //  pink
console.log('ex 4 =' + lion); //  orange
