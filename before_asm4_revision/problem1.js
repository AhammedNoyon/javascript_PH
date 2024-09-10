function pickBiggestNumber (array){
  if (Array.isArray(array) === false){
    return 'Please enter a valid array...!';
  }
  // console.log(array);
  let storeValue = array[0];
  for (let arr of array){
    // console.log(arr);
    if (arr > storeValue){
      storeValue = arr;
    }
  }
  return storeValue;
}
// const numbers = [22, 44, 11, 3, 45, 123, 33, 25];
// const numbers = [22, 644, 211, 33, 45, 123, 233, 225];
// const numbers = [22, 644, 211, 33, 945, 123, 233, 225];
const numbers = (12, 34, 55, 1)
const returnResult = pickBiggestNumber(numbers);
console.log(returnResult);
