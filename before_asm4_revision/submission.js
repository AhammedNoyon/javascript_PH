function pickBiggestNumber (array){
  if (Array.isArray(array) === false){
    return 'Please enter a valid array...!';
  }
  let storeValue = array[0];
  for (let arr of array){
    if (arr > storeValue){
      storeValue = arr;
    }
  }
  return storeValue;
}

function returnMessageWithObject (obj){
  if (typeof obj !== 'object'){
    return ' Please enter a valid object';
  }
  const message = 'amar name ' + obj.name + ' amar basha ' + obj.address;
  return message;
}

function PrintEmailAddress (obj){
  if(typeof obj !== 'object'){
    return 'Only object type data are allowed . so please enter a valid object...!';
  }
  const message = obj.name + '@' + obj.address + '.com';
  return message;
}


function saving (income){
  if(typeof income !== 'number'){
    return 'Please enter a valid number...!';
  }
  let homeExpense = 5000;
  let mealExpense = 3000;
  let handExpense = 2000;
  const totalExpense = homeExpense + mealExpense + handExpense;
  if(income < totalExpense){
    return 'Please grow your monthly income. because your income is low from your monthly expense...!';
  }
  const totalRevenue = income - totalExpense;
  return 'your monthly revenue = ' + totalRevenue;
}

function booleanCounting (array){
  if (!Array.isArray(array)){
    return 'Please enter a valid array...!';
  }
  let count = 0;
  for (let arr of array){
    if ( typeof arr === 'boolean'){
      count++;
    }
  }
return count;
}


function rickshawCost (totalMember){
  if(typeof totalMember !== 'number'){
    return 'Please enter a valid number...!';
  }

  const busSet = 50;
  const microSet = 15;
  const perMemberRickshawCost = 20;

  const remainingWillGoByBus = totalMember % busSet;
  const remainingWilGoByMicro = remainingWillGoByBus % microSet;
  const totalRickshawCost = remainingWilGoByMicro * perMemberRickshawCost;
  return 'Total rickshaw expense = ', totalRickshawCost;
}

function jobInfo (person){
  if (typeof person !== 'object'){
    return 'please enter a valid object...!';
  }
    const extraMarkForFreedom = 15;
    let totalMark = person.hsc + person.honours;
    if (person.freedomFighter === true){
      totalMark = totalMark + extraMarkForFreedom;
    }
    if(totalMark >= 80){
      return 'you will get the job';
    }
    else if (totalMark < 80){
      return 'you will failed..! try next time';
    }
}


function emailCreate (emailInfo){
  if (typeof emailInfo !== 'object'){
    return 'invalid';
  }

  if(emailInfo.birthYear.toString().length !== 4){
    return 'invalid';
  }
  if(emailInfo.name,emailInfo.birthYear,emailInfo.siteName === undefined){
    return 'invalid';
  }

  let siteFirstLetter = emailInfo.siteName[0].toUpperCase();
  let email = siteFirstLetter + emailInfo.siteName.slice(1) + '#' + emailInfo.name + '@' + emailInfo.birthYear;
  return email;
}


function newArray (array){
  if(!Array.isArray(array)){
    return 'Invalid Array';
  }
  let storeNewArrayValue = [];
  for (let arr of array){
    if(typeof arr === 'number'){
      storeNewArrayValue.push(arr);
    }
  }
  return storeNewArrayValue;
}

function calculateMoney (cellNumber){
  if(typeof cellNumber !== 'number' && cellNumber < 0){
    return 'invalid Number'
  }
  const perTicketPrice = 120;
  const janitorCharge = 500;
  const staffNumber = 8;
  const perStaffLunchBill = 50;

  const perDayTicketRevenue = perTicketPrice * cellNumber;

  const allStaffLunchBill = perStaffLunchBill * staffNumber;
  const perDayExpense = janitorCharge + allStaffLunchBill;

  const saving = perDayTicketRevenue - perDayExpense;
  return saving;
}


function monthlySaving (arr,livingCost){
  if (!Array.isArray(arr) && typeof livingCost !== 'number'){
    return 'invalid input';
  }
  let totalPayment = 0;
  for (let i of arr){
    if(i >= 3000){
      const taxCharge = i * 20 / 100;
      i = i - taxCharge;
    }
    totalPayment = totalPayment + i;
  }
  const saving = totalPayment - livingCost;
  if(saving < 0){
    return 'earn more';
  }
  return saving;
}


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
