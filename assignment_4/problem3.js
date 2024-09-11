function checkDigitsInName(name) {
  if(typeof name !== 'string'){
    return "Invalid Input";
  }
  // console.log(name);
  for (let i of name){
    // console.log(i)
    if(i >= 0 && i <= 9){
      return true;
    }
  }
  return false;
}

// const passedName = 'Raj123';

// const passedName = 'n9ayeem';

// const passedName = 'e1mu3';

// const passedName = 'Suman';

// const passedName = 'Name2024';

// const passedName = '!@#';

const passedName = ["Raj"];

const returnResult = checkDigitsInName(passedName);
console.log(returnResult);


