// *     Array Splice

//todo:   1    Splice       ( ต่ำแหน่งที่จะลบ , จำนวนที่จะลบ )   (index, howMany)

const data = [10, 20, 30, 40, 50];

data.splice(1, 2);

console.log(data); // [10, 40 ,50]

// !----------------------------------------------------------------------

//todo:   2    Splice       ( ต่ำแหน่งที่จะลบ , จำนวนที่จะลบ , สมาชิกที่ต้องการเเทรกเข้าไป ในต่ำเเหน่งที่ต้องการลบ  )   (index, howMany , member)

const data2 = [10, 20, 30, 40, 50];

data2.splice(1, 2, 99, 44);

console.log(data2); // [ 10, 99, 44, 40, 50 ]    (delete 2 member and add 2 member)
