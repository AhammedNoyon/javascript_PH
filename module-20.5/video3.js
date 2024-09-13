const numbers = [11, 21, 13, 4, 555, 6, 72, 8, 9];
const serialMaintain = [...numbers].sort(function(a, b) {return a - b});
console.log(serialMaintain);
const serialMaintain2 = [...numbers].sort(function(a, b) {return b - a});
console.log(serialMaintain2);
