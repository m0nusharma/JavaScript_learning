// forEach cannot return any value lets se a example
const programming = [
  "javaScript ",
  "java",
  "python",
  "SQL",
  "TypeScript",
  "cpp",
];
const returnProgram = programming.forEach((item) => {
  // forEach cannot return any value.
  // console.log(item);
  //return item; // undefined
});

// console.log(returnProgram); //undefined

//......... filter.........
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];
// const filteredNum = myNum.filter((num) => num > 5);  // this is arrow function without scope.
const filteredNum = myNum.filter((num) => { // in filter we can write a condition 
  // if we write this in a scope then we have to write a return.
  // return num > 5;
});
// console.log(filteredNum);


// same value in forEach ....

// const myVal = myNum.forEach( (numbers)=> {
//   if (numbers > 5) {
//     // myVal.push(numbers)
//     // console.log(myVal);
//   }
// } )

const books = [
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      edition: "1st",
      writer: "Harper Lee",
      publishYear: 1960
    },
    {
      title: "1984",
      genre: "Dystopian",
      edition: "1st",
      writer: "George Orwell",
      publishYear: 1949
    },
    {
      title: "The Great Gatsby",
      genre: "Classic",
      edition: "1st",
      writer: "F. Scott Fitzgerald",
      publishYear: 1925
    },
    {
      title: "The Catcher in the Rye",
      genre: "Literary Fiction",
      edition: "1st",
      writer: "J.D. Salinger",
      publishYear: 1951
    },
    {
      title: "Moby-Dick",
      genre: "Adventure",
      edition: "1st",
      writer: "Herman Melville",
      publishYear: 1851
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      edition: "1st",
      writer: "Jane Austen",
      publishYear: 1813
    },
    {
      title: "Brave New World",
      genre: "Science Fiction",
      edition: "1st",
      writer: "Aldous Huxley",
      publishYear: 1932
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      edition: "1st",
      writer: "J.R.R. Tolkien",
      publishYear: 1954
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      edition: "1st",
      writer: "J.R.R. Tolkien",
      publishYear: 1937
    },
    {
      title: "The Diary of a Young Girl",
      genre: "Non-fiction",
      edition: "1st",
      writer: "Anne Frank",
      publishYear: 1947
    }
  ];
  
// let myBooks = books.filter( (items) => items.genre === "Fiction" )
let myBooks  = books.filter( (items) => items.publishYear >= 1950 )

console.log(myBooks);
