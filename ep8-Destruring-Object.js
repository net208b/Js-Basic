//  Destructuring  work with  Object

// Object

// !------------------------------------------------------------------------------------------------------

//* ex 1  Destructuring object       (Old way)

const product = {
  productName: 'computer',
  price: 30000,
  stock: 10,
};

const Pname = product.productName;
const price = product.price;
const stock = product.stock;

console.log('Product is ' + Pname); //  computer
console.log(price); // 30000
console.log(stock); // 10

// !------------------------------------------------------------------------------------------------------

//* ex 2   Destructuring Object*****     (New way)

const animal = {
  animalName: 'cat',
  age: 5,
  leg: 4,
};

// const {animalName: animalName, age: age, leg: leg} = animal;

const {animalName, age, leg} = animal;

console.log('Animal is ' + animalName); //  cat
console.log(age); // 5
console.log(leg); // 4
