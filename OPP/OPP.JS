// object  literals :- it means literally object.

const user = {
    // this is property of obj
    username: "monu sharma",
    loggedIn : 4,
    signIn: true,

    // this is method 
    getUserDetails: function(){
        //console.log(`got user details`);
        //console.log(`username is :${username} `); // in this is show error username not defined. because it don't know what username u are calling.
        //console.log(`username is ${this.username} `); // so thats why when we write a this then it will know that context you are  toking about.
        
    }
}
// if we need more like this so we have to make copy and change its property.
// so to avoid that we have contructor function
// console.log(user.getUserDetails());


// constructor function har bar a aapko ek new instance (copy) deta hai. bina ched chad kiya original wale se.
function User(username, loggedInCount, signIn){
        this.username = username
        this.loggedInCount = loggedInCount
        this.signIn = signIn
        //return this
}
console.log(typeof User) // the User is function here.

//const userOne = User("Monu sharma", 4, true)//userOne is coming from User.
//const usertwo = User("sonu sharma", 5, false)//userTwo is  also coming from User. if we write this without new keyword then it will overwrite the another variable
const userOne =  new User("Monu sharma", 4, true)//so we have to use constructor function by new keyword
const usertwo = new  User("sonu sharma", 5, false)// then ut will be a different object or variable.

console.log(typeof userOne); // and when we store User in a variable then it become a object.

console.log(userOne); 
// new keyword 
// 1, when we user new keyword then new empty object call
// 2 constructor function call because if new keyword. ye sare arguments ko pack kar ke de deta hai.
// 3 this key word inject in this function.
// 4 all return.
