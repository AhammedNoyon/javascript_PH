
function findAveragePhonePrice (phones){
  let sum = 0;
  console.log(phones.length);
  // console.log(phones);
  for (let phone of phones){
    // console.log(phone);
    sum = sum + phone.price;
  }
// console.log(sum);
const averagePrice = sum / phones.length;
const averagePriceRounded = Math.round(averagePrice);
return averagePriceRounded;
}
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Opp", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price : 29000 },
    ];
const averageReturn = findAveragePhonePrice(phones);
console.log('The average price of phone = ', averageReturn);
