function isOddEven (number){
// console.log(number);
if(number % 2 === 1){
  // console.log('odd number');
  const multiply = number * 2;
  // console.log(multiply);
  return multiply;
}
else if (number % 2 === 0){
  const divide = number / 2;
  // console.log(divide);
  return divide;
}
}
let num = 53;
const resultWithReturn = isOddEven(num);
console.log(resultWithReturn);
