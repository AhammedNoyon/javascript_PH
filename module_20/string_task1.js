let str = `bAngladesh`;
let count = 0;
for (const i of str){
  // console.log(i);
  if(i.includes('a'.toLowerCase())){
    count++;
  }
}
console.log(count);
