//  Loop Array

//  1.For loop   (วนลูปตามจำนวนสมาชิกของ Array)

// todo:-------------------------for loop -------------------------------

//* Ex 1   For loop

const data = [10, 20, 30, 40, 50];

for (let i = 0; i < data.length; i++) {
  //   if (data[i] >= 30) break;
  console.log(`Count ${i} : ${data[i]}`);
}

// Count 0 : 10
// Count 1 : 20
// Count 2 : 30
// Count 3 : 40
// Count 4 : 50
