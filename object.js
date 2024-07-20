
// object literals

const mySym = Symbol("keyOne")

const  jsUser = {
    Name: "Monu Sharma",
    age : 23,
    email: "Monu@gmail.com",
    location : "Chandigarh", 
    [mySym] : "This is a secret key"
}

console.log(jsUser[mySym])

jsUser.email = "monu@GDCS.com"
console.log(jsUser);
Object.freeze(jsUser) // the object js User is  freeze bye the help of object.freeze 