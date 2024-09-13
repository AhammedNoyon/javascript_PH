let phone = {
  brand : 'Vivo',
  color : 'blue',
  price : 18500,
  weight : '78g',
  differenceModel : {
    brand : 'nokia',
    price : 20000,
    backgroundColor : {
      bgColor : 'green',
    }
  },
  Model : ['IPHONE', 'THC', 'LAVA', 'OPP']
}
phone.differenceModel.backgroundColor.bgColor = 'red';
// console.log(phone.differenceModel.backgroundColor.bgColor);


const keys = Object.keys(phone);
// console.log(keys);

const values = Object.values(phone);
// console.log(values);


phone.differenceModel.backgroundColor.bgColor = 'purple';
// console.log(phone.differenceModel.backgroundColor.bgColor)

phone.Model[1] = 'IPHONE 40 PRO MAX';
// console.log(phone.Model[1]);

const deleted = delete phone.price;
console.log(phone);
