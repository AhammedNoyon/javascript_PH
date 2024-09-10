function multipleParameterCall (number1, number2, number3, number4){
console.log( 'all parameter' , number1, number2, number3, number4);
const sum = number1 + number2;
const sub = number3 - number4;
const multiply = sum * sub;
const divide = multiply / 2;
console.log( 'sum = ',sum, 'sub = ', sub, 'multiply = ', multiply, 'divide = ',divide);
return divide;
}

const result = multipleParameterCall(10, 2, 12, 4);
console.log('return = ', result);
