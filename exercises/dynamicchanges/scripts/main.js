'use strict'
//data
//declared variables imageFiles and assigned an array[]
//which contains objects representing an image file
let imageFiles = [
    { id :"1", path: "https://placehold.co/300x300", description: "placeholder 1" },
    { id :"2", path: "https://placehold.co/300x300", description: "placeholder 2" },
    { id :"3", path: "https://placehold.co/300x300", description: "placeholder 3" },
    { id :"4", path: "https://placehold.co/300x300", description: "placeholder 4" },
    { id :"5", path: "https://placehold.co/300x300", description: "placeholder 5" },
    { id :"6", path: "https://placehold.co/300x300", description: "placeholder 6" },
    { id :"7", path: "https://placehold.co/300x300", description: "placeholder 7" },
    { id :"8", path: "https://placehold.co/300x300", description: "placeholder 8" },
    { id :"9", path: "https://placehold.co/300x300", description: "placeholder 9" },
    { id :"10", path: "https://placehold.co/300x300", description: "placeholder 10" },
    { id :"11", path: "https://placehold.co/300x300", description: "placeholder 11" },
    { id :"12", path: "https://placehold.co/300x300", description: "placeholder 12" },
  ];
//get elements
//variable gets declared and assigned an html element select list
    const imageList = document.querySelector("#imageList");
//
    const addImageButton = document.querySelector("#addImageButton");
    const clearImagesButton = document.querySelector("#clearImagesButton");
    const imagesDiv = document.querySelector("#imagesDiv");



    console.log(imageList, addImageButton, clearImagesButton, imagesDiv);
//creating a function named laodimagelist
function loadImageList() {
//creating a for of loop, creating a variable imageFile to get each item(object) in the array
    for (const imageFile of imageFiles) {
       let option = document.createElement("option");
       option.value=imageFile.id;
       option.innerText=imageFile.description;
       imageList.appendChild(option)
    }
}


function addImage() {
    const id = imageList.value;
    for (const imageFile of imageFiles) {
    if(imageFile.id==id){
        //add image to div
        let image = document.createElement("img")
        //set an src attribute on the image for imageFile's path
        image.src = imageFile.path
        //set alt attribute on the image to the imageFile's description
        image.alt = imageFile.description
        //add image to div
        imagesDiv.appendChild(image) 
    }        
    }
    
}

addImageButton.onclick = addImage;
loadImageList();

