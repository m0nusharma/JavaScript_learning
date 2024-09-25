// ..........This.........

// this work with context context.

const user = {
  // we write object
  username: "monu Sharma",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`); // this is show the context we are using;
    // console.log(this); // this will print whole context we write.
  },
};

// user.welcomeMessage()
// user.username = "sonu sharma"
// user.welcomeMessage()

// console.log(this); // it will show empty {} co'z we don't have any value on globe // when we use this by comment the reference. so this will be a empty object but when we white in a chrome then its not empty object this will show a window object in chrome.

// ...................this in Function................
function myFun() {
  let username = "monu";
  //console.log(this ); // when we call this in function then we have so many thing in our terminal.
  // console.log(this.username ); // we just only get value in object  not in function by using this keyword
}
// myFun()

const arrowFun = () => {
  console.log(this); // when we this in arrow function then we get nothing in terminal.
};
// arrowFun()

// ...................arrow function....................

// explicit return
// 1. ()=> {} // in this we have to write under curly bracket. white return to get value
// implicit return
// 2. ()=> () // in this we don't have to any bracket in your choices we can write it in parenthesis.. but use this in single line of code.

const sun = (val1, val2) => {
  return val1 + val2; // explicitly use
};
console.log(sun(10, 19));

// const twoNum = (val1,val2) => (val1 + val2) // we use this in number

// lets do same in object
// const twoNum = (val1,val2) => {username:"monu sharma"} // we cannot write object like this in arrow function
const twoNum = (val1, val2) => ({ username: "monu sharma" }); // we have to put curly bracket in parenthesis.

console.log(twoNum());
