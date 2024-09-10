let phone = {
  brand : 'Vivo',
  color : 'blue',
  price : 18500,
  weight : '78g',
  differenceModel : {
    brand : 'nokia',
    color : 'black',
    price : 20000,
  },
  Model : ['IPHONE', 'THC', 'LAVA', 'OPP'],
}
const allKeys = Object.keys(phone.differenceModel);
// console.log(allKeys);
const allValue = Object.values(phone.differenceModel.color);
// console.log(allValue);
phone.color = 'purple';
console.log(phone.color);
