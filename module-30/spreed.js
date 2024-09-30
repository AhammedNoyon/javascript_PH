const arr = [20, 39, 29, 29, 25, 1, 5, 38];
// const newArr = (...arr);
const newArr = Math.max(...arr);
// newArr.push(22);
// console.log(arr);
// console.log(newArr);

const arr1 = [12, 20, 30, 40];
const arr2 = [...arr1];
arr2.push(50);
// console.log(arr1);
// console.log(arr2);
// console.log(arr1, arr2);

// array merging
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arrMarge = [...arr3, ...arr4];
// console.log(arrMarge);

// Adding New element to an array with spread
const addElArr = [2, 4, 6, 8];
const newElement = [0, ...addElArr, 10];
// console.log(newElement);

// uses spread operation in obj
const abj = { name: "maya", age: 16, gender: "Female" };
const usesSpr = { ...abj };
// console.log(usesSpr);

// overwriting properties
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
// console.log(...obj1, ...obj2);//obj a direct marge not possible
const newObj = { ...obj1, ...obj2 };
// console.log(newObj);

// pass array with spread operator in function
function sprFunc(x, y, z) {
  return x + y + z;
}
const numbers = [2, 4, 6];
const result = sprFunc(...numbers);
console.log(result);
