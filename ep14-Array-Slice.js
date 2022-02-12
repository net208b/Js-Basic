//* Array Slice  เป็นการดึงส่วนของ Array มาเก็บในตัวแปรใหม่ เพื่อใช้งานต่อไป

//todo:       Slice     (ต่ำแหน่งที่เริ่มต้น , ต่ำแหน่งสุดท้าย - 1)

const data = [10, 20, 30, 40, 50];

// need 20, 30
const lastData = data.slice(1, 3); // index 1 = 20      ,     3 == index(3-1)  = index 2

console.log(lastData); // [20, 30]
