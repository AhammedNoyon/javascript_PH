function arrayLength (height2){
    // console.log(height2);
    let storValue = height2[0];
    for (let i = 0; i < height2.length; i++ ){
      // console.log(i);
      if ( height2[i].length < storValue.length){
        storValue = height2[i];
      }
      // if ( [i].length < storValue.length){
      //   storValue = [i];
      // }
    }
    return storValue;
}
const height2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallest = arrayLength(height2);
console.log(smallest);

// function arrayLength (height2){
//   // console.log(height2);
//   let storValue = height2[0];
//   for (let height of height2){
//     // console.log(height);
//     if ( height.length < storValue.length){
//       storValue = height;
//     }
//   }
//   return storValue;
// }
// const height2 = [ 'rahim', 'robin', 'rafi', 'ron', 'rashed'];
// const result = arrayLength(height2);
// console.log(result);
