// system 1
let massages = 'Bangladesh is a beautiful country';

let rev = '';
for ( let massage of massages ){
  // console.log(massage);
  // console.log(rev);
  rev = massage + rev;
}
// console.log(rev);

// system 2
let reverse = '';
for (let i = 0; i < massages.length; i++){
  reverse = massages[i] + reverse;
}
// console.log(reverse);

// system 3
const reverseMessage = massages.split('').reverse().join('');
// console.log(reverseMessage);
