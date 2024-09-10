function booleanCounting (array){
  if (!Array.isArray(array)){
    return 'Please enter a valid array...!';
  }
  let count = 0;
  for (let arr of array){
    if ( typeof arr === 'boolean'){
      count++;
    }
  }
return count;
}


const differenceValue = [1, 'bangladesh', false, true, [1, 2, 3, true], 'true'];
// const differenceValue = (true, false);
const countingResult = booleanCounting (differenceValue);
console.log(countingResult);
