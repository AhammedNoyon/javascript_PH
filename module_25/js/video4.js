console.log('video4 js');
const section2Container = document.querySelector('.section2-items-container li')
// console.log(section2Container);

const section2AllLists = document.querySelectorAll('.section2-items-container li')
// console.log(section2AllList);
for (const section2AllList of section2AllLists){
  // console.log(section2AllList);
  section2AllList.innerText = 'I am section 3 item';
  // console.log(section2AllList.innerText);
}
