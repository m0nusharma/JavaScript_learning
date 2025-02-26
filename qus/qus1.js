// revere words

let reverseWords = "words";
const chnaged = reverseWords.split("").reverse("").join("");
// console.log(chnaged);

let funcWords = "hello java script im going to master you";

const abc = funcWords.split(" ").map( (e) => e.split("").reverse().join("") )
console.log(abc.join(" "));


// reverse in func

