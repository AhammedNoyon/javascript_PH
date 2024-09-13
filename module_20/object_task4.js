
let student = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Gaibandha',
  isStudent: true,
  isFFamily : false
};


let count = 0;
for (const prop in student){
  // console.log(prop);
    count++;
}
console.log(count);





/*
//right solution
const x = Object.keys(student);
// console.log(x);
let count = 0;
for (const prop of x){
  // console.log(prop);
  if(x.includes(prop)){
    count++;
  }
}
*/

//right solution

// for (let i =0; i < x.length; i++){
//   // console.log(x[i])
//   if(x.includes(x[i])){
//     count++;
//   }
// }
console.log(count);
