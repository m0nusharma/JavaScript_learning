// 1
// string revere with method.
const str = "hellow World";

const revarce = str.split("").reverse().join("");
// console.log(revarce);

// reverace string without method
function reverseString(str) {
  let reverce = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverce += str[i];
  }
  return reverce;
}

// console.log(reverseString("hello world"));

//2

// Create a function that counts the number of vowels (a, e, i, o, u) in a given string.

function catchVowels(str) {
  let vowel = str
    .toLowerCase()
    .split("")
    .filter((char) => "aeiou".includes(char));
  console.log(vowel.length);
}
// catchVowels("monu sharma");

// for of

function catchMyVowels(str) {
  let vowel = "aeiou";
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowel.includes(char)) count++;
  }
  return count;
}
// console.log(catchMyVowels("I am learning javascript."));

// Check if a String is a Palindrome "12321"
// Write a function to determine if a string reads the same backward as forward.
// /[^a-z0-9]g/  Palindrome.

function isPalindrome(str) {
  const normal = str.toLowerCase();
  //console.log(normal)
  const replased = normal.split("").reverse().join("");
  //console.log(replased)
  return normal === replased;
}
// console.log(isPalindrome("madam"))
// console.log(isPalindrome("monu"))
// console.log(isPalindrome("12321"))

// without method..

function palin(str) {
  const normal = str.toLowerCase();
  let replaced;
  for (let i = str.length - 1; i > 0; i--) {
    replaced += str[i];
  }
  return normal === replaced;
}
// console.log(palin("monu"));

4
//Find the Most Frequent Character in a String
// Write a program to find the character that appears most frequently in a given string.

function frequentChar(str) {
    const countChar = {};
    for (const char of str) {
        countChar[char] =(countChar[char] || 0) + 1;
        
    }
    // return countChar
    let maxCount = 0
    let Frequent = ""
    for (const char in countChar) {
        if (countChar[char] > maxCount) {
            maxCount = countChar[char]
            console.log(maxCount);
            Frequent = char
            console.log(char);
            
        }
    }
    return Frequent
}
console.log(frequentChar('hjvytfgdygwegtcdsftf'));
