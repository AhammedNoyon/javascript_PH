const arrowFunction = (a, b) => a + b;
const result = arrowFunction(11, 12);
// console.log(result);
// multi line arrow function
const calculation = (a, b, c = 10) => {
  //   console.log(a, b, c);
  const sum = a + b + c;
  //   console.log(sum);
  const sub = a - b;
  //   console.log(sub);
  const multi = a * b * c;
  //   console.log(multi);
  const divide = parseInt(multi / sum);
  //   console.log(divide);
  return `The sum + multi = ${sum + multi} and the divide * sub ${
    divide * sub
  }`;
};
const result2 = calculation(5, 2);
console.log(result2);
