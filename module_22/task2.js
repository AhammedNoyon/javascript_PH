function checkRepeatedValues (arrays){
// console.log(arrays);
let similar = 25;
let count = 0;
for ( let array of arrays){
  if(array === similar){
    count++;
  }
}
return count;
}
let arrays = [ 5, 6, 11, 12, 98, 5];
const result = checkRepeatedValues(arrays);
console.log(result);

