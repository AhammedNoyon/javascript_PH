let myObject = {

  name: 'John Doe',
  age: 25,
  city: 'Example City',
  isStudent: true
  };


  for(let i in myObject){
    // console.log(i);
    const data = typeof myObject[i];
    // console.log(data);
    // console.log('key: ', i, '|', 'type: ', data);//this is right
    console.log(`key: ${i} | type: ${data}`);//but this advance
  }
