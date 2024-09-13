// let text = `x`;
// text[0] = `y`;
// console.log(text);
// text = text.split();
// console.log(text);
// text[0] = `y`;
// console.log(text);
// text = text.join();
// console.log(text);


let str = `X`;
// console.log(str);
// text = text.split();
// console.log(text);
// text[0] = `y`.toUpperCase();
// console.log(text);
// text = text.join();
// console.log(text);

let text1 = `physical exercise means the movement of the lems of our body according to rules. it keeps good health and promote strength.`;//problem this task
text1 = text1.split(' ');
// console.log(text1);
let newText = '';
for (const text of text1 ){
  // console.log(text[0]);
  newText += text[0].toUpperCase() + text.slice(1)+ ' ';
}
newText = newText.trim();
console.log(newText);


// capitalize += capitalize[0].toUpperCase() + capitalize.slice(1) + " ";
