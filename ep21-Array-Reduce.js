//  Array Reduce

// is used to reduce the elements of an array to a single value.

// นำค่าที่มีอยู่ในอาร์เรย์มารวมกันเป็นค่าเดียว เเล้วส่งค่าที่รวมกลับมา(ค่าเดียว)  ให้กับตัวแปรที่สร้างขึ้นใหม่ ไปใช้งาน

// initialValue =  ค่าเริ่มต้นของการรวมค่าที่มีอยู่ใน Array

//todo:            array.reduce((ค่าที่ถูกประมวลผล, element) => {}, initialValue)

// ---------------------------------------------------------------------------------

// **** Ex 1  find total sum of number in Array

const data = [10, 20, 30, 40];

// Value = initialValue =0    (นำค่า e = element ที่มีอยู่ใน Array มารวมกัน  โดยการกำหนดค่าเริ่มต้นเป็น 0 ไว้ก่อน  เเละ return ไปเก็บไว้ใน value  วนจนกว่าจะถึง สมาชิก ค่าสุดท้ายของ Array  )
const summation = data.reduce((value, e) => {
  const total = e + value;
  return total;
}, 0);

console.log(`Array Reduce = ${summation}`); // Array Reduce = 100

// 0 => 0 + 10 => 10 + 20 => 30 + 30 => 60 + 40 => 100

// ---------------------------------------------------------------------------------

// **** Ex 2  Object Array Reduce

const cart = [
  {name: 'shoes', price: 100},
  {name: 'shirt', price: 200},
  {name: 'pants', price: 300},
];

const sumCart = cart.reduce((value, e) => {
  const total = e.price + value;
  return total;
}, 0);

//  const sumCart = cart.reduce((value, e) => e.price + value , 0);  เขียน เเบบ บรรทัดเดียว

console.log(`Sum 0f cart = ${sumCart}`); // Sum 0f cart = 600
