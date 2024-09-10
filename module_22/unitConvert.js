// kilo to meter
function kiloToMeter (kilo){
const meter = kilo * 1000;
return meter;
}
let kilo = 10;
let toMeter = kiloToMeter(kilo);
// console.log('10 kilometer equal meter is ' + toMeter);

// meter to centimeter
function meterToCen (mtr){
// console.log(mtr);
const cen = mtr * 100;
return cen;
}
let mtr = 20;
const toCen = meterToCen(mtr);
// console.log('10 meter equal to centimeter is ' + toCen + ' centimeter');

// centimeter to millimeter
function cenToMillimeter (){
  // console.log(toCen);
const millimeter = toCen * 10;
// console.log(millimeter);
return millimeter;
}
const toMillimeter = cenToMillimeter();
// console.log('centimeter to millimeter is ' + toMillimeter + ' millimeter');

// foot to inch
function footToInch (ft){
  // console.log(ft);
  const foot = ft / 12;
  // console.log(foot);
  const footInt = parseInt(foot);
  // console.log(footInt);
  const fitModo = ft % 12;
  // console.log(fitModo);
  const footConcatModo = footInt + ' ft ' + fitModo + ' inch';
  // const footConcatModo = footInt.concat(' fit ').concat(fitModo, ' inc ');
  return footConcatModo;

}
const toInch = footToInch(75);
console.log(toInch);
