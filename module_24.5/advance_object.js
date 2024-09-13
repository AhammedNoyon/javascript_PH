const model = {
  name : 'roma',
  age : 24,
  girl : true,
  friends : ['x', 'y', 'z'],
  car : {
    brand : 'BMW',
    price : 10000000,
    color : 'blue',
    others : {
      speed : '350 cc',
      numberPlate : true
    }
  },
  uses : [{phone : 'iphone', price : 120000, color : 'pink'}, {watch : 'rolex', price : 150000, color : 'black'}]
}
const get = model.car.others.speed = '500 cc';
// console.log(model);
const get2 = model.uses[1];
console.log(get2)

