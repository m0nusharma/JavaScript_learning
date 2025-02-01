//1  Write a JavaScript program to get the first n elements of an array. [n can be any positive number.

const myArr = [2, 4, 5, 8, 15, -5, -12];

const postiveElement = myArr.slice(0, 5);
// console.log(postiveElement);
//2 Write a JavaScript program to get the last n elements of an array.n can be any positive number.
const myArr2 = [3, 45, 123, 564, 244, 63, 34, 6 - 565, 23, -6, 4];
// console.log(myArr2.length);

const elements = myArr2.slice(6, 11);
// console.log(elements);

// 3 Write a JavaScript program to check whether a string is blank or not.

function blankOrNot(str) {
  if (str === "") {
    console.log("String is Empty");
  } else {
    console.log("string is not empty");
  }
  return str;
}

// blankOrNot("");

// 4 Write a JavaScript program to test whether the character at the given (character) index is lowercase.

function LowerCase(str) {
  if (str === str.toLowercase) {
    console.log(`String in Lower Case : ${str}`);
  } else {
    console.log(`string is not a in LowerCase : ${str}`);
  }
  return;
}
// LowerCase("Monu Sharma");

// Write a JavaScript program to strip leading and trailing spaces from a string.
let  spaces = "               this  is a  monu sharma"
 let  trimed = spaces.trim()
 console.log(trimed);
 

 // 6 Write a JavaScript program to check if an element exists in an array or not.
 function checkValue(myArr) {
    const arr = [ 1,2,3,4,5,6,7,8,9];
    if(arr.indexOf(myArr) != true ){
        console.log(`this element is not present in array ${myArr}`);
    }else{
        console.log(`this Element is present in Array  ${myArr}`);
    }
    return
 }

 checkValue(10)

