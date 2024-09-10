// convert number and use toFixed ,toPrecision
let number = '29.25678';
let convert = Number(number,10);
// let convert = parseFloat(number,10);
console.log(convert.toFixed(2));
console.log(convert.toPrecision(3));
