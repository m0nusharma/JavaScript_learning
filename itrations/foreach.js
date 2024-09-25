//............  forEach.............
// we use this in array or object to get value

const language = ["javaScript ", "java", "python", "SQL", "TypeScript", "cpp"];


// language.forEach( function name(){}) // this is a callback function we don't have a write a name of a functions in this.

// one
// language.forEach( function (items){  // we written here a parameter and call the call the parameter.
//     // console.log(items);
// })

//two
// language.forEach( (items) => {console.log(items)} ) // arrow functions

// three
// function printMe(items) {
//   console.log(items);
// }

// language.forEach(printMe);


language.forEach( (Num, items, myLang) => { console.log(Num, items, myLang)})

//  we fetch value object under array.
const myLang =[
    {
        languageName: "javascript",
        languageFileName : "js"
    },
    {
        languageName: "java",
        languageFileName : "java"
    },
    {
        languageName: "python",
        languageFileName : "py"
    },
    {
        languageName: "c++",
        languageFileName : "cpp"
    },
    {
        languageName: "Typescript",
        languageFileName : "ts"
    },

]

myLang.forEach((items) => {
console.log(items.languageName);
})

