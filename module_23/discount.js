/*
function discountPrice (productPice){
  let firstConditionPrice = 100;
  let secondConditionPrice = 90;
  let thirdConditionPrice = 70;
  if (productPice <= 100){
    const noDiscount = productPice * firstConditionPrice;
    return noDiscount;
  }
  else if (productPice > 100 && productPice <= 200){
    const isDiscountPrice = productPice * secondConditionPrice;
    return isDiscountPrice;
  }
  else{
    const isDiscountPrice = productPice * thirdConditionPrice;
    return isDiscountPrice;
  }
}
const result = discountPrice(250);
console.log(result);
*/

function multiLayerDiscount (productPice){
    // console.log(productPice);
    let first100Price = 100;
    let between200Price = 90;
    let over200Price =  70;
    if(productPice <= 100){
      const pay = productPice * first100Price;
      return pay;
    }
    else if ( productPice > 100 && productPice <= 200){
      const first100Pay = 100 * first100Price;
      // const remaining = 200 - productPice;
      const remaining = productPice - 100;
      const remainingPay = remaining * between200Price;
      const totalPay = first100Pay + remainingPay;
      return totalPay;
    }
    else{
      const first100Pay = 100 * first100Price;
      /*
      const remaining = 200 - productPice;
      const remainingPay = remaining * between200Price;
      */
      const second100Pay = 100 * between200Price;

      const remainingOver200 = productPice - 200;
      const over200Pay = remainingOver200 * 70;
      const totalPay = first100Pay + second100Pay + over200Pay;
      return totalPay;
    }
}
let productPice = 50;
const totalLayerDiscount = multiLayerDiscount(productPice);
console.log('total pay with discount = ', totalLayerDiscount);
