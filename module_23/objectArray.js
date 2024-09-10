/*
function lowestValueObjectInArray (arrInObs){
  // console.log(arrInObs);
  let storePrice = arrInObs[0];
  for (let arrInOb of arrInObs){
    // console.log(arrInOb);
    if(arrInOb.price > storePrice.price){
      storePrice = arrInOb;
    }
    // for (let object in arrInOb){
    //   console.log(object);
    // }
  }
  return storePrice;
}
const arrInObs = [
  {name : 'Poco', price : 25000, color : 'red', camera : '12px'},
  {name : 'samsung', price : 35000, color : 'red', camera : '12px'},
  {name : 'nokia', price : 20000, color : 'red', camera : '12px'},
  {name : 'iphone', price : 120000, color : 'red', camera : '12px'},
  {name : 'walton', price : 5000, color : 'red', camera : '12px'},
  {name : 'vivo', price : 16000, color : 'red', camera : '12px'},
  {name : 'lava', price : 18000, color : 'red', camera : '12px'}
];
const returnValue = lowestValueObjectInArray(arrInObs);
console.log(returnValue);
*/

function showsFunction (shows){
    // console.log(shows);
    let lowShow = shows[0];
    for (let show of shows){
      // console.log(show);
      if(show.price < lowShow.price){
        lowShow = show;
      }
    }
    return lowShow;
}
const shows = [
  {name : 'whiteShow', size : 42, price : 2400},
  {name : 'redShow', size : 42, price : 1600},
  {name : 'blackShow', size : 42, price : 1500},
  {name : 'yellowShow', size : 42, price : 1200},
  {name : 'purpleShow', size : 42, price : 1800},
  {name : 'normalShow', size : 42, price : 1000},
  {name : 'greenShow', size : 42, price : 1900}
];
const showsPrice = showsFunction (shows);
console.log('this is low price show in the array ', showsPrice);
