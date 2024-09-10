function calculateElectronicsBudget (laptopPice, tabletPice, mobilePice){
  // console.log(laptopPice,tabletPice,mobilePice);
  const initialLaptopPrice = 35000;
  const initialTabletPrice = 15000;
  const initialMobilePrice = 20000;

  const totalLaptopPrice = initialLaptopPrice * laptopPice;
  const totalTabletPrice = initialTabletPrice * tabletPice;
  const totalMobilePrice = initialMobilePrice * mobilePice;

  const totalProductsCost = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
  // console.log(totalProductsCost);
  return totalProductsCost;

}
let laptopPice, tabletPice, mobilePice;
laptopPice = 5;
tabletPice = 3;
mobilePice = 6;
const totalReturn = calculateElectronicsBudget(laptopPice, tabletPice, mobilePice);
console.log('aver all product purchase cost = ', totalReturn, 'taka');
