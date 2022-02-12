//  Find Data in Array

// indexof(data)  => ผลการค้นหาข้อมูลทีจะอยู่ตำแหน่งที่ตรงกับค่า index ที่ค้นหา  ถ้าไม่มีเจอจะได้ค่า -1

// find(data)  => ผลการค้นหาข้อมูลทีจะอยู่ตำแหน่งที่ตรงกับค่า index ที่ค้นหา  ถ้าไม่มีเจอจะได้ค่า undefined

//  findIndex(data) => ผลการค้นหาข้อมูลทีจะอยู่ตำแหน่งที่ตรงกับค่า index ที่ค้นหา  ถ้าไม่มีเจอจะได้ค่า -1

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// *------------------------indexof(data)-------------------------------------------

//todo:  1. indexof(data)

const index = colors.indexOf('red');
console.log(index); // 0

const index2 = colors.indexOf('yellow');
console.log(index2); // 3

// *------------------------------find(data)-----------------------------------

//todo:  2. find(data)

const search = colors.find((e) => e === 'red');

console.log(search); // red

const search2 = colors.find((e) => e === 'pink');
console.log(search2); //undefined

// *------------------------------findIndex(data)-----------------------------------

//todo:  3. findIndex(data)

const search4 = colors.findIndex((e) => e === 'red');

console.log(search4); // 0
