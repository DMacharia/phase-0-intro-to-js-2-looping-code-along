//for loop for looping through age and logging birthday message
for (let age = 30; age < 40; age++) {
  console.log(`I am ${age} years old. Happy Birthday to me!`);
  debugger;
}

//function that loops through gifts and logs message
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}
wrapGifts(gifts);

//function that loops through names and returns a thank you message

function writeCards(names, event) {
  let message = [];

  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return message;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

//countDown function
let num = [];

function countDown(num) {
  let i = 10;
  while (i >= 0) {
    console.log(i--);
  }
  return num;
}
countDown(num);

// const num2 = [];

// function countDown2(num2) {
//   for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }
//   return num2;
// }
// countDown2(num2);
