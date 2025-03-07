// revere words

let reverseWords = "words";
const chnaged = reverseWords.split("").reverse("").join("");
// console.log(chnaged);

let funcWords = "hello java script im going to master you";

const abc = funcWords.split(" ").map((e) => e.split("").reverse().join(""));
//console.log(abc.join(" "));

// reverse in func

const num = [2, 7, 11, 15];
const sum = num[0] + num[1];
// console.log(sum)

// loop 1 to 50
for (let i = 1; i <= 50; i++) {
  // console.log(i);
}

// sum of 1 to 10 with while loop

let myNum = 1;
let mySum = 0;
while (myNum < 11) {
  mySum = mySum + myNum;
  myNum++;
}

// console.log(mySum);

// print each char with for..of loop

let str = "javaScript";
for (let each of str) {
  //   console.log(each);
}

// skips even num between 1 to 20

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
  } else {
    // console.log(i);
  }
}

// do while loop 5 to 1

let backNum = 5;
do {
  //   console.log(backNum);
  backNum--;
} while (backNum > 0);

// factorail of 5

let fact = 1;
for (let i = 5; i > 0; i--) {
  fact = fact * i;
}
// console.log(fact);

//3*3 grid number

let hold = 1;
for (let i = 1; i < 4; i++) {
  let str = "";
  for (let j = 1; j < 4; j++) {
    str += `${hold} `;
    hold++;
  }
  // console.log(str);
}

// max num in an array

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const maxNUm = Math.max(...myArr);
//console.log(maxNUm);

// sum of all the Element in array

const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = myArr2.reduce((acc, ele) => acc + ele, 0);
// console.log(total);

// reverce with reverce method

const myArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reverced = [];

for (let i = myArr3.length - 1; i >= 0; i--) {
  reverced.push(myArr3[i]);
}
// console.log(reverced);

// remove dublicate elements

const myArr4 = [1, 2, 2, 2, 3, 5, 6, 3, 1, 8, 9, 3, 4, 5, 6, 7, 8, 9];
const unqArr = [...new Set(myArr4)];
// console.log(`unique Elements: ${unqArr}`)
// console.log(unqArr)

// sort an array

const myArr5 = [1, 2, 2, 2, 3, 5, 6, 3, 1, 8, 9, 3, 4, 5, 6, 7, 8, 9];

const sortedArr = myArr5.sort((a, b) => b - a);
console.log(sortedArr);
