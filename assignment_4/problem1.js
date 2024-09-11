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




// const passedIncome = '3000';
// const passedExpense = [2];


// const passedIncome = -5000;
// const passedExpense = 2000;

// const passedIncome = 6000;
// const passedExpense =  -1500;


// const passedIncome = 6000;
// const passedExpense =  15000;


// const passedIncome = 10000;
// const passedExpense = 3000;


// const passedIncome = 34000;
// const passedExpense = 1753;

// const passedIncome = 5000;
// const passedExpense = 1500;

// const passedIncome = 7000;
// const passedExpense = 7000;

const returnTax = calculateTax(passedIncome,passedExpense)
console.log(returnTax);
