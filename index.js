// "33" => string change in number
// "33abc" => it change in NaN
// Boolean => change in 1 or 0,
// undifined => NaN.

let marks = "33"
// console.log(typeof marks)

let inNumber = Number(marks);
// console.log(typeof inNumber)

// bool
// 1 => true, 0 => false, 
// "" => false , emty sting is false
// ' m=abc' => is true,


let isLoggedIn = "hvv"
let boolInNumber = Boolean(isLoggedIn)
// console.log(boolInNumber)
// console.log(typeof boolInNumber)



let someNum = 10
let inString = String(someNum)
console.log(inString)
console.log(typeof inString)
