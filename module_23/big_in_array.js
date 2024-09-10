/*
function bigArray (numbers){
  // console.log(numbers);
  let store = numbers[0];
  for (let number of numbers){
    // console.log(number);
    if ( number > store){
      store = number;
    }
  }
  return store;
}
const numbers = [10, 29, 49, 22, 32, 5];
const returnResult = bigArray(numbers);
console.log('this is the number of big in array ', returnResult);
*/

function lowArray (numbers){
  // console.log(numbers);
  let store = numbers[0];
  for(let number of numbers){
    // console.log(number);
    if(number < store){
      store = number;
    }
  }
  return store;
}
const numbers = [29, 39, 22, 11, 50, 49, 55];
const returnResult = lowArray(numbers);
console.log(returnResult);
