// primitive data type
// string
let firstName = "monu ";
let lastName = "sharma";

let fullName = `my name is ${firstName} ${lastName} `;
console.log(fullName);

// number
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);

// bigInt
let bignum1 = 10654654n;
let bignum2 = 20545454n;

let bignum = bignum1 + bignum2;

console.log(bignum);

let loaction;
console.log();

let val = null;
console.log(val);

// const mySym = new Symbol("MyKeY")
// console.log(mySym);

// // non primitive

// const a= [1,2,4,5]
// console.log(a); // array

// const obj = {
//     name: "monu",
//     age: 23,
//     email: "monu@gmail.com",
// }

// const myfunction = function() {
//   console.log("hello world");
// }

// string methods

const myname = "Monu Sharma";
console.log(myname.length);

console.log(myname.substring(5));

const MySelf = "My Name is monu sharma";
const selfdetails = MySelf.split(" ");
console.log(selfdetails);

console.log(MySelf.replace("monu", "sonu"));
console.log(MySelf.includes("monu"));
console.log(MySelf.toLowerCase());
const details = " sonu sharma";
console.log(details.concat(myname));

const editName = "     monu sharma     ";
console.log(editName.trim());

const Arr = [
  11,
  "monu sharma",
  123456n,
  null,
  undefined,
  "symbol",
  true >
   { name: "monu",
    age : 23,
    email: "monu@gmail.com",
   },
   function() {
    console.log("hello world");

   }
];

console.log(Arr);
