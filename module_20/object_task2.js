// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020
// };


/* part 1
car.passenger = 5;
console.log(car);
*/



/* part 2
const add = {"passenger capacity" : 5};
// Object.entries(add).forEach(([key,value]) => { obj[key] = value})
Object.entries(add).forEach(([key,value]) => { car[key] = value })

console.log(car);
*/

//part 3
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

const addObject = {"passenger capacity" : 5, "number of wheels": 4};


// Object.keys(addObject); [key, key, key]
// Object.values(addObject); [value, value, value]

// Object.entries(addObject) [[key, value], [key, value], [key, value] ]

Object.entries(addObject).forEach(([key,value]) => {
  console.log(`key: ${key} -> value: ${value}`)
  car[key] = value ;
})

console.log(car);
