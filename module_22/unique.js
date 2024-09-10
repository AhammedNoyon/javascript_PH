
function uniqueArray (arrays){
  // console.log(arrays);
  const newArray = [];
  for (let array of arrays){
    // console.log(array);
    if(newArray.includes(array) === false){
      newArray.push(array);
      // console.log(newArray);
    }
  }
  let sum = 0;
  for (let takenOut of newArray){
    // console.log(takenOut);
    sum = sum + takenOut;
  }
  // console.log(sum);
  const averageFormula = sum / newArray.length;
  // console.log(averageFormula)
  const averageFloor = Math.floor(averageFormula);
  // console.log(averageFloor);
  return averageFloor;
}
const arrays = [10, 30, 20, 10, 5, 7, 30, 20];
const uniqueArrayResult = uniqueArray(arrays);
console.log(' Final average result is  ' + uniqueArrayResult);



/*
function uniqueArray (strArrays){
// console.log(strArrays);
const newArray = [];
for (let strArray of strArrays){
  // console.log(strArray);
  if(newArray.includes(strArray) === false){
    newArray.push(strArray);
  }
  // console.log(newArray);
}
return newArray;
}
const strArrays = ['apple', 'banana', 'mango', 'banana', 'jackal', 'mango', 'orange'];
const checkUniqueArray = uniqueArray(strArrays);
console.log('this is no duplicate array = ', checkUniqueArray);
*/
