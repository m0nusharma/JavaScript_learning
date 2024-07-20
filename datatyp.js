// primitive data type
// call by value
// 1 number
// 2 String
// 3 boolean
// 4 undefined
// 5 null
// 6 symbol
// 7 bigInt

const num = 33;
const str = " Hello world";
const islogIn = true;
const value = null;
let val;
const bigNum = 123456n;
// symbol value define as same but when we check its not same.
const sym = Symbol("monu");
const newSym = Symbol("monu");
const checkSameOrNot = sym === newSym;
// console.log(checkSameOrNot);




// reference type data type (non primitive)

// Array, abject, function

const arr = ["superman", "Spiderman", "hulk"]

const obj = {
    name: "monu",
    age: 20,
    islogIn: true,
}

const myfunction = function(){
    console.log("hello world");
}

//********************************************************************************* */
// memory allocation

// stack(Primitive) ,  heap(non-primitive)

// stack
//  copy of value 
// it cannot change in original value.

// heap
// reference of value
// it change in original value.