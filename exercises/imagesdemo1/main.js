'use strict'

//console.log("hello");


//get elements into id
const decorateButton = document.querySelector("#decorateButton")
console.log(decorateButton);



//functions
function decorate(){
    const paragraphs = document.querySelector("p");
    //const p = paragraphs[0];
    for (const p of paragraphs ) {
        p.style.border = "3px dashed red";
        p.style.backgroundColor="aqua";  
    }
    const images = document.querySelectorAll("img");
    for (const image of images) {
      image.className = "imgRounded"
    }
   
    // console.log();
}
// function decorate() {
//     const paragraphs = document.querySelectorAll("p");
//     for (const p of paragraphs) {
//       p.style.border = "3px dashed red";
//       p.style.backgroundColor = "green";
//     }
  
   
  
//   }





//wire up connect functions to events
decorateButton.onclick = decorate;