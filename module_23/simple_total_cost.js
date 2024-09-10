function simpleTotalCost (){
  let onePiceShirt = 500;
  let onePicePant = 700;
  let onePiceShow = 900;
  /*
  const fivePiceShirt = onePicePant * 5;
  const fivePicePant = onePicePant * 5;
  const fivePiceShow = onePicePant * 5;
  const totalCost = fivePiceShirt + fivePicePant + fivePiceShow;
  */
  const totalCost = (onePiceShirt * 5) + (onePicePant * 5) + (onePiceShow * 5);
  return totalCost;
}
const totalCostResult = simpleTotalCost();
console.log(' total product purchase cost is ' ,totalCostResult);
