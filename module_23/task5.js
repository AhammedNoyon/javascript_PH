function monthlyPayOfSalary (employees){
  // console.log(employees);
  let sum = 0;
  for (let employee of employees){
    // console.log(employee);
    const totalIncrement = employee.increment * employee.experience;
    const perYearSalary = employee.starting + totalIncrement;
    sum = sum + perYearSalary;
  }
  // console.log(sum);
  const perMonthSalary = sum / 12;
  console.log(perMonthSalary);
  }

const employees = [
        { name: "shahin", experience: 5, starting: 20000, increment : 5000 },
        { name: "shihab", experience: 3, starting: 15000, increment : 7000 },
        { name: "shikot", experience: 9, starting: 30000, increment : 1000 },
        { name: "shohel", experience: 0, starting: 29000, increment : 4000 },
        ];
const returnMonthlyPay = monthlyPayOfSalary(employees);
