function calculateMoney (cellNumber){
  if(typeof cellNumber !== 'number' || cellNumber < 0){
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
const perDayTicketCell = '93';
const returnSaving = calculateMoney(perDayTicketCell);
console.log(returnSaving);
