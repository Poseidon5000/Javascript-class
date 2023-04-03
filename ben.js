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

// myFavFruits.splice(0, 0, "strawberry")
// console.log(myFavFruits);

//Elements locators in array(includes, indexof)

// const myFavFruits = ["apple", "oranges", "banana", "watermelon"];

// // console.log(myFavFruits.includes("coconut"))
// console.log(myFavFruits.indexOf("banana"))


//OBJECT

const benStudentData = {
    firstName: "gabriel",
    lastName: "imoh",
    age: 91,
    short:true,
}

// console.log(benStudentData.firstName);
console.log(benStudentData.lastName);
