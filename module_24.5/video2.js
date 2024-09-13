const products = [
  {name : 'nokia phone', color : 'black', price : 20000},
  {name : 'laptop', color : 'black', price : 20000},
  {name : 'computer', color : 'black', price : 20000},
  {name : 'lave phone', color : 'black', price : 20000},
  {name : 'nokia LapTop', color : 'black', price : 20000},
  {name : 'opp Phone', color : 'black', price : 20000},
]

function matched (arr,search){
  const matchedProducts = [];
  let sum = 0;
  for(let i of arr){
    if(i.name.toLowerCase().includes(search.toLowerCase())){
      // console.log(i);
      matchedProducts.push(i);
      // sum += i.price;
    }
  }
  // console.log(arr);
  return matchedProducts;
  // return sum;

}
const result = matched(products, 'phone');
console.log(result);
