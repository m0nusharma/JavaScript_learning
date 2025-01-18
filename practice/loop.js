const SuperHeros = [ "superman" , "spiderman" , "ironman", "flash"]

for ( let i = 0; i < SuperHeros.length; i++){
    const element = SuperHeros[i];
    // console.log(element)
}

for(let i = 0; i<10; i++){
    const element = (i)
    // console.log(element)
}


for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let i =1;
 while (i<=10){
    // console.log(`Table is ${i}`)
    i++
    let j= 1;
    while ( j<=10){
        // console.log(`${i} * ${j} = ${i*j}`);
        j++
    }
 }


 const map = new Map()
 map.set("IN" , "INDIA")
 map.set("PK" , "PAKISTAN")
 map.set ("FA", "FRANCE")

//  console.log(map)


 for (const [key , value] of map) {
  //   console.log(`${key} :- ${value}`)
 }


 for (const [key , value] of map) {
    if (value == "PAKISTAN" ) {
      //  console.log("Pakistan found ");
        break
    }
    // console.log(`${key} :- ${value}`)
 }


 const myObj = {
    name : "monu",
    age : 23,
    work : "software Developer", 
    dob : "10 Feb"
 }

 for (const key in myObj) {
   // console.log(`${key} :- ${myObj[key]}`);
 }


 const myArr = ["js", "java", "py" , "cpp"]

myArr.forEach( (key)=>{
    console.log(key);
    
} )



