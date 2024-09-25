// immediate invoked function expressions (IIFE)

// ()()

// for remove global pollution in function we use IIFE.

(  function newFun(){
    // named IIFE
    console.log("chai or code");
  }) (); // see semicolan when you are write two IIFE together 

  ((name)=>{
    // normal IIFE
    console.log(`hello code ${name}`);
    
  })('javascript')

