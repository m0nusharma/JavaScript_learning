//.............forin..........

// in object
const myObj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  py: "python",
};

for (const key in myObj) {
  console.log(`${key} is shortcut of ${myObj[key]}`); // this is how we get value of object in forIn loop.
}

// in array
const languages = ["js", "py", "java", "ruby", "html", "css", "react"];

for (const key in languages) {
 console.log(key); // is print a index value value of array..
    console.log(languages[key]); // in this we get value of array
}


// const map = new Map()
// map.set ('IN', 'India')
// map.set('UK', ' United Kingdom')
// map.set('Fr', 'France')
// map.set ('IN', 'India')

// for (const key in map) {
//   console.log(key);
// } //TypeError: map is not iterable in forin loop.