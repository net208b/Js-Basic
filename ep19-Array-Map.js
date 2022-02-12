//  Array Map

// นำตัวแปร array มาใช้งาน map เพื่อแปลงค่าที่เก็บใน array เป็นค่าที่ต้องการ

// ---------------------------------------------------------------------------------
// * Ex 1  Array Map with number

const numbers = [10, 20, 30, 40];

const result = numbers.map((e) => {
  const a = e * 2; // [10x2, 20x2, 30x2, 40x2]     it can change e*e,or e*10 etc
  return a;
});

console.log(`Array Map = ${result}`); // Array Map = 20,40,60,80

// ---------------------------------------------------------------------------------

// * Ex 2  Array Map with String

const data = ['rain', 'snow', 'sun', 'wind', 'cloud', 'cloudsnow', 'good'];

//  i = index
// e = element [rain, snow, sun, wind, cloud, cloudsnow, good]
const result2 = data.map((e, i) => {
  return `Day ${i + 1} , The weather is ${e}`;
});

console.log(`Array Map 2 = ${result2}`);
// Array Map 2 = Day 1 The weather is rain,Day 2 The weather is snow,Day 3 The weather is sun,Day 4 The weather is wind,Day 5 The weather is cloud,Day 6 The weather is cloudsnow,Day 7 The weather is good

// ---------------------------------------------------------------------------------

// * Ex 3  Array Map with Object

const dataWeather = [
  {day: '01/06/2565', weather: 'rain', temp: 20},
  {day: '02/06/2565', weather: 'snow', temp: 10},
  {day: '03/06/2565', weather: 'sun', temp: 30},
];

const weatherResult = dataWeather.map((e) => {
  return e.weather;
});

console.log(`Array Map 3 = ${weatherResult}`); // Array Map 3 = rain,snow,sun
