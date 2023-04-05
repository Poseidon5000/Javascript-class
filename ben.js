//Introduction



// alert("hello world");

// console.log("hello universe");

// let a = 1;


//Declarators(let, const, var)
//values and variables
//Assignment operator(=)

// const a = "ben";

// console.log(a);

// let a = 5;

// let b = 2;

// a=10;   

// let c = a+b;

// console.log(c);

// const x = 10;
// const y = 12;

// // y=25;

// const z = x+y;

// console.log(z);

// var p = 4;
// var q = 3

// p=8
// var s = p+q

// console.log(s);

//Naming Variables(cannot start naming with numbers or special characters)
//Writing convention for variables(camel casing)

// const ageOfMyEmployees = 30;

// const firstName = "okon";
// const firstname = "udoh"

// console.log(firstName);
// console.log(firstname);


//Basic operators(+, -, /,*, **)

// let a = 55;
// let b = 20;
// let c = a-b;
// console.log(c);

// let a = 55;
// let b = 20;
// let c = a*b;
// console.log(c);

// let a = 55;
// let b = 20;
// let c = a/b;
// console.log(c);

// let a = 55;
// let b = 2;
// let c = a**b;
// console.log(c);


//comparism operators(<,>,<=,>=)

// let a = 5
// let b = 3

// let c = a>b
// console.log(c
//     );

// let a = 5
// let b = 3

// let c = a<b
// console.log(c
//     );


//Logical operators(||, &&)
//Conditional statements(if, else, else if);

// let a = 10;
// let b=15;
// let c= 20;
// let d =2

// if(a>b || c>a || d<a){
//     console.log("this is true");
// }
// else{
//     console.log("FALSE!!!!");
// }

// if(c>b && c>a){
//     console.log("this is true");
// }
// else{
//     console.log("FALSE!!!!");
// }


// if(a>b || b<c && d<a){
//     console.log("YES");
// }

// else{

//     console.log("NO");
// }







//*Equality operators(==, ===, !==, );
// const favProgLang = prompt("what is your favourite programming language")

// if(favProgLang === "javascript"){
//     console.log("Yay, me too");
// }

// else if(favProgLang === "python"){
//     console.log("python isnt so bad");
// }

// else if (favProgLang == "golang"){
//     console.log("understandable");
// }

// else{
//     console.log("boring");
// }

// const herAge = prompt("What is her age");

// if(herAge == String(18)){
//     console.log("Yes, correct guess");
// }
// else{
//     console.log("wrong guess");
// }

// let a = "JAVASCRIPT"

// if(a == "javascript"){
//     console.log("yippe");
// }
// else{
//     console.log("shit");
// }



//DATA TYPES(PRIMITIVE , NON PRIMITIVE----object based)
//PRIMITIVE(STRINGS, NUMBERS, BOOLEAN, SYMBOL, BIGINT, NULL, UNDEFINED)
//NON-PRIMITIVE(ARRAYS, OBJECTS)


// let firstName = "okon";
// let myAge = 18;
// let myFav;

// console.log(typeof firstName);
// console.log(typeof myAge);
// console.log(typeof myFav);
// console.log(typeof true);
// console.log(typeof null);

// console.log(myFav);

// let firstName = "Goodnews"
// let surName = "Okon"

// console.log(firstName + surName);

//TYPE CONVERSION AND COERCION

// let a = 55;
// a= String(55)


// let firstName = Number("Okon")
// console.log(typeof a);
// console.log(typeof firstName);


// let a = "2"
// let b = 2

// console.log(a+b);

// console.log(typeof a);

// let a = "4"
// let b = "1"

// console.log(a-b);

// let x = "22"
// let y = 2

// console.log(x-y);

// console.log("2"+"2"-"2");

//ARRAYS

// const myEmployeesAges = [36, 40, 45, 23, 50,[true, false, ["a","b"]], 29, 38, 65, 70, 80,["john", "peter", "caleb", "tosin", "yetunde", "iyabo"]]


// console.log(myEmployeesAges[myEmployeesAges.length-1][3]);
// console.log(myEmployeesAges[5][2][0]);




// console.log(myEmployeesAges[3]);
// console.log(myEmployeesAges[myEmployeesAges.length-1]);

