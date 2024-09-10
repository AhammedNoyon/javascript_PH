let text1 = 'bangladesh';
let text2 = 'Bangladesh';

if (text1.toLowerCase === text2.toLowerCase){
  const message = 'We say Bangladesh is beautiful country.';
  console.log(message);
}
else {
  const message = 'we do not say Bangladesh is a beautiful country';
  console.log(message);
}

let text3 = 'bangladesh  ';//space count for length count
let text4 = 'bangladesh';


if (text3.trim() === text4.trim()){
  console.log('I love bangladesh.')
}
else {
  console.log('I love dot dot dot');
}
