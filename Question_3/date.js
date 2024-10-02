// Write a JavaScript program to get the current date.
let randomedate = new Date();

const day = randomedate.getDay();
const month = randomedate.getMonth() + 1;
const year = randomedate.getFullYear();

//formate the date
// let CurrentDate = `${day}/${month}/${year}`;
let CurrentDate = day + "/" + month + "/" + year;

console.log("The current date is:" + CurrentDate);
