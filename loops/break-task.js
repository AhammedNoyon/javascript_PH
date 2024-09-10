/*
// task 1
for(let i = 1; i <= 200; i++){
  console.log(i);
  if ( i === 100){
    break;
  }
}
*/

// task 2
// let x = 1;
// let sum =0;
// while(x <= 200){
//   sum = sum + x;
//   if(sum >= 100){
//     break;
//   }
//   x++;
// }
// console.log(sum);

let sum = 0;
let number = 1;

while (true) {
    sum += number;
    if (sum >= 100) {
        break;
    }
    number++;
}

console.log("Sum:", sum);
console.log("Last number added:", number);
