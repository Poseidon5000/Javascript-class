//classwork
// const btn = document.querySelector(".button");
// const firstBtn = document.querySelector(".first");
// const secondBtn = document.querySelector(".second");
// const hero = document.querySelector(".hero");

// const renderText =() =>{
//  const theValue = document.querySelector("input").value;

//     document.querySelector(".box").textContent = theValue;
//     document.querySelector("body").style.backgroundColor = "blue";
//     theValue.textContent = ""
// }

// btn.addEventListener("click", renderText)



// firstBtn.addEventListener("click", function(){
//     //  document.querySelector(".box").classList.add("remove")
//     // document.querySelector("body").style.backgroundColor = "blue";
//         document.querySelector(".box").textContent = " "
// })

// secondBtn.addEventListener("click", function(){
//     //  document.querySelector(".box").classList.remove("remove") 
//      const theValue = document.querySelector("input").value;

//      document.querySelector(".box").textContent = theValue;
// });

// Creating Elements(prepend, append, after, before)

// const message = document.createElement("div");
// message.classList.add("third");
// message.innerHTML= "Hello World,<button class ='bon'>Delete Message</button>."

// hero.prepend(message);
// // Cloning elements

// hero.append(message.cloneNode(true))


// // deleting elements
// document.querySelector(".bon").addEventListener("click", function(){
// console.log("hello");

// message.remove()
// })

// //removig event listeners
// const doThis = function(){
//     alert("Hello world")

//     // btn.removeEventListener("mouseenter", doThis)
// }

//  btn.addEventListener("mouseenter",doThis );
// //timed functions

//  setTimeout(()=>  btn.removeEventListener("mouseenter", doThis), 3000)




// console.log("hello");

const amount = [200, 300, 150, 350, 500, 250, 500, 550];

// for(let i=0; i<amount.length; i++){
//     console.log(amount[i]);
// }


//for-of 
// for(const a of amount){
//     console.log(a);
// }


//reduce

// const totalAmount = amount.reduce((arr, curr)=>{
//     console.log(arr);
// return arr + curr

// }, 0);

// console.log(totalAmount);

// let text = document.querySelector('.text').textContent;
// alert("Hello world");
// console.log("text set");


let text = document.querySelector('.text').textContent;
setTimeout(()=>{
    alert("hello world")
}, 3000)
console.log("text set");

