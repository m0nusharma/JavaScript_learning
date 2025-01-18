// ...............for of loop................ array specific loop

// in array
const arr = [1,2,3,4,5]
for (const myArr of arr) {
    // console.log(`the array is:${myArr}`);
    
}

// in string
 const str = "Hello World!"
 console.log( str.length);

for (const greet of str) {
    // console.log(`each char is ${greet}`);
}

//................map in forof....
// map is like a object but we cannot store 2 same key and value in a same map.

const map = new Map()
map.set ('IN', 'India')
map.set('UK', ' United Kingdom')
map.set('Fr', 'France')
map.set ('IN', 'India') // it cannot run.. because map cannot take same key and value in same map.

 console.log(map);  // it run code we have seen here it execute like object...

// apply this forof loop

for (const key of map) { // in this object execute as an array.
     console.log(key);
    
}

for (const [key, value] of map) { // this is a real syntax to apply.
     console.log(key, " :-" , value);

}

//.....object in forof...
const obj = {
    'game1': "NFS",
    'game2': "PUBG"
}
// for (const myGames of obj) {
//     // console.log(myGames);
    
// } //TypeError: obj is not iterable
