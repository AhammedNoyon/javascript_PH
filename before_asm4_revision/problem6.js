function rickshawCost (totalMember){
  // console.log(totalMember);
  if(typeof totalMember !== 'number'){
    return 'Please enter a valid number...!';
  }

  const busSet = 50;
  const microSet = 15;
  const perMemberRickshawCost = 20;

  const remainingWillGoByBus = totalMember % busSet;
  const remainingWilGoByMicro = remainingWillGoByBus % microSet;
  const totalRickshawCost = remainingWilGoByMicro * perMemberRickshawCost;
  return totalRickshawCost;
}
const totalMember = 234;
const returnRickshawCost = rickshawCost(totalMember);
console.log(returnRickshawCost);