//Mutating arrays:basic array methods(adding(push, unshift))
// const myFavFruits = ["apple", "oranges", "banana", "watermelon"];

// console.log(myFavFruits.length);

// myFavFruits.push("pawpaw");
// console.log(myFavFruits.length);

// console.log(myFavFruits);

// myFavFruits.unshift("pawpaw")
// console.log(myFavFruits);

//Mutating arrays:basic array methods(removing(pop, shift))

// myFavFruits.pop()

// console.log(myFavFruits);

// myFavFruits.shift()
// console.log(myFavFruits);


// myFavFruits.pop()
//SPLICE METHOD(removing elements)
// myFavFruits.splice(1,1)
// console.log(myFavFruits);

//(adding elements)
// myFavFruits.splice(2,0, "mango")
// console.log(myFavFruits);
// let name = "Poseidon"

// console.log(`${name} is the greatest`);

// myFavFruits.splice(0, 0, "strawberry")
// console.log(myFavFruits);

//Elements locators in array(includes, indexof)

// const myFavFruits = ["apple", "oranges", "banana", "watermelon"];

// // console.log(myFavFruits.includes("coconut"))
// console.log(myFavFruits.indexOf("banana"))


//OBJECT

// const benStudentData = {
//     firstName: "gabriel",
//     lastName: "imoh",
//     age: 91,
//     short:true,
// }

// console.log(benStudentData.firstName);
// console.log(benStudentData.lastName);

//LOOPS(for, while)



// for(let i = 1; i<= 20; i++){
//     // console.log(`you have lifted ${i} reps 🏋️‍♂️🏋️‍♂️`);
//     console.log(i);
// }
//template literal
//Using for loops to loop through an array


// console.log(dateOfBirth[0]);
// console.log(dateOfBirth[1]);
// console.log(dateOfBirth[2]);

// const dateOfBirth = [1978, 1990, 1992, 1988, 2001, 1993, 1985, 2003, 1973, 1994, 2003, 2005, 1983, 1960]

// for(i = 0; i<dateOfBirth.length; i++){
//     console.log(dateOfBirth[i]);
// }

//looping backwards
// for(i=dateOfBirth.length-1; i>=0; i--){
//     console.log(dateOfBirth[i]);
// }



//while loop

// for(let i = 1; i<= 20; i++){
//     // console.log(`you have lifted ${i} reps 🏋️‍♂️🏋️‍♂️`);
//     console.log(i);
// }

// let rep = 1;

// while(rep<=10){
//  console.log(`you have lifted ${rep} reps 🏋️‍♂️🏋️‍♂️`);
 
//  rep++
// }

// let dice = Math.floor(Math.random() *6) +1

// while(dice !== 6 && dice !== 3){
//     console.log(`you rolled a ${dice} so you lose`);
//     dice = Math.floor(Math.random() *6) +1

//     if(dice == 6){
//         console.log(`yes you rolled a ${dice} and have won`);
//     }
//     if(dice == 3){
//         console.log(`yes you rolled a ${dice} and have won`);
//     }

// }

//FUNCTIONS

//Function declaraction

// function logger(){
//     console.log("Hello world");
//     console.log(8-3);
    
// } 

// logger()

// function juiceMaker(orange, apple){
//      console.log(orange, apple);
//     // const juice = `I made this juice using ${orange} oranges and ${apple} apples`
//     // return juice;
// }

// juiceMaker(5, 2)
// console.log(juice);
// console.log(juiceMaker(10, 12));


function agecalculator(currentYear, dateOfBirth){
    const yourAge = `You are ${currentYear - dateOfBirth} years old`
    return yourAge
}

// console.log(
//     agecalculator(2023, 2000)
// );

//function expression
// function juiceMaker(orange, apple){
//      console.log(orange, apple);
//     // const juice = `I made this juice using ${orange} oranges and ${apple} apples`
//     // return juice;
// }

// logger()
// const logger = function(){
//     console.log("hello world");
// }


// function logger(){
//     console.log("Hello world");
    
// } 

// const juiceProcessor = function(orange, apple){
//     const juice = `I made this juice using ${orange} oranges and ${apple} apples`
//      return juice; 
// }

// console.log(juiceProcessor(3, 9));

