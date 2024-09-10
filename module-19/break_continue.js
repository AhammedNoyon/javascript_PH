/*
for (let i = 1; i <= 100; i++){
  console.log(i);
if(i === 50){
  break;
}
}

for(let number = 1; number <= 10; number++){
  if(number === 5){
    continue;
  }
  console.log(number);
}
  */


let x = 30;
while(x <= 50){
  if(x == 40){
    x++;
    continue;
  }
  console.log(x);
  x++;
}
