// function is many blocks of code in one variable that is function.

// SYNTAX OF FUNCTIONS

function myname() {
  console.log("M");
  console.log("O");
  console.log("N");
  console.log("U");
}

// myname // this is a reference of functions. this is not giving anything but is store a function. because this is just a reference.
//  myname() // this is execute  is functions.

// adding  two numbers

function addTwoNum(num1, num2) {
  // (parameters). this is parameters. when we create a definition of function thats is parameters
  //    console.log(num1 + num2,);
}
addTwoNum(3, 6); // (argument). this is arguments. // when we call functions thats is arguments,.
const checkValue = addTwoNum(3, "6"); // (argument). this is arguments. // 6 is sting so js understand 3 is also strings. 36
addTwoNum(3, null); // (argument). this is arguments. 3
addTwoNum(3, "a"); // (argument). this is arguments. 3a
// we face some problems here. because in js we don't have to data type so js understand value by own mind.

// another function
function addTwoNumbers(num1, num2) {
  //  pass a parameters

  //    let numbers = (num1 + num2);
  //    return numbers

  return num1 + num2; // this is also a type to declare a function  in short whys. both works same.
  // console.log("monu"); // it will never run because. after return keyword functions is end.
}

const result = addTwoNumbers(5, 9); // pass a arguments // this is numbers type.
// const result = addTwoNumbers(5,"9") // this is strings type.
// const result = addTwoNumbers(5, undefined) // this is numbers  type.
console.log("result :", result);

console.log(typeof result);

// another functions.

// make this functions is a parson logged in.

// function loggedinUserMassge(username ="monu") { is this conditions it never go to if conditions because username never undefined. username atleast monu is given
function loggedinUserMassge(username) {
  //   if (username === undefined) { //  same. if username equal to undefined then print if conditions.
  if (!username) {
    // same.  // if username is not given then print if condition.
    console.log("place enter a UserName");
    return;
  }
  return `${username} just logged In`;
}

// console.log(loggedinUserMassge());

// another functions

// creating a cart functions that multiple cart values.

// function calculateCartPrice(...num){ // ... is REST operator. it create a array of multiple value
function calculateCartPrice(val1, val2, ...num) {
  // in this val1 takes a 1st arguments and val2 take 2nd argument. and rest make a array
  return num;
}
// console.log(calculateCartPrice(200,500,622,567,999));

// call object in functions
const productData = {
  ProductName: "soap",
  price: 99,
};
function handleObj(anyObject) {
  console.log(`${anyObject.ProductName} in just rupess ${anyObject.price}`);
}
// handleObj(productData)

handleObj({
  // we define   oject in functions like this.
  ProductName: "harry porter Book",
  price: 999,
});

// call array in functions
const myNewArr = [100, 300, 400, 700, 200];

function getArray(getSecondArr) {
  return getSecondArr[2]; // get second value of an array
}

console.log(getArray(myNewArr));
console.log(getArray([100, 200, 300, 500, 600])); // we can get array from both methods
