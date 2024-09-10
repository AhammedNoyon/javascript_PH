
let sum = 0;
function isSum (arrays){
    for (let array of arrays){
      if ( array % 2 !== 0){
        sum =  sum + array;
      }
    }
    return sum;
}

let sub = 0;
function isSub (arrays){
  for ( let array of arrays){
    if(array % 2 !== 1 ){
      sub = array - sub;
    }
  }
  return sub;
}

let multiply = 1;
function isMultiply (arrays){
  for ( let array of arrays){
    multiply = multiply * array;
  }
  return multiply;
}

function insideFunction (arrays, operation){
  if(operation === 'isSum'){
    const result = isSum (arrays);
    return result;
  }
  else if ( operation === 'isSub'){
    const result = isSub (arrays);
    return result;
  }
  else if (operation === 'isMultiply'){
    const result = isMultiply (arrays);
    return result;
  }
  else{
    const result = 'Only sum,sub and multiply operation are allowed.so please do it.';
    return result;
  }
}
const arrays = [12, 133, 18, 55];
const returnResult = insideFunction(arrays, 'divide');
console.log(returnResult);

/*
let sum = 0;
function isAdd (num1, num2){
  sum = num1 + num2;
  return sum;
}

let sub = 0;
function isSub (num1, num2){
  sub = num1 - num2;
  return sub;
}
let multiply = 1;
function isMultiply (num1, num2){
  multiply = num1 * num2;
  return multiply;
}


function isDivide (num1, num2){
  const divide = num1 / num2;
  return divide;
}


function insideFunction (a, b, operation){
  if ( operation === 'isAdd'){
    const result = isAdd (a, b);
    return result;
  }
  else if (operation === 'isSub'){
    const result = isSub ( a, b);
    return result;
  }
  else if ( operation === 'isMultiply'){
    const result = isMultiply ( a, b);
    return result;
  }
  else if ( operation === 'isDivide'){
    const result = isDivide ( a, b);
    return result;
  }
  else{
    const alertMessage = 'Only sum, sub , multiply and divide are allowed . please find it.';
  }
}
const returnResult = insideFunction (10, 5, 'isMultiply');
console.log(returnResult);
*/
