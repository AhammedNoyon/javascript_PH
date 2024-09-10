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
const monthlyRevenue = 15000;
const returnRevenue = saving(monthlyRevenue);
console.log(returnRevenue);
