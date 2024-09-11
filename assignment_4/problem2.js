function sendNotification(email) {
  if(typeof email !== 'string' || email.includes('@') !== true){ // problem ase
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
const passedEmail = '@zihadgmail.com';                //problem ase
// const passedEmail = 'zihad.ph@gmail.com';
// const passedEmail = 'farhan34@yahoo.com';
// const passedEmail = 'nadim.naem5@outlook.com';
// const passedEmail = 'fahim234.hotmail.com';
// const passedEmail = 'sadia8icloud.com';
// const passedEmail = ['roman@gmail.com'];

const returnMessage = sendNotification(passedEmail);
console.log(returnMessage);
