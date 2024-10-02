// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
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
