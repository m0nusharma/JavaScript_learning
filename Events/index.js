// console.log('hello')
// use events

//   document.querySelector('#d').addEventListener("click", function(e){
//     // alert("you did it")
//     console.log(e); // event has a object. pointerEvent{}

//   },false) // event propagation this is two type event Bubbling or event chaptering.
//   // default is event bubbling that is "false"

//  document.querySelector(".list").addEventListener("click", function () {
//      console.log("you clicked UL");
//      // in this when i click any of image then this func will return only.-
//    });

//    document.querySelector("#d").addEventListener("click", function (e) {
//      console.log(`You clicked D`);
//     //  e.stopPropagation()
//      // in this when  when a  click d picture then pic d will return first and other this is could bubbling
//    }, false);

//    document.querySelector('#link').addEventListener( "click" , function(e){
//         e.preventDefault()
//         e.stopPropagation()
//         console.log(e);
//    } ) // in this i use preventDefault() to stop the work of the link.

// i am doing when i click a image than that image will get remove.

document.querySelector(".list").addEventListener("click", function (e) {
  // target will show what are you clinking
  
  console.log(e.target.tagName);
  if (e.target.tagName ==='IMG') {
    let removeID = e.target.parentNode;
  removeID.remove();
  }
  // let removeID = e.target.parentNode;
  // removeID.remove();
});// this func is when i click any on images then that image will remove.


// removeID.parentNode.removeChlid(removeID)
