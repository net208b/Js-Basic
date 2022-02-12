// Array Loop

//! ForEach Loop คือวนลูปตามจำนวนสมาชิกของ Array แต่ไม่สามารถใช้ break ได้

// todo:-------------------------forEach loop -------------------------------

//* Ex 1   ForEach

const data = [10, 20, 30, 40, 50];

data.forEach((e) => {
  // e = element สมาชิกที่อยู่ใน Array data2
  if (e >= 30) {
    console.log('Hello');
  }
  console.log(`สมาชิกที่อยู่ใน Array data2 : ${e}`);
});

// สมาชิกที่อยู่ใน Array data2 : 10
// สมาชิกที่อยู่ใน Array data2 : 20
// Hello
// สมาชิกที่อยู่ใน Array data2 : 30
// Hello
// สมาชิกที่อยู่ใน Array data2 : 40
// Hello
// สมาชิกที่อยู่ใน Array data2 : 50

// *------------------------------------------------------------

// * Ex 1.1

const data2 = [10, 20, 30, 40, 50];

let sum = 0;

data2.forEach((e) => {
  sum += e;
  console.log(`Total : ${sum}`);
});

// Total : 10
// Total : 30
// Total : 60
// Total : 100
// Total : 150
