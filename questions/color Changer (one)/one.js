
const button = document.querySelectorAll(".button");
const body = document.querySelector("body")

button.forEach( function(button){
  button.addEventListener("click" ,function(color){
  //  if(color.target.id === "grey"){
  //    body.style.backgroundColor = color.target.id
  //  }
  //  if(color.target.id === "white"){
  //    body.style.backgroundColor = color.target.id
  //  }
  //  if(color.target.id === "blue"){
  //    body.style.backgroundColor = color.target.id
  //  }
  //  if(color.target.id === "yellow"){
  //    body.style.backgroundColor = color.target.id
  //  }

  switch(color.target.id){
    case "grey":
    body.style.backgroundColor = color.target.id;
    break
    case "white":
    body.style.backgroundColor = color.target.id;
    break
    case "blue":
    body.style.backgroundColor = color.target.id;
    break
    case "yellow":
    body.style.backgroundColor = color.target.id;
    break
  }
  
  })

})