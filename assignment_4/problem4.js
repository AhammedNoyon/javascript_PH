function calculateFinalScore(obj) {
  if(typeof obj !== 'object'){
    return "Invalid Input";
  }
  if(obj.testScore > 50 || obj.schoolGrade > 30){
    return "Invalid Input";
  }

  const extraMarkFarmerFamily = 20;
  let finalScore = obj.testScore + obj.schoolGrade;
  if(obj.isFFamily === true){
    finalScore = finalScore + extraMarkFarmerFamily;
  }
  if(finalScore >= 80){
    return true;
  }
  else{
    return false;
  }
}



  const x = { name: "roma",
    testScore: 45,
    schoolGrade: 35,
    isFFamily : false
  }



// const x = { name: "roma",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily : true
//   }

// const x = {
//     name: "roma",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily : false
//   }

// const x = {
//     name: "roma",
//     estScore: 15,
//       schoolGrade: 25,
//       isFFamily : true
//   }

// const x = "hello"


const returnResult = calculateFinalScore(x);
console.log(returnResult);
