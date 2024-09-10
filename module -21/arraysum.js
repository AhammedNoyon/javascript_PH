/*
// sum of all array number

function isArraySum (numbers){
// console.log(numbers);
let sum = 0;
for (let number of numbers){
  // console.log(number);
  sum = sum + number;
}
return sum;
}

let numbs = [ 10, 20, 30, 40]
const isSum = isArraySum(numbs);
console.log('sum of all array numbers is ', isSum);
*/


// sum of all odd numbers in array
function isOdd (numbers){
// console.log(numbers);
let sum = 0;
for (let number of numbers){
  // console.log(number);
  if (number % 2 === 1){
    // console.log(number);
    sum = sum + number;
  }
}
// console.log(sum);
return sum;
}
let returnSumOdd = isOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log('sum of all odd numbers in array is ',returnSumOdd);
