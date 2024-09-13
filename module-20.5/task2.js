const numbers = [12, 98, 5, 41, 23, 78, 46];
let arr = [];
for (const i of numbers){
  if(i % 2 !== 1){
    arr.push(i);
  }
}
console.log(arr);
