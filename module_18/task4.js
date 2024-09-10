let number = 3;
let myNumber = 3;
if( number > 80){
  console.log('then go for a lunch.');
}
else{
  if(number >= 60 && number < 80){
    console.log('good luck next time.');
  }
  else if( number >= 40 && number < 60){
    console.log('keep your friends message unseen.');
  }
  else if( number < 40){
    console.log('I will block my friends.');
    if( myNumber < 80){
      console.log('I will go to home and sleep and act sad.');
    }
  }
}

