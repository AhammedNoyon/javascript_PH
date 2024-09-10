function bigNumber (num1,num2,num3){
  // console.log(num1,num2,num3);
  if (num1 > num2 && num1 > num3){
    return num1;
  }
  else if (num2 > num1 && num2 > num3){
    return num2;
  }
  else{
    return num3;
  }
}
const result = bigNumber(10,20,9);
console.log('is the big number is ', result);

// use Math.max
const big = Math.max(12, 9, 291, 5, 92, 1);
console.log(big);
