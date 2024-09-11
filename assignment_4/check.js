// problem 1
function calculateTax(income, expenses) {
  if(typeof income !== 'number' || typeof expenses !== 'number'){
    return "Invalid Input";
  }
  if(income < 0 || expenses < 0){
    return "Invalid Input";
  }
  if (income < expenses){
    return "Invalid Input";
  }
  const grossIncome = income - expenses;
  const tax = grossIncome * .20;
  return tax;
}

// const x = 10000;
// const y = 3000;

// const x = 34000;
// const y = 1753;

// const x = 5000;
// const y = 1500;

// const x = 7000;
// const y = 7000;

// const x = -5000;
// const y =  2000;

// const x = 6000;
// const y = -1500;

// const x = 1000;
// const y = 1500;

// const x = 1;
// const y = 0;

// const returnTax = calculateTax(x,y);
// console.log(returnTax);





// problem 2
function sendNotification(email) {
  if(typeof email !== 'string' || email.includes('@') !== true){
    return "Invalid Email";
  }
  const x = email.split('@');
  if(x.length !==2){
    return "Invalid Email";
  }
  const notification = x[0] + ' sent you an email from ' + x[1];
  return notification;
}

// const passedEmail = 'zihad@gmail.com';

// const passedEmail = 'farhan34@yahoo.com';

// const passedEmail = 'nadim.naem5@outlook.com';

// const passedEmail = 'fahim234.hotmail.com';

// const passedEmail = 'sadia8icloud.com';

// const passedEmail = ['zihad@gmail.com'];
// const returnResult = sendNotification(passedEmail);
// console.log(returnResult);











// Problem 3
  function checkDigitsInName(name) {
    if(typeof name !== 'string'){
      return "Invalid Input";
    }
    for (let i of name){
      if(i >= 0 && i <= 9){
        return true;
      }
    }
    return false;
  }

  // // const x = 'Raj123';

  // // const x = 'n9ayeem';

  // // const x = 'e1mu3';

  // // const x = 'Suman';

  // // const x = 'Name2024';

  // // const x = '!@#';

  // const x = ["Raj"];

  // const returnResult =  checkDigitsInName(x);
  // console.log(returnResult);




// problem4
function calculateFinalScore(obj) {
  if(typeof obj !== 'object'){
    return "Invalid Input";
  }
  if(obj.testScore > 50 || obj.schoolGrade > 30){
    return "Invalid Input";
  }

  const extraMarkFarmerFamily = 20;
  let finalScore = obj.testScore + obj.schoolGrade;
  if(obj.isFFamily === true){
    finalScore = finalScore + extraMarkFarmerFamily;
  }
  if(finalScore >= 80){
    return true;
  }
  else{
    return false;
  }
}

// const x = { name: "x", testScore: 45,  schoolGrade: 25, isFFamily : true  }

// const x = { name: "x", testScore: 45,  schoolGrade: 25, isFFamily : false }

// const x = "hello";

// const x = { name: "x", testScore: 15,  schoolGrade: 25, isFFamily : true  }

// const returnResult = calculateFinalScore(x);
// console.log(returnResult);








// problem5
function waitingTime(waitingTimes, serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
    return  "Invalid Input";
  }
  let totalTime = 0;
  for(let i of waitingTimes){
    totalTime = totalTime + i;
  }
  const averageTime = Math.round(totalTime / waitingTimes.length);
  const serialLeftBefore = serialNumber - 1;
  const candidateIsLeft = serialLeftBefore - waitingTimes.length;
  const WillTakeTime = averageTime * candidateIsLeft;
  return WillTakeTime;
}

// const x = [ 3, 5, 7, 11, 6 ];
// const y = 10;

// const x = [13, 2];
// const y = 6;

// const x = [13, 2, 6, 7, 10];
// const y = 6;

// const x = [6];
// const y =  4;

// const x = 7;
// const y = 10;

// const x = "[6,2]";
// const y =  9;

// const x = [7, 8, 3, 4, 5];
// const y =  "9";
// const returnResult = waitingTime(x,y);
// console.log(returnResult);
