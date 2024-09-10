/*
function checkName (name){
  if(typeof name !== 'string'){
    return 'invalid input';
  }

    let nameLowercase = name.toLowerCase();
  let lastLetter = nameLowercase.slice(-1);
  // return lastLetter
  let arrays = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
  for(let i = 0; i < arrays.length; i++){
    // console.log(arrays[i])
    if(arrays[i] === lastLetter){
      return 'God Name';
    }
    else if(arrays[i] !== lastLetter){
      return 'Bad Name';
    }
  }
}
// const text = 'roma';
// const text = 'Salman';
const text = 'RAFEE';
const returnValue = checkName(text);
console.log(returnValue);
*/

function checkName (name){
  if(typeof name !== 'string'){
    return 'invalid input';
  }
    let nameLowercase = name.toLowerCase();
  let lastLetter = nameLowercase.slice(-1);
  let arrays = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
  if(arrays.includes(lastLetter)){
    return 'Good Name';
  }
  return 'Bad Name';
}
// const text = 'roma';
const text = 'Salman';
// const text = 'RAFEE';
const returnValue = checkName(text);
console.log(returnValue);
