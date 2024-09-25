let arr = [1, 2, 3, 4, 5];
console.log(arr[2]); // index value 

// array push, pop, shift, unshift,
arr.push(6) // add value by push in array
arr.pop() // remove value from array

// arr.shift() // remove first value of an array
// arr.unshift(9) // add value in 0 index in array
console.log(arr);

// methods
console.log(arr.includes(8)); // it check a value is present or not.
console.log(arr.indexOf(1)); // it find a value is present or not is present it gave us that value if not present it gave us -1.
const newArr = arr.join(); // .join  is make array into string and string is comma separated
console.log(newArr);

// slice or splice methods
console.log("A", arr);
const mnyA1 = arr.slice(1,3) // gave index number that we need. 
console.log(mnyA1); // .slice the last given index didn't take in slice
console.log(arr); // .slice cannot effect the original array

const mnyA2 = arr.splice(1,3) // splice is also cut the value from array by index numbers.
console.log(mnyA2); // .splice the last given index take in splice
console.log(arr ); // .splice effect the original array..


const marvelHeros = ["ironman", "spiderman", "thor", "hulk"];
const dcHeros = ["superman", "flash", "batman"];


const allHeros = marvelHeros + dcHeros;
console.log(allHeros) //it #concatenate but it makes array to string
console.log(typeof allHeros)

marvelHeros.push(dcHeros);
console.log(marvelHeros) // when we try to #push dcHeros in marvelHeros then we get 2 array in one array.

// when we use .concat it resolve the problem and marge both array together
const allHerosHere = marvelHeros.concat(dcHeros)
console.log(allHerosHere);

// spread Array it spread all array and make it individual.
const allMySuperHero = [...marvelHeros, ...dcHeros];
console.log(allMySuperHero)

// nested Array change by the help of .flat method.

const numArray = [1, 2, 3, 4, [5, 6, 7], 8 , [9, 5, [3, 7, 5]]];
const real_numArray = numArray.flat(Infinity)
console.log(real_numArray)

//string in array

console.log(Array.isArray("MONU SHARMA"))
// Array.from change string into array  
console.log(Array.from("MONU SHARMA")) // .from make string to array

console.log (Array.from({name: "MONU"})) // interesting 
// it can't convert this object so it gave us an empty array. we have to tell them make array on key or object then its works


//change variable into array by (Array.of ). 
let marks1 = 90
let marks2 = 95
let marks3 = 99

console.log(Array.of(marks1,marks2,marks3))

// Array method  
// 1 isArray
// 2 Array.from
// 3 Array.of

const myCar = ["W", "A", "G","N", "A", "R" ]

// console.log(myCar);
myCar.pop()
myCar.pop()
myCar.push("O")
myCar.push("R")
myCar.shift()
myCar.shift()
myCar.shift()
myCar.shift()
myCar.unshift("G")
myCar.unshift("A")
myCar.unshift("W")
myCar.unshift("G")
console.log(myCar);

myCar.splice(4,2, "O", "N")
myCar.splice(0,4, "G" , "W","A", "G" )
console.log(myCar);


const siblings = [ "Sonu","Monu", "khushi"]
const perents = ["Mr. Ramesh","Mrs Sunita"]

const family = perents.concat(siblings)
console.log(family);

const familyy = [...perents, ... siblings]
console.log(familyy);


