


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

let ages = []

let currentYear = 2023

for (let a = 0; a < dateOfBirth.length; a++){
   let age= currentYear- dateOfBirth[a];
    // console.log(age);   
    
    ages.push(age)
} 

console.log(ages);