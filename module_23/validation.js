// number data type validation

let sum = 0;
function validation (num1, num2){
  // console.log(num1, num2);
  if(typeof num1 !== 'number'){
    return 'Only Number data are allowed . so please enter a first number.'
  }
  else if ( typeof num2 !== 'number'){
    return 'Only Number data are allowed . so please enter a second number.'
  }
    sum = num1 + num2;
    return sum;
  // console.log(sum);
}
const returnResult = validation (10,15);
// console.log('Sum of number from 10 to 15 = ', returnResult);

// string data type validation
function checkStringValidation (firstName, secondName){
  if (typeof firstName !== 'string' || typeof secondName !== 'string'){
    return 'please should be a valid name with string type data';
  }
  const full = firstName + ' ' + secondName;
  return full;
}
const returnCheckResult = checkStringValidation ('Roman', 'ali');
// console.log(returnCheckResult);

let addition = 0;
//Array data type validation
function arrayDataValidation (arr){
  if (Array.isArray(arr) === false){
    return 'please enter a valid arrays . because only array related data type are allowed.'
  }
  for (let array of arr){
    addition = addition + array;
  }
  return addition;
}
// const result = arrayDataValidation([10, 29, 29, 11, 22]);
const result = arrayDataValidation(10, 29);
console.log(result);
