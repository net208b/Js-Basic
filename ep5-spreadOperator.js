//  Spread Operator

//todo:            ...    put in front of the     "Array variable"

// !----------------------------------------------------------------

//* ex 1  " not "  use spread operator ...

const colors1 = ['red', 'green', 'blue'];
const allColors1 = ['white', 'black', colors1];

console.log(allColors1);

// [ 'white', 'black', [ 'red', 'green', 'blue' ] ]

// !----------------------------------------------------------------

//* ex 2   " Use "   spread operator   ...

const colors2 = ['red', 'green', 'blue'];
const allColors2 = ['white', 'black', ...colors2];

console.log(allColors2);

//  [ 'white', 'black', 'red', 'green', 'blue' ]

// !----------------------------------------------------------------

//* ex 3   Use   " .push "    with     spread operator   ...

const colors3 = ['red', 'green', 'blue'];
const allColors3 = ['white', 'black', ...colors3];

const newColors = ['yellow', 'pink', 'orange'];

allColors3.push(...newColors);

console.log(allColors3);

//  ['white', 'black','red',   'green','blue',  'yellow','pink',  'orange']
