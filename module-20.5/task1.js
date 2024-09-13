//sys 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
/*
const rev = colors.reverse();
console.log(rev);
*/

//sys 2
/*
let newArr = [];
for (const color of colors){
  console.log(color);
  newArr.unshift(color);
}
console.log(newArr);
*/

//sys 3
/*
let newArr = [];
for (let i = 0; i < colors.length; i++){
  // console.log(i);
  newArr.unshift(colors[i]);
}
console.log(newArr);
*/

//sys 4
/*
let newArr = [];
let i = 0;
while(i < colors.length){
  // console.log(i);
  newArr.unshift(colors[i]);
  i++;
}
console.log(newArr);
*/

//sys 5
let newArr = [];
let i = colors.length - 1;
while(i > 0){
  newArr.push(colors[i]);
  i--;
}
console.log(newArr);
