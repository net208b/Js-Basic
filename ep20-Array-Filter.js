//  Array Filter

// is used to filter out the elements of an array.

// ---------------------------------------------------------------------------------

// * Ex 1  Array Filter with     Condition   (สมาชิกที่  ผ่าน เงื่อนไข ที่กำหนดคัดกรองออกเเล้ว เเละเก็บไว้ในตัวแปรที่สร้างขึ้นใหม่ )

const data = [10, 20, 30, 40];

const result1 = data.filter((e) => {
  return e > 20;
});

console.log(`Array Filter = ${result1}`); // Array Filter = 30,40

// ---------------------------------------------------------------------------------

// * Ex 2  Array Filter with    Object

const dataEmployees = [
  {name: 'Pun', salary: 25000, department: 'developer', age: 20},
  {name: 'Som', salary: 35000, department: 'Pilot', age: 30},
  {name: 'Joy', salary: 45000, department: 'doctor', age: 40},
  {name: 'Bell', salary: 55000, department: 'student', age: 50},
  {name: 'John', salary: 65000, department: 'marketing', age: 60},
];

const result2 = dataEmployees.filter((e) => e.salary > 45000);

console.log(`Array Filter 2 = ${result2}`); // Array Filter 2 = [object Object],[object Object]

console.log(result2);
// [
//     { name: 'Bell', salary: 55000, department: 'student', age: 50 },
//     { name: 'John', salary: 65000, department: 'marketing', age: 60 }
//   ]

// ---------------------------------------------------------------------------------

// * Ex 3  Array Filter with    Object   ( continue !!)

const dataEmployees2 = [
  {name: 'Pun', salary: 25000, department: 'developer', age: 20},
  {name: 'Som', salary: 35000, department: 'Pilot', age: 30},
  {name: 'Joy', salary: 45000, department: 'doctor', age: 40},
  {name: 'Bell', salary: 55000, department: 'student', age: 50},
  {name: 'John', salary: 65000, department: 'marketing', age: 60},
];

const result3 = dataEmployees2
  .filter((e) => e.salary > 45000)
  .filter((e) => e.department === 'marketing');

console.log(`Array Filter 3 = ${result3}`); // Array Filter 3 = [object Object]

console.log(result3);
// [ { name: 'John', salary: 65000, department: 'marketing', age: 60 } ]
