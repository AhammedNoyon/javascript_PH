let statement = 'I am a hard working person';
// const rev = statement.split('').reverse().join('');
// console.log(rev);
// let newStr = '';
// // console.log(arr);
// //
let newStr = '';
let arr = statement.split(' ');
console.log(arr);
for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
  newStr = arr[i]+ ' ' + newStr;
}
console.log(newStr);


// statement = statement.split(' ').reverse().join(' ')
// console.log(statement);
