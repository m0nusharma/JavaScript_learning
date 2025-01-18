const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newArr.forEach((items) => console.log(items));

// const myArr = newArr.map( (items) =>  items * 50 + 2)
// .filter( (items) => items > 300  )
// .map( (items)=>(items + 10 * 2 ) )

// console.log(myArr);

// const arr = [1,2,3,4]
const i = 0
const reduce = newArr.reduce( function(acc, curVal) {
//   console.log(`acc is ${acc} and currVal is ${curVal}`);

//   return acc + curVal ;
}, i);

// console.log(reduce);


const course = [
    {
        itemsName : "javascript",
        prize : 2000
    },
    {
        itemsName : "Python",
        prize : 999
    },
    {
        itemsName : "data Science",
        prize : 9000
    },
    {
        itemsName : "mobile Applications",
        prize : 12000
    }
]

// console.log(course.prize);


const items = course.map( (items ) => ( items.itemsName));
// console.log(items);


const value =  course.filter ( (val) => val.itemsName === "Python" )
// console.log(value.prize);

const reduces =  course.reduce( (acc , currVal) => acc + currVal.prize, 0   )
console.log(reduces);
