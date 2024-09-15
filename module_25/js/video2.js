console.log('video2 js');

const sectionTitles = document.getElementsByTagName('h1');
for (const sectionTitle of sectionTitles ){
  // console.log(sectionTitle.innerText);
  sectionTitle.innerText = 'Hello i am section heading';
}
