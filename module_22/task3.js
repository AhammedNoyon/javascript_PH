let str = 'bangladesh';
str = str.toLowerCase;
count = 0;
function isVowel (vowels){
// console.log(vowel);
for (let vowel of vowels){
  if(vowel === str[i]){
    count++;
  }
}
return count;
}
let vowels = ['a', 'e', 'i', 'o', 'u'];
const checkVowel = isVowel(vowels);
console.log(checkVowel);
