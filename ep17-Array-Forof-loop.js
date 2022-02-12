// Array Loop

//! ForOf loop

// todo:-------------------------forOf loop -------------------------------

//* Ex 1   Forof

const data = [10, 20, 30, 40, 50];

for (const e of data) {
  console.log(`สมาชิกที่อยู่ใน Array data : ${e}`);
}

// สมาชิกที่อยู่ใน Array data : 10
// สมาชิกที่อยู่ใน Array data : 20
// สมาชิกที่อยู่ใน Array data : 30
// สมาชิกที่อยู่ใน Array data : 40
// สมาชิกที่อยู่ใน Array data : 50

// *------------------------------------------------------------

// * Ex 1.1    forOf can use break

const data2 = [10, 20, 30, 40, 50];

for (const e of data2) {
  if (e >= 30) break;
  console.log(`สมาชิกที่อยู่ใน Array data2 : ${e}`);
}

// สมาชิกที่อยู่ใน Array data2 : 10
// สมาชิกที่อยู่ใน Array data2 : 20
