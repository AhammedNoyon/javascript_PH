// all kaj finish than return

function allSystemReturn (number1,number2){
// console.log(number1,number2);
const sum = number1 + number2;
const sub = number1 - number2;
const multiply = sum * sub;
const divide = multiply / 4;
return divide;
}
const functionResult = allSystemReturn(20,10);
// console.log(' function result is ' , functionResult);


// all work with return
function returnWithWork (num1,num2){
return num1 * num2;
}
const returnSys2 = returnWithWork(5,6);
// console.log('returnValue is ', returnSys2);


// return with condition
function returnWithCondition (call1,call2){
if(call1 % 2 === 0){
  return true;
}
else if(call1 === call2){
  return false;
}
}
const returnSys3 = returnWithCondition(100,50);
// console.log(returnSys3);


// return short hand return sys conditional statement

function returnConditionalSys2 (oneCall){
if(oneCall % 5 != 1 && oneCall === 10){
  return true;
}
return false;
}
const shortReturnCondition = returnConditionalSys2(101);
console.log(shortReturnCondition);
