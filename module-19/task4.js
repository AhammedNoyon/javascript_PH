/*
//a loop 1 to 200. Use break to exit the loop once you find 100 by for loop
for ( let i = 1; i <= 200; i++){
  if( i ===100){
    break;
  }
  console.log(i);
}
//a loop 1 to 200. Use break to exit the loop once you find 100 by while loop
let i = 1;
while( i <= 200){
  if( i === 100){
    break;
  }
  console.log(i);
  i++;
}

//stops (using break) as soon as the sum reaches or exceeds 100
let sum = 0;
let i = 1;
while(i <= 200){
  sum = sum + i;
  if( sum > 100){
    break;
  }
  i++;
}
console.log(sum)

// square
for (let x = 5; x <= 100; x++){
  let root = parseInt(Math.sqrt(x));
  if(root * root === x){
    console.log(x);
    break;
  }
}


*/




