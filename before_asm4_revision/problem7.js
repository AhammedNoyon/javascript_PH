function jobInfo (person){
  if (typeof person !== 'object'){
    return 'please enter a valid object...!';
  }
    const extraMarkForFreedom = 15;
    let totalMark = person.hsc + person.honours;
    if (person.freedomFighter === true){
      totalMark = totalMark + extraMarkForFreedom;
    }
    if(totalMark >= 80){
      return 'you will get the job';
    }
    else if (totalMark < 80){
      return 'you will failed..! try next time';
    }
}



const person1 = {
  name : 'x',
  age : 24,
  hsc : 40,
  honours : 25,
  freedomFighter : true
}
const person2 = {
  name : 'y',
  age : 24,
  hsc : 18,
  honours : 60,
  freedomFighter : false
}
// const person = 29;

const returnResult = jobInfo(person2);
console.log(returnResult);
