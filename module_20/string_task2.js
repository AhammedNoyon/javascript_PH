let text = `bAngladesh`;
let count = 0;
for (const i of text.toLowerCase()){
  // console.log(i);
  if(i.includes('a')){
    count++;
  }
}
console.log(count);
