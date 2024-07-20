const num = 100;

const balance = new Number(500); // it is pure number when we use like this
console.log(balance);

// methods

console.log(balance.toString()); // .toSting change number in string
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // .toFixed it add decimal and extra 0 after decimal.. it use mostly when we make a transaction site

const otherNum = 23.9278;
console.log(otherNum.toPrecision(3)); // .toPrecision is round of a decimal number and write write number you wrote in function

const hundreds = 100000000;
console.log(hundreds.toLocaleString()) // .toLocaleString use when we use in big number it add commas in numbers and increase read accessability

//************************* Math ****************************** *//
console.log(Math.abs(-4)); // .abs remove negative sign from number.
console.log(Math.round(5.4)); //.round  round of a value 
console.log(Math.ceil(5.4)); //.ceil round of a value upper value
console.log(Math.floor(5.4)); //.floor round of a value lower value
console.log(Math.sqrt(9)); //.sqrt square root of a number
console.log(Math.pow(2, 3)); //.pow power of a number
console.log(Math.min(1, 2, 3, 4, 5,))//.min find minimum number  
console.log(Math.max(1, 2, 3, 4, 5,)) // .max find maximum number


console.log(Math.random()); // it chose a random value 0 to 1
console.log(Math.random()*10); // we multiply by coz we want value 0 to 10
console.log(Math.floor(Math.random()*10) +1); // we add 1 here coz we dont want value 0 here and add .floor to remove number after decimals


// we need value 10 to 20
const min = 10
const max = 20

console.log( Math.floor(Math.random()*(max - min + 1 ) + min)) 