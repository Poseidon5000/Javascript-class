// Calling out tags from HTML
let btnOpenModal = document.querySelectorAll('.show-modal')

let modalCloser = document.querySelector('.close-modal');

let modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

let body = document.querySelector("body")

//Adding Event listeners

for(i=0; i <= btnOpenModal.length-1; i++){
    
    btnOpenModal[i].addEventListener("click", function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        body.style.background = "red"
    })
}


modalCloser.addEventListener("click", function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
     body.style.background = "green"

});

overlay.addEventListener("click", function(){
       modal.classList.add("hidden");
    overlay.classList.add("hidden"); 
     body.style.background = "black"
})

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
       modal.classList.add("hidden");
    overlay.classList.add("hidden"); 
     body.style.background = "purple"
}   
    
    else{
      console.log("this is not the escape key")
    }
})










//  let buttons = document.querySelectorAll(".show-modal");
//  let hiddenBox = document.querySelector(".modal");
//  let blurBackground  = document.querySelector(".overlay");
// let body = document.querySelector("body")
// let close = document.querySelector(".close-modal")


// // buttons.addEventListener("click", function(){
// //   console.log("hello universe");  
// // })
// // console.log("hello world");

// for(i=0; i <= buttons.length-1; i++){
    
//     buttons[i].addEventListener("click", function(){
//         // modal.classList.remove("hidden");
//         // overlay.classList.remove("hidden");
//         // body.style.background = "red"

//         hiddenBox.classList.remove("hidden");
//         blurBackground.classList.remove("hidden")
//         body.style.background = "white"
//     })
// }

// close.addEventListener("click", function(){
//         hiddenBox.classList.add("hidden");
//         blurBackground.classList.add("hidden")
//          body.style.background = "linear-gradient(to top left, #300e6e, #2c7b8f)"
// })
























