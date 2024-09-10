/*
function differenceParameter (number){
  for (number = 1; number <= 100; number++){
    if(number % 2 === 1){
      console.log('odd number ', number);
    }
    else{
      console.log('even number', number);
    }
  }
}
differenceParameter();

// sum from 1 to 100
function judgementSum (){
  let sum = 0;
for (let i = 1; i <=100; i++){
sum = sum + i;
}
return sum;
}
const sumReturn = judgementSum();
console.log(sumReturn);

// sum of all even number from 1 to 20
function sum (){
let addition = 0;
for(let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    // console.log(i);
    addition = addition + i;
  }
}
return addition;
}
const returnAddition = sum();
console.log(returnAddition);
*/





// call passed String Boolean Array Object
function callDifferenceData (x){
  // console.log(x);
  let len = x.length;
  // console.log(len);
  let sum = 0;
  let mul = 1;
  for (let x = len; x <= 50; x++){
    // console.log(x);
    if(x % 5 === 0){
      // console.log(x);
      sum = sum + x;
    }
    else if (x % 5 === 1){
      // console.log(x);
      mul = mul * x;
    }
  }
// console.log(sum);
// console.log(mul);
let divide = mul / sum;
let inti = parseInt(divide);
// console.log(inti);
return inti;
}
let str = 'bangladesh';
const differenceData = callDifferenceData(str);
console.log(differenceData);
const returnValueDivide = differenceData / 2;
console.log(returnValueDivide);
