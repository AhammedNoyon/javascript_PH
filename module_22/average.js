/*
function average (arrays){
// console.log(arrays);
const newArrays = [];
for (let array of arrays){
  // console.log(array);
  if (array % 2 !== 0){
    // console.log(array);
    newArrays.push(array);
    // console.log(newArrays);
  }
}
let sum = 0;
for (let newArray of newArrays){
  // console.log(newArray);
  sum = sum + newArray;
}
const finalAverage = sum / newArrays.length;
const averageResult = Math.round(finalAverage);
return averageResult;
// console.log(sum);
}
const isArray = [10,15,20,25,7,27,30];
const isAverage = average (isArray);
console.log(isAverage);
*/

function checkAverage (arrays){
  // console.log(arrays);
  let sum = 0;
  for (let array of arrays){
    // console.log(array);
    if(array % 2 === 0 ){
      // console.log(array);
      sum = sum + array;
    }
  }
// console.log(sum);
const averageFormula = sum / 6;
// console.log(averageFormula);
const floorResult = Math.floor(averageFormula);
console.log(floorResult);
}
const arrays = [10,27,100,55,20,30,44,3,8];
const averageResult = checkAverage(arrays);
