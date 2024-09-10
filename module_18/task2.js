let height,weight,miter,heightCentMiter;
weight = 77;
heightCentMiter = 165;
miter = heightCentMiter / 100;
// console.log(miter);
height = miter * miter;
// console.log(height);
const bmi = weight / height;
console.log('your bmi is = ' + bmi.toFixed(2));
if( bmi >= 18.5 && bmi <= 24.0){
  console.log('you are normal.');
}
else if ( bmi >= 25 && bmi <= 29.9){
  console.log('you are overweight.');
}
else{
  console.log('you are obese.')
}
