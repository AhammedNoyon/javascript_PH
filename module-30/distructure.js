// basic
const arr1 = [3, 5, 7];
const [first, second, third] = arr1;
// console.log(first);
// console.log(second);
// console.log(third);

// skipping Element
const skipEl = [2, 4, 6];
const [x, , z] = skipEl;
// console.log(x);
// console.log(z);

// default value in destructure
const single = ["maya"];
const [text1, text2 = "Love"] = single;
// console.log(text1, text2);

// swapping variable
let t1 = "text1";
let t2 = "text2";
[t1, t2] = [t2, t1];
// console.log(t1);
// console.log(t2);

const person = {
  name: "Alice",
  age: 22,
  address: {
    city: "New York",
    road: 12,
  },
  hobbies: ["football", "reading", "writing", "hard-work", "swimming"],
};
const {
  name,
  age,
  address: { city, road },
  hobbies: [hobby1, hobby2, hobby3, hobby4, hobby5],
} = person;
console.log(
  `Hello would ! I am ${name}. My age ${age}. Still now i am live in ${city}. My hobby is playing ${[
    hobby1,
  ]}`
);
