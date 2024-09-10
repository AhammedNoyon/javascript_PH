function isLeapYear (year){
  // console.log(year);
  if(year % 100 !== 0 && year % 4 === 0){
    return true;
  }
  else if (year % 400 === 0){
    return true
  }
  else{
    return false;
  }
}
const checkLeapYear = isLeapYear(2004);
console.log(checkLeapYear);
