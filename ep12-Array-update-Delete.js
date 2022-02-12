//  Array      Update - Delete

// * push   ,   pop    ,  shift ,  unshift

// !---------------------------------" push "-------------------------------------

//todo: ex 1       " push "     (add to the end of the array)

const data = [10, 20, 30];

data.push(500);

console.log(data); // [10,20,30,500]

// *-----------------------------------------------------------

//todo: ex 1.1

const data1 = [10, 20, 30];

data1.push([500, 1000, 2000]);

console.log(data1); // [10,20,30,[500,1000,2000]]

// *-----------------------------------------------------------

//todo: ex 1.2      use    ...     (spread operator)

const data12 = [10, 20, 30];

data12.push(...[500, 1000, 2000]);

console.log(data12); // [10,20,30,500,1000,2000]

// !------------------------------- " pop " ---------------------------------------

//todo: ex 2       " pop "     (remove from the end of the array)

const data2 = [10, 20, 30];

data2.pop();

console.log(data2); // [10,20]

// !-------------------------------" shift " ---------------------------------------

//todo: ex 3       " shift "     (remove from the start of the array)

const data3 = [10, 20, 30];

data3.shift();

console.log(data3); // [20,30]

// !-------------------------------" unshift " ---------------------------------------

//todo: ex 3       " unshift "     (add to the start of the array)

const data4 = [10, 20, 30];

data4.unshift(5000);

console.log(data4); // [5000,10,20,30]
