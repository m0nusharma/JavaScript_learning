// object literals

const mySym = Symbol("keyOne");

// object has a there keys and values so the keys are stings but we write keys without " " object is automatically  its a string. and in value you can write any datatype .
const jsUser = {
  Name: "Monu Sharma",
  age: 23,
  email: "Monu@gmail.com",
  "My mail": "MonuSharma@gmail.com",
  location: "Chandigarh",
  [mySym]: "This is a secret key",
  lastLogInDays: ["monday", "saturday"],
};
console.log(jsUser.age); // this is a how we access the value of key.
console.log(jsUser["My mail"]); // no chance to access "My mail"  by dot so we use this to access these type of value
console.log(jsUser[mySym]);

jsUser.email = "monu@GDCS.com";
console.log(jsUser);
Object.freeze(jsUser); // the object js User is  freeze bye the help of object.freeze

// object destructor

const course = {
  name: "javascript",
  courseInstructor: "Chai Or Code",
  InstructingMethod: "Youtube",
};
// console.log(course);
course.courseInstructor = "Hitesh" 
const {courseInstructor: Teacher} = course // this is how we destruct  a object in js. we can change the object variable
console.log(Teacher);

console.log(course);

// Json
// this curly braces are a json  this is store a multiple data . that is  could API. thi is same as object but we write here key as in "keys" and " value" in dabble cots
{
    // we cannot white this in json
    // name: "javascript",
    // courseInstructor: "Chai Or Code",
    // InstructingMethod: "Youtube",

    // we have to write like this in dabble cots
    // "name": "javascript",
    // "courseInstructor": "Chai Or Code",
    // "InstructingMethod": "Youtube"
}

// This is array type json

[
    {},
    {},
    {}
]

// json formatter