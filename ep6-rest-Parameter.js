//  Rest Parameter    ...

//todo: can send "Parameter" to function   (Unlimit quantity of parameter)   we are use ...    (seem like spread operator)

// *  Rest Parameter    ... use with  Array

// ?    or  we can call     " use spread operator  in function "

// !----------------------------------------------------------------

//  * ex 1

sunmation = (...numberArr) => {
  let total = 0;

  for (let number of numberArr) total += number; // 0 + 500 + 1000 + .........

  return total;
};

console.log(sunmation(500, 1000));

console.log(sunmation(500, 1000, 800));

console.log(sunmation(500, 1000, 800, 490));

//  1500
//  2300
//  2790
