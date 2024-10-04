//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

let celsius = 60;
// Convert Celsius to Fahrenheit
let convertedvalue = (celsius * 9) / 5 + 32;
console.log(celsius + "°C is equals to " + convertedvalue + "°F");

// Convert Fahrenheit to Celsius
let fahrenheit = 45;
let convertedvalue1 = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheit + "°F is equals to " + convertedvalue1 + "°C");
