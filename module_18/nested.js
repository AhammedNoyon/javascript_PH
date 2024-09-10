/*
let purchase = 10;

// problem
if(purchase >= 50 && purchase <= 100){
  // discount 2%
  let discount = purchase * 2 / 100;
  discount = purchase - discount;
  console.log('you will pay = ' + discount);
}
else{
  // vat 5 %
  let vat = purchase * 5 / 100;
  vat = purchase + vat;
  console.log('you will pay vat = ' + vat);
}
*/



let purchase = 110;
/*
if(purchase === 100){
  // discount 2 %
  let discount = purchase * 2 / 100;
  discount = purchase - discount;
  console.log('you will pay = ' + discount)
}
else{
  if(purchase > 100 && purchase <= 199){
    // discount 5%
    let discount = purchase * 5 / 100;
    discount = purchase - discount;
    console.log('you will pay = ' + discount);
  }
  else{
    //otherwise vat 5%
  let vat = purchase * 5 / 100;
  vat = purchase + vat;
  console.log('you will pay = ' + vat);
  }
}
*/
purchase === 100 ? console.log(purchase - (purchase * 2 / 100)): purchase > 100 && purchase <= 199 ? console.log(purchase -(purchase * 5 / 100)): console.log(purchase + (purchase * 5 / 100));



//condition ? first statement : second condition;

