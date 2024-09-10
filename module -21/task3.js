function avg (numbers){
// console.log(numbers);
let sumArray = 0;
for (let number of numbers){
  // console.log(number);
  sumArray = sumArray + number;
  // console.log(sumArray);;
}
const average = sumArray / numbers.length;
  // console.log(average);
  return average;
}
let isArray = [10,15,20,25,30];
const resultAverage = avg(isArray);
console.log('return the average of those values is ',resultAverage);
