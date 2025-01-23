// object  literals :- it means literally object.

const user = {
    // this is property of obj
    username: "monu sharma",
    loggedIn : 4,
    signIn: true,

    // this is method 
    getUserDetails: function(){
        console.log(`got user details`);
        //console.log(`username is :${username} `); // in this is show error username not defined. because it don't know what username u are calling.
        console.log(`username is ${this.username} `); // so thats why when we write a this then it will know that context you are  toking about.
        
    }

}

console.log(user.getUserDetails());




