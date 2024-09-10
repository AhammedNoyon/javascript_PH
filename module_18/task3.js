let number = 71;
if( number < 0 || number > 100){
console.log('Invalid Number.');
}
else if( number >= 90 && number <= 100){
console.log('A+');
}
else if( number >= 80 && number <= 89){
console.log('A-');
}
else if( number >= 70 && number <= 79){
console.log('A');
}
else if( number >= 60 && number <= 69){
console.log('A-');
}
else if( number >= 33 && number <= 59){
console.log('B');
}
else{
  console.log('Fail');
}
