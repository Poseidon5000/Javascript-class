'use strict';
document.querySelector(".message").textContent = "start guessing";
document.querySelector(".number").textContent= "50";
document.querySelector(".score").textContent = "06";
document.querySelector(".guess").value = "30";

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value); 
    document.querySelector(".message").textContent = "you got it right";
    console.log( typeof guess  )

})