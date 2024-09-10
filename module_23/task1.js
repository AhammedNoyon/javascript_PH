/*
const arrays = [167, 190, 120, 165, 137];
let storeValue = arrays[0];
for ( let array of arrays){
  // console.log(array);
  if ( array < storeValue){
    storeValue = array;
  }
}
console.log('this is the lowest number in arrays', storeValue);
*/

function checkLowestValue (arrays){
  // console.log(arrays);
  let storeValue = arrays[0];
  for ( let array of arrays){
    // console.log(array);
    if ( array < storeValue){
      storeValue = array;
    }
  }
  return storeValue;
}
const arrays = [167, 190, 120, 165, 137];
const returnValue = checkLowestValue(arrays);
console.log(returnValue);
