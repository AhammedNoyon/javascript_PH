function defaultPara(name1, name2 = "maya") {
  return name1 + name2;
}
console.log(defaultPara("I Miss you "));

function defaultPara2(price, tax = 0.5, discount = 20) {
  return price + price * tax - discount;
}
console.log(defaultPara2(300));
console.log(defaultPara2(300, 5));
console.log(defaultPara2(300, 2, 5));
