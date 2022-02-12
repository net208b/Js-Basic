//  String

//todo:     1.Multi-line string  can use     ``

//todo:     2. Interpolation can use    ${name of variable}  include with    ``

// !----------------------------------------------------------------

//* ex 1
// Multi-line string  can use     ``

const address = `Customer name : Mr.Nirut 
Address 130/180 Chiang Mai 
Tel : 012-345-6789`;

console.log(address);

// !----------------------------------------------------------------

//* ex 2
// Interpolation canuse    ${name of variable}  include with    ``

let customerName = 'John Wick';
let city = 'New York';
let tel = '666-66-6666';

const address2 = `Customer name : ${customerName} 
Address ${city} 
Tel : ${tel}`;

console.log(address2);
