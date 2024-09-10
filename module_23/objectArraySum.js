/*
function totalPrice (products){
    // console.log(products);
    let sum = 0;
    for (let product of products){
      // console.log(product);
      sum = sum + product.price;
    }
    // console.log(sum);
    return sum;
}
const products = [
    {name : 'mango', size : 'small', price : 100},
    {name : 'apple', size : 'small', price : 300},
    {name : 'banana', size : 'small', price : 40},
    {name : 'orange', size : 'small', price : 250},
    {name : 'jackal', size : 'small', price : 350},
    {name : 'stow', size : 'small', price : 700}
];
const totalCost = totalPrice(products);
console.log('total purchase cost = ', totalCost);
*/

function overAllCost (products){
    // console.log(products);
    let sum = 0;
    for (let product of products){
      // console.log(product);
      let perFlowerCost = product.price * product.pice;
      // console.log(perFlowerCost);
      sum = sum + perFlowerCost;
    }
    // console.log(sum);
    return sum;
}
const products = [
    {name : 'white rose', price : 10, pice : 5},
    {name : 'black rose', price : 15, pice : 4},
    {name : 'green rose', price : 20, pice : 10},
    {name : 'red rose', price : 25, pice : 6},
    {name : 'purple rose', price : 10, pice : 12}
];
const totalFlowerCost = overAllCost(products);
console.log('total flower cost = ', totalFlowerCost);
