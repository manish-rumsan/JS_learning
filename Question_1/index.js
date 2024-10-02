// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

const a = 5;
const b = 5;

let result;

if (a === b) {
  result = 3 * (a + b);
} else {
  result = a + b;
}

console.log(result);
