


// let a = 2 + '2;'
// let b = 2 + 2;
// let c = '2' + 2;
// let d = '2' + '2';
// let e = 22 - '22'


// // console.log(a, b, c, d, e);

// const age = 100

// const friends = ['mitchy', 'ediomo', 'uyai', 'tony', 'tukkie'];

// const name = ['Goodnews', 'Okon', age, friends]


// console.log(name);

// console.log(
//     name[3][0]
// );



//EQUALITY OPERATORS (==, ===)

//LOGICAL OPERATORS (||, &&)

// let myFirstLang = "python";

// let myFirstFramework = "next";

// let myBackendLang = "node"

// let myBackFramework = "express"

// const myYears = 18;

// if (myFirstLang == 'python' && myBackendLang == "node" || myFirstFramework == "react") {
//     console.log("yes this is lang");
// }
// else{
//     console.log("no it isnt");
// }


//OBJECTS



// myFavCourses[1] = "stats"

// console.log(myFavCourses);


const infoOfPoseidon = {
    name: "Dara-sifon",
    surname: "Okon",
    course: "Human Anatomy",
    programmingLang: "javascript",
    years: 2,
    certifications: true
}

const infoOfNdy = {
    name: "Ndifreke",
    surname: "Effiong",
    course: "Biochemistry",
    programmingLang: "python",
    years: 1,
    certifications:false
}



// console.log(infoOfNdy.name);




//LOOPS(FOR, WHILE)


// console.log(`you have lifted 1 rep`);
// console.log(`you have lifted 2 rep`);
// console.log(`you have lifted 3 rep`);
// console.log(`you have lifted 4 rep`);
// console.log(`you have lifted 5 rep`);
// console.log(`you have lifted 6 rep`);
// console.log(`you have lifted 7 rep`);
// console.log(`you have lifted 8 rep`);
// console.log(`you have lifted 9 rep`);
// console.log(`you have lifted 10 rep`);



// let myname = "Poseidon";





// myname = "Daniel"




// myname= "Mitchel"

// console.log(`${myname} is the best tutor at the roothub`);


// for(let rep = 0; rep< 10; rep++){
// console.log(`I have lifted ${rep}`);
// };

//LOOPING THROUGH ARRAYS

// const myFavCourses = ["anatomy", "physiology", "biochem", "pharm", "stats", "histochem", ];

// console.log(myFavCourses[0]);
// console.log(myFavCourses[1]);
// console.log(myFavCourses[2]);
// console.log(myFavCourses[3]);
// console.log(myFavCourses[4]);
// console.log(myFavCourses[5]);


// myFavCourses.push("hospital practice")

// console.log(myFavCourses.length-1);

// for(i = 1; i<= myFavCourses.length-1; i++){
//     console.log(myFavCourses[i]);
// } 
// console.log(myFavCourses);

const dateOfBirth = [1976, 1996, 1960, 1945, 1999, 2005, 1987, 1951, 2000];

// const friends = ["ndy", "toro", "johnson", "jahaziel"];

// console.log(friends);
// let newFriend = "akpan"

// friends.push(newFriend);
// console.log(newFriend);

// console.log(friends);


// console.log(dateOfBirth);

// console.log(dateOfBirth[0]);
// console.log(dateOfBirth[1]);
// console.log(dateOfBirth[2]);
// console.log(dateOfBirth[3]);

// let ages = []

// let currentYear = 2023

// for (let a = 0; a < dateOfBirth.length; a++){
//    let age= currentYear- dateOfBirth[a];
//     // console.log(age);   
    
//     ages.push(age)
// } 

// console.log(ages);


//LOOPING BACKWARDS

// const salary = [50, 75, 100, 700, 350,875, 1000]

// for(i = salary.length-1; i >= 0; i--){
//     console.log(salary[i]);
// }


//WHILE LOOPS

// let rep = 1;

// while(rep<=10){
//     console.log(`you have lifted ${rep} rep`);

//     rep++
// }

// let dice = Math.trunc( Math.random()*6) + 1;

// console.log(dice);

// while(dice !== 6){
//     console.log(`you have rolled a ${dice}. TRY AGAIN!!!!!`);
//      dice = Math.trunc( Math.random()*6 + 1 );

//      if(dice == 6){
//         console.log(`YAY!!!!!, you rolled a ${dice} and have won😁😁`);
//      }
// }
// ;

// FUNCTIONS

//FUNCTION DECLARATIONS

// function logger(){
//     console.log("hello world");
// }



// function fruitJuice(toro, ndy, johnson){
//     // console.log("orange", "mango");

//     const juice = `I have used ${toro} oranges, ${johnson} apples and ${ndy} mangoes for this juice`;

//     return juice

// }


// fruitJuice(5, 2)

// console.log(fruitJuice(7, 4, 12));
// console.log(fruitJuice(10, 14,5));
// console.log(fruitJuice(1, 2, 3));

// function birthYear(age){
//     return 2023-age
// }

// console.log(birthYear(23));


//FUCTION EXPRESSION(ANONYMOUS FUNCTIONS)

// const age = 15

// const fruitJuiceProcessor = function(orange, apples, banana){
//  const juice = `I have used ${orange} oranges, ${apples} apples and ${banana} bananas for this juice`;
//      return juice
//     }
    
//     fruitJuiceProcessor(5, 2)
    
//     console.log(fruitJuiceProcessor(7, 4, 12));
//     console.log(fruitJuiceProcessor(10, 14,5));
//     console.log(fruitJuiceProcessor(1, 2, 3));

// const yearOfBirth = function(age){
//     return 2023-age
// }

// console.log(yearOfBirth(25));

//CLASSWORK

// const theCurrentYear = 2023;

// const ageCalculator = function(age){
//     const calculateAge = theCurrentYear - age

//     const yourBirthYear = `you were born in ${calculateAge}`

//     return yourBirthYear
// }


// console.log(ageCalculator(64));

//ARROW FUNCTIONS

// const youWereBorn = (age) => 2023-age;

// console.log(youWereBorn(45));


//CLASSWORK USING ARROW FUNCTIONS

// const ourCurrentYear = 2023

// const yourAgeCalculator = (age) =>{
//      const calculateAge = ourCurrentYear - age

//    const yourBirthYear = `you were born in ${calculateAge}`

//   return yourBirthYear
// }

// console.log(yourAgeCalculator(50));

//FUNCTIONS CALLING FUNCTIONS
// const cutFruits = function(fruit){
//     return fruit * 4
// }


// function fruitJuice(orange, banana){
// let orangepieces = cutFruits(orange);
// let bananapieces = cutFruits(banana)



// const juice = `I have used ${orangepieces} oranges and ${bananapieces} bananas for this juice`;
// return juice

// }


// console.log(fruitJuice(4, 2));

// const speedFormular = 1000/360;

// const speedConverter = (firstName, speed) =>{
//     const yourSpeed = speed * speedFormular;

//     const yourNewSpeed = `${firstName} is travelling at a speed of ${yourSpeed} m/s`;

//     return yourNewSpeed
// }

// console.log(speedConverter("Ndy", 100));
// console.log(speedConverter("Johnson", 70));
// console.log(speedConverter("Poseidon", 200));