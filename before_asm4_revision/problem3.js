function PrintEmailAddress (obj){
  if(typeof obj !== 'object'){
    return 'Only object type data are allowed . so please enter a valid object...!';
  }
  const message = obj.name + '@' + obj.address + '.com';
  return message;
}
// const person = {
//   name : 'mehedy',
//   address : 'rajshahi',
// }
const person = 'name : mehedy, address : rajshahi';
const returnMessage = PrintEmailAddress (person);
console.log(returnMessage);
