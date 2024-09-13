function arg (num1,num2){
  // console.log(num1,num2);
  arguments[0] = 5;
  // console.log(arguments);
  let addition = 0;
  for(const argument of arguments){
    // console.log(argument);
    if(argument % 2 === 0){
      addition += argument;
    }
  }
  return addition;
}
console.log(arg(1, 3, 4, 5, 6, 7, 8));
