// truthy nad falsy value js assumed that this is true or false

const userName = "mOnuSHrma"; // in this case we did'nt apply any condition but this code run. because this string value assumed as true value.
// const userName =  ""  // false value. because this is a empty.

if (userName) {
  console.log("We find user name");
} else {
  console.log("we don't have user name");
}

// lets see a falsy and truthy value

// falsy value
// "", 0, -0, BigInt 0n, null, undefined, NaN , false

// truthy
// "0", 'false', , " ", [], {}, function(){}

// we have seeing array or object is empty

const userArr = [];

if (userArr.length === 0) {
  console.log(" Array is Empty");
} else {
  console.log("Array is not Empty");
}


// obj empty
const userObj = {};

if (Object.keys(userObj).length === 0) {
  console.log(" object is Empty");
} else {
  console.log("object is not Empty");
}


