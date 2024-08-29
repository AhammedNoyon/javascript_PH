// task 1
var totalMoney = 1000;
var appleOneKg = 400;
var orangesOneKg = 300;
var totalCost = 700;
var remainingMoney = totalMoney - totalCost;
// system 1
// console.log("Shopkeeper will return = " + remainingMoney + " taka");

// system 2
// console.log("Total money = " + totalMoney + "</br>" + "Total cost = " + totalCost + "</br>" + "Shopkeeper will return = " + remainingMoney);

// system 3
console.log("Total money = " + totalMoney  + " taka");
console.log("Total cost = " + totalCost  + " taka");
console.log("Shopkeeper will return = " + remainingMoney  + " taka");


// task 2
var bangla,english,math,biology,chemistry,sum,average;

bangla = 75.25;
english = 65;
math = 80;
biology = 35.45;
chemistry = 99.50;
sum = bangla + english + math + biology + chemistry;
average = sum / 5;
console.log("Total mark Average = " + average.toFixed(2));

// task 3
var firstNumber,secondNumber,remainder;
firstNumber = 119;
secondNumber = "5";
secondNumber = parseInt(secondNumber);
remainder = firstNumber % secondNumber;
console.log(" remainder = " + remainder);

// task 4
var a = isNaN("11");
console.log(a);

var b = isNaN(2-10);
console.log(b);

// that means,If that is convert to a number so output will return false or is not convert a number so output will return true

