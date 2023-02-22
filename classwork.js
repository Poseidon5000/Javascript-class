const btn = document.querySelector(".button");
const firstBtn = document.querySelector(".first");
const secondBtn = document.querySelector(".second");

btn.addEventListener("click", function(){
    const theValue = document.querySelector("input").value;

    document.querySelector(".box").textContent = theValue;
    document.querySelector("body").style.backgroundColor = "blue";
    theValue.textContent = ""
})

firstBtn.addEventListener("click", function(){
    //  document.querySelector(".box").classList.add("remove")
    // document.querySelector("body").style.backgroundColor = "blue";
        document.querySelector(".box").textContent = " "
})
secondBtn.addEventListener("click", function(){
    //  document.querySelector(".box").classList.remove("remove") 
     const theValue = document.querySelector("input").value;

     document.querySelector(".box").textContent = theValue;
})