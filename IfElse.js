// ..................conditional statements....................

//comparison operators
// less then < ,grater then >, larger or equal<=, smaller or equal>=, equal ==, not equal !=, equal or check data type (strict equal)===, strict not equal !==

// if(condition){

// }

//  if (12 <= 3){ // if the condition will true the its check the local scope value if its false then it skip the scope.
// console.log("true")
//  }else{
//     console.log("false");

//  }

// game score
// const score = 200;

// if (score > 300) {
//     let power = "fly"
//     console.log(`User Power : ${power}`)
// }else{
//     console.log(`your score ${score} is not enough to get any power`);
// }

// short hand notation
// const balance = 1000
// if (balance > 500) console.log("text") , console.log("text2"); // it will run but we never have to do like this in our code.

// ...........nesting.......

const balance = 500;
if (balance < 500) {
  console.log("balance less then 500");
} else if (balance < 750) {
  console.log("balance less then 750");
} else if (balance < 900) {
  // we can white many time condition by writing 'else if'
  console.log("balance less then 900");
} else {
  console.log("balance less then 1200");
}
// ........... and... // in this condition both must be true then the code run.
const userLoggedIn = true;
const userDebitCard = true;

if (userLoggedIn && userDebitCard) {
  // console.log("You can shop anything online");
}
//.............. or........... // in this condition any of one must be true then code will run
const LoggedInFromGoogle = true;
const LoggedInFromEmail = false;
const LoggedInFromContact = false;

if (LoggedInFromGoogle || LoggedInFromEmail || LoggedInFromContact) { 

  // console.log("thanks for login");
}

//......... nullish coalescing operator (??)...............
// we use this in special case when data give us a 2 value and cose one value that time we use this.
let val1;
// val1 = 5 ?? 10 // which will it pick. it pick 5 coz it is first
// val1 = null ?? 10 // in this case it will pick 10. 
// val1 = undefined ?? 10// in this case it will pick 10
val1 = null ?? 10 ?? 20 // in this case it will pick 10

console.log(val1);


//.......... ternary operator.............
// this is small brother of if else. 

// syntax
// condition ? true : false

 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("less then 80") : console.log("more then 80")



