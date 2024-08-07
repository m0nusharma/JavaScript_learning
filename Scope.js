// Local Scope:
// A variable declared within a function is said to have local scope. Each function creates a new local scope, and variables declared
// within that scope are only accessible within that function

// Block Scope:
// Block statements like if, for, while, and switch do not create a new scope. Variables declared within a block are still part of
// the surrounding function’s scope. This means that variables declared within a block are accessible outside the block, unlike local variables.

// Global Scope:
// Variables declared outside all functions or curly braces ({}) exist in the global
// scope and are accessible from anywhere in the program.

// Local scope
function add(x, y) {
  let result = x + y;
  // console.log(result); // 5
}
add(2, 3);

// Block scope (does not create a new scope)
if (true) {
  let blockVariable = 10;
}
// console.log(blockVariable); // ReferenceError: blockVariable is not defined

// Global scope
var globalVariable = 20;
// console.log(globalVariable); // 20

// note we can access global scope inside any functions but we cannot access any block scope in a outside of any functions.

// *****************************//
// nested scope
function one() {
  // parent scope // I created a one scope in between one more scope.
  // const username = "monuSharma10";

  function two() {
    // child scope
    const website = "youtube";
    // console.log(username); // parent scope run is child scope. but child never run in outside his scope.
  }
  // console.log(website); // if i write this outside of scope it doesn't run. and it will give error.

  two(); // secondly run child scope
}

one(); // firstly run a parent scope

// ****if conditions scope*****//

if (true) {
  const userName = "MonuSharma10";
  if (userName === "MonuSharma10") {
    const website = " Youtube";
    // console.log(userName + website); // it will run because it is inside is child scope.
  }
  // console.log(website); // error is  /*website is not */ // it never run because it is child scope and i call it outside of child scope.
}
// console.log(userName);// error is  /*userName is not */ // it never run because it is parent scope and i call it outside of parent scope.

// ************Hoisting*************//

// we make two type of functions

console.log(addOneVal(6)); // it runs
function addOneVal(num) { // func one
  return num + 1;
}

console.log(addTwoVal(5)) // error= Cannot access 'addTwoVal' before initialization
const addTwoVal = function(num) { // func two
  return num + 2;
};
// addTwoVal(5) it runs 

// both function runs but func one run when i write there argument above a that function. and func two through error when we white a there argument above that functions 