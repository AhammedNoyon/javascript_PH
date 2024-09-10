/*
// print even numbers from 1 to 40. Use continue to skip odd numbers by for loop
for(let x = 1; x <= 40; x++){
  if( x % 2 === 1){
    continue;
  }
  console.log(x);
}

//skip the numbers divisible by 5.
for ( let number = 55; number <= 85; number++){
  if( number % 5 === 0 ){
    continue;
  }
  console.log(number);
}
console.log('skip the numbers divisible by 5.')


*/
let i = 10;
while( i <= 20){
  if( i % 2 === 0){
    i++;
    continue;
  }
  console.log(i);
  i++;
}
