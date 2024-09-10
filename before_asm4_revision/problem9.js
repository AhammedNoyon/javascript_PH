function newArray (array){
  if(!Array.isArray(array)){
    return 'Invalid Array';
  }
  let storeNewArrayValue = [];
  for (let arr of array){
    if(typeof arr === 'number'){
      storeNewArrayValue.push(arr);
    }
  }
  return storeNewArrayValue;
}
const differenceData = [1, null, undefined, 18, -19, NaN, [1,2], {obb : 'lala'}];
// const differenceData = 'data';
const returnNewArray = newArray(differenceData);
console.log(returnNewArray);


// console.log(typeof NaN);
