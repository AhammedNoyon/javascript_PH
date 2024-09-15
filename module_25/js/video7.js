console.log('video7 js');
const lastSection = document.getElementById('last-section');


const newSection = document.createElement('section');

const newSectionTitle = document.createElement('h1');
newSectionTitle.innerText = 'Hello, I am new section title'
newSection.appendChild(newSectionTitle);

const newOl = document.createElement('ol');
newSection.appendChild(newOl);


const li1 = document.createElement('li');
li1.innerText = 'I am new list 1';
newOl.appendChild(li1);


const li2 = document.createElement('li');
li2.innerText =  'I am new list 2'
li2.style.color = 'white';
li2.style.fontSize = '1.2rem';
li2.style.fontWeight = 'bold';
newOl.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'I am new list 3';
newOl.appendChild(li3);


newSection.style.padding = '50px';
// newSection.style.backgroundColor = 'white'
newSection.style.margin = '50px'
newSection.style.textAlign = 'center';

newOl.style.listStyle = 'none';


lastSection.appendChild(newSection);


const main = document.getElementById('main');

const newSection2 = document.createElement('section')
newSection2.innerHTML = `
<h1> I am new section 2 title </h1>
<ul>
<li> new section 2 list 1 </li>
<li> new section 2 list 2 </li>
<li> new section 2 list 3 </li>
</ul>
`;
main.appendChild(newSection2);

