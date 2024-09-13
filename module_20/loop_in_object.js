const persons = {
  name : 'roman',
  age : 24,
  height : '5 fit 4 inch',
  fatherName : 'x',
  motherName : 'roma'
}

for ( const person in persons ){
  // console.log(person);
  // console.log(persons[person]);
}

const keys = Object.keys(persons);
// console.log(keys);
for (const prop of keys){
  console.log(prop, ':' , persons[prop]);
  // console.log(persons[prop]);
}
