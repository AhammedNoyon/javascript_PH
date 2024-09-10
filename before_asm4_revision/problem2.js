function returnMessageWithObject (obj){
  if (typeof obj !== 'object'){
    return ' Please enter a valid object';
  }
  // console.log(obj);
  const message = 'amar name ' + obj.name + ' amar basha ' + obj.address;
  // console.log(message);
  return message;

}
// const person = {
//   name : 'roman',
//   address : 'dhaka',
// }

const person = 19;
const returnMessage = returnMessageWithObject(person);
console.log(returnMessage);
