console.log('video5 js');
const sectionStyle = document.querySelectorAll("section");
// console.log(sectionStyle);
for(let i =0; i < sectionStyle.length; i++){
  // console.log(i);
  sectionStyle[i].style.backgroundColor = 'cadetblue';
  sectionStyle[i].style.border = "5px solid orange";
  sectionStyle[i].style.borderRadius = "15px";
  sectionStyle[i].style.marginBottom = '20px';
  sectionStyle[i].style.boxShadow = '5px 5px 12px purple';
  sectionStyle[i].style.paddingLeft = '10px';
}
sectionStyle[2].style.backgroundColor = 'yellow';
sectionStyle[2].style.color = 'red';
sectionStyle[2].style.fontSize = '1.5rem';

const section2Li = document.querySelectorAll('.section3-items-container li');
// console.log(section2Li);
section2Li[1].style.color = 'green';
section2Li[1].style.fontSize = '2rem';
section2Li[1].style.textAlign = 'center';
section2Li[1].style.listStyle = 'none';

// const section4Id = document.getElementsByClassName('section4');
// console.log(section4Id.classList);//problem in classList

const firstTitle = document.getElementById('first-title');
firstTitle.setAttribute('title', 'I am changing by dom');

