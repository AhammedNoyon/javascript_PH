let fruits = [ 'Apple', 'banana', 'jackfruit', 'mango','orange'];
let number = [ 1, 2, 3, 4, 5, 6];
let vowelNumber = [ 'a', 'e', 'i', 'o', 'u'];
// includes true or false
console.log(fruits.includes('orange'));
console.log(fruits.includes('ata'));
// indexof index Number or -1
console.log(fruits.indexOf('orange'));
console.log(fruits.indexOf('ata'));
// array check
console.log(Array.isArray(fruits));
// convert array to String
let arrayToSting = fruits.join(' ')
console.log(arrayToSting);
// concat
console.log(fruits.concat(number,vowelNumber));
