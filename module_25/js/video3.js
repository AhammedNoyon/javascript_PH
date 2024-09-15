console.log('video3 js');
const firstSectionPera = document.getElementById('first-section-pera');
// console.log(firstSectionPera.innerText);
firstSectionPera.innerText = 'Hello, I am paragraph in first section';

const firstSectionItems = document.getElementsByClassName('first-section-items');
for (const firstSectionItem of firstSectionItems){
  // console.log(firstSectionItem.innerText);
  firstSectionItem.innerText = 'I am first section item';
}
