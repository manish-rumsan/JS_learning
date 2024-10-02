//0a.Write a JavaScript program that prints 'Hello World'.
let x = "Hello World";
console.log(x);
console.log("Hello World");

//0b.Write a JavaScript program to set the value of PI.
const pi = 3.1415;
console.log(pi);

//1. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

const a = 5;
const b = 5;

let result;

if (a === b) {
  result = 3 * (a + b);
} else {
  result = a + b;
}

console.log(result);

//2. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
let number = 21;

if (number > 0) {
  if (number % 3 === 0 || number % 7 === 0) {
    console.log(number+ " number is divisible by 3 or 7");
  } else {
    console.log(number + " number isnot divisible by 3 or 7");
  }
} else {
  console.log("Please enter the positive number");
}

//3.  Write a JavaScript program to get the current date.
let randomedate = new Date();

const day = randomedate.getDay();
const month = randomedate.getMonth() + 1;
const year = randomedate.getFullYear();

//formate the date
// let CurrentDate = `${day}/${month}/${year}`;
let CurrentDate = day + "/" + month + "/" + year;

console.log("The current date is:" + CurrentDate);

