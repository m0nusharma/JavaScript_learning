
// getElementById

// getElementByClassName    
const head = document.getElementById("head")
const headi = document.getElementById("head").id // it give a value of id
document.getElementById("head").className // it give a value of id
document.getElementById("head").getAttribute("id") //we can asses the element by getAttribute
document.getElementById("head").setAttribute("class", "h1-head heading" ) // it set attribute 

// these print content of value

head.innerText // In innertext we can see the visible content
head.textContent  // In textContent we can see the whole content in the tag
head.innerHTML // In innerHtml we can see the tag that we  use in html that is also visible.

const one = document.querySelector("h2") // it select a 1st element.
one.style.innerText="seven"

const liList = document.querySelectorAll(".U-list") // it select all the elements
// querySelectorAll gives a node list it is like a array but not exetly aaray it is in this we have to mention a index number that we want ot manipulate
const myLilist = document.querySelectorAll("li")
myLilist[1].style.color = "blue";
myLilist.style.innerText = "seven";
myLilist[1].style.backgroundColor = "red"

// const mylist = document.querySelectorAll("li")

// mylist.forEach( function(list){
//     list.style.color = "red"; 
//     list.style.backgroundColor = "blue";
//     list.style.padding = "5px"
//     list.style.textDecoration ="none"
// } )

const h1 = document.getElementsByClassName("heading")