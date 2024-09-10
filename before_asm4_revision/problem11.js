function monthlySaving (arr,livingCost){
  if (!Array.isArray(arr) && typeof livingCost !== 'number'){
    return 'invalid input';
  }
  let totalPayment = 0;
  for (let i of arr){
    if(i >= 3000){
      const taxCharge = i * 20 / 100;
      i = i - taxCharge;//problem
    }
    totalPayment = totalPayment + i;
  }
  const saving = totalPayment - livingCost;
  if(saving < 0){
    return 'earn more';
  }
  return saving;
}






// const paymentList = [9000, 2700, 3400];
// const passedLivingCost = 100000;

const paymentList = [1000, 2000, 2500];
const passedLivingCost = 5000;

// const paymentList = [1000, 2000, 3000];
// const passedLivingCost = 5400;

const returnSaving = monthlySaving(paymentList,passedLivingCost);
// const returnSaving = monthlySaving(passedLivingCost,paymentList);
console.log(returnSaving);
