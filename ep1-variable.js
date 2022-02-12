// Block Scope (let/const)

// 1. var

var x = 10;

if (x === 10) {
  var y = 500;
  console.log('y in = ' + y);
}

console.log('y out = ' + y);

// ! This is problem ( False) because  " var y " should is not defined outside the if block scope  ( then we are not use "var" keyword )

// !---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. let

let a = 20;
let z = 50;

if (a === 20) {
  let z = 100;
  console.log('z in = ' + z); // 100
}

console.log('z out = ' + z); // 50

// * This is " True "" because  " let z = 100 " should is not defined outside the if block scope
// ? But it will find "let z = 50" because we are anoucing  keyword outside the " if " block scope

// !---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. const

const b = 150;
b = 800;

console.log(b);

// * console.log(b); wil show only 150  because " const b = 150 " can not change the value of " b " because it is a constant
