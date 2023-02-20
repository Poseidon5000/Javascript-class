
let btnOpenModal = document.querySelectorAll('.show-modal')

let modalCloser = document.querySelector('.close-modal');

let modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

let body = document.querySelector("body")



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