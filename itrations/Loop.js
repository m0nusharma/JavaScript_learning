// .................. for loop................

// for(variable; condition ; increment/decrement){
//     scope
// }

for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // this will execute next loop executed.
    // console.log("5 is a best number");
  }
  //   console.log(element);
}

//..................
for (let i = 1; i <= 10; i++) {
  // we can use same variable name because it is a another loop in same. but we cannot use same variable name in same scope
  // console.log(`this is a table of : ${i} `);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop Value is ${j} and outer loop value id ${i}`); // In this outer loop run one time then after inner loop run 10 times then outer loop run and so on till outer loop complete 10 time there loop.
    // console.log(`${i} * ${j} = ${i*j}`); // this print table 1 to 10.
  }
}

//........... loop in array.....
const myHeros = ["superman", "ironman", "Spierman", "Flash"];
// console.log(myHeros.length);

for (let i = 0; i < myHeros.length; i++) {
  const element = myHeros[i];
  // console.log(element);
}

//........... break and continue ...........

// break
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log("number 5 is detected. loop is stop here.");
    break; // any control we want to break we have to write a break keyword.
  }
  // console.log(`value of index is : ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log("number 5 is detected. ");
    continue;
  }
  if (index == 17) {
    // console.log("number 17 is detected.");
    break;
  }
  // console.log(`value of index is : ${index}`);
}

//..............while loop..................
let num = 1;
while (num <= 100) {
  // console.log(`odd number between 100 : ${num}`);
  num = num + 2;
}

let myArr = [ "superman", "flash",  "ironman",  "spiderman", "batman"];
let arr = 0;
while (arr < myArr.length) {
  if (myArr[arr] == "ironman") {
    // console.log(`my favorite super hero found ${myArr[arr]}`);
    break;
  }
  // console.log(`value of heros is ${myArr[arr]}`);
  arr++;
}

//..........do while loop.................
let score = 11
do {
  console.log(`the score is : ${score}`);
  score++
  
} while (score <= 10);

// in do while loop do is executed at least one time then it check the condition and continue.
