'use strict';
// document.querySelector(".message").textContent = "start guessing";
// document.querySelector(".number").textContent= "50";
// document.querySelector(".score").textContent = "06";
// document.querySelector(".guess").value = "30";

// document.querySelector(".check").addEventListener("click", function(){
//     const guess = Number(document.querySelector(".guess").value); 
//     document.querySelector(".message").textContent = "you got it right";
//     console.log( typeof guess  )

// })
let check = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random() * 20) + 1; 
// document.querySelector(".number").textContent = secretNumber


check.addEventListener("click", function(){
    let guess = document.querySelector(".guess").value;

    if(!guess){
        document.querySelector(".message").textContent = "⛔️ No number ";
    }

    else if(guess == secretNumber){
        document.querySelector(".message").textContent = "🎉 Correct answer";
        document.querySelector(".message").textContent;
        document.querySelector(".number").textContent = secretNumber
        document.querySelector(body).style.backgroundColor = "blue"

    }

    else if(guess>secretNumber){
        document.querySelector(".message").textContent = " 📈 Too High "
    }

    else if(guess<secretNumber){
        document.querySelector(".message").textContent = "📉 Too Low"
    }
})