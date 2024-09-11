// problem 1

function calculateTax(income, expenses) {
  if(typeof income !== 'number' || typeof expenses !== 'number'){
    return "Invalid Input";
  }
  if(income <= 0 || expenses <= 0){
    return "Invalid Input";
  }
  if (income < expenses){
    return "Invalid Input";
  }
  const grossIncome = income - expenses;
  const tax = grossIncome * .20;
  return tax;
}



// problem 2
function sendNotification(email) {
  if(typeof email !== 'string' || email.includes('@') !== true){
    return "Invalid Email";
  }
  const x = email.split('@');
  const notification = x[0] + ' sent you an email from ' + x[1];
  return notification;
}

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

// problem 4

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


// problem 5

function  waitingTime(waitingTimes, serialNumber) {
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
