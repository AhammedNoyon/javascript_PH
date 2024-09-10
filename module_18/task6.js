let age = 'student';
age = toString(age)
let ticket = 800;
let isStudent = 'student';
let isSeniorCitizen = 'senior_citizens';
if( age < 10){
  console.log('free');
}
else if( age === isStudent){
  // discount 50%
  let discount = ticket * 50 / 100;
  let ticketPrice = ticket - discount;
  console.log('ticketPrice');
}
else if ( age === isSeniorCitizen){
  // discount 15 %
  let discount = ticket * 15 / 100;
  let ticketPrice = ticket - discount;
console.log(ticketPrice);
}
else{
  console.log('Regular ticket fare 800 tk');
}
