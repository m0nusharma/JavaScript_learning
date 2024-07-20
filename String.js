// let str1 = "monu"
// let str2 = 'sonu'

// // console.log(`this is my name ${str1} and this is my brother name ${str2}`)

const myName = new String('MonuSharma');
// console.log( myName); // we can a access any of word boz this is object

// console.log(typeof myName); // why this is object?

// methods

// console.log(myName.length); // check length.
// console.log(myName.toUpperCase()); // check upper case.
// console.log(myName.charAt(4)); // konse index pe kya hai
// console.log(myName.indexOf('h')); // find index number

// const newStr = "        Khushi    " // .trim remove unwanted space from a string
// console.log(newStr);
// console.log(newStr.trim());

const newName = myName.substring(0,4) // it cut a string and write word. u given index where to where.
console.log(newName);

const nameEdit = myName.slice(-10, 4) // it make string slice to starting point and ending point. we can write -ve also
console.log(nameEdit);

// const url = "https://monushrma.com//from.guwahati"   
// console.log(url.replace("guwahati","chandigarh")); // .replace, replace any string to another.
// console.log(url.includes('guwahati')); // .include show us a value that present in variable or not.
// console.log(url.split("//") )  // it remove given string on function and make string a array.


// all methods os string
let myStr = "Hello, World!";
// console.log(str.length);  //Returns the length of the string.
// console.log(str.charAt(0)); //Returns the character at the specified index.
// console.log(str.charCodeAt(0));  //Returns the Unicode of the character at the specified index.
let myStr2 = " How are you?";
console.log(myStr.concat(myStr2)); //Concatenates the string arguments to the calling string and returns a new string.

console.log(myStr.includes("World")); // Determines whether one string may be found within another string.
console.log(myStr.includes("world"));
console.log(myStr.indexOf("World")); // Returns the index within the calling String object of the first occurrence of the specified value.
console.log(myStr.indexOf("world"));

//lastIndexOf(searchValue, fromIndex)

let str3 = "Hello, World! Hello, JavaScript!";
console.log(str3.lastIndexOf("Hello"));  //Returns the index within the calling String object of the last occurrence of the specified value.