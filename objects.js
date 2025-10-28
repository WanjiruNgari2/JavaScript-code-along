// JS Objects store key value pairs. Their purpose is 
//  to store state(properties) and behavior(functions / methods)
//  methods are functions within an obj
// const doggie = {
//     name: 'Max',
//     breed: 'Shepherd',
//     age: 4,
//     weightInPounds: 14,
//     eat: function () {
//         console.log('Chomp!');
        
//     },
//     bark() {
//         console.log('woof!');
        
//     }
// } 
// encapsulation involves grouping together data and the methods
    // that manipulate the data into a single unit while hding or abstracting
    //  away the internal details from external interference or misuse


    // const anotherDoggie = {
//     name: 'Marley',
//     breed: 'African',
//     age: 7,
//     weightInPounds: 34,
//     eat: function () {
//         console.log('Chomp!');
        
//     },
//     bark() {
//         console.log('woof!');
        
//     }
// } 

// function getDog(name, age, breed, weightInPounds) {
//     return {
//         name: name,
//         breed: breed,
//         age: age,
//         weightInPounds: weightInPounds,
//         eat () {
//             console.log('Chomp!');
            
//         }, 
//         bark() {
//             console.log('Woof!');
            
//         }
//     }

// }

// const anotherDoggie = getDog('Marley', 7, 'African', 34);
// console.log(anotherDoggie);

// Factory functions allow us to create a new obj. getDog is a factory function
    // bcs you can create its properties to create other obj instances. 
    // its written in camelCase and its parameters will be the object's properties.

// For Constructor functions(commonly used), we first declare the initial state of an obj. 
// here we use PascalNotation instead of camelCase for variables and function names.
// we use the keyword 'this', which references the obj thats calling the specific code. ie this current object
//  function Dog(name, age, breed, weightInPounds) {
//     // this = {} which is done internally
//     // add properties to this obj literal
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.weightInPounds = weightInPounds;
//     this.eat = function () {
//         console.log('Chomp!');
//     }
//     this.bark = function () {
//         console.log('Woof!');
//     }
//     // return this
//  }

// const doggieTwo = new Dog('Masson', 12, 'Chiwawa', 77);
// console.log(doggieTwo);

// STRING METHODS: Js has 2 kinds of strings ie  str datatypes and str objects
//    const name = 'Maria Jose'; 
// //    console.log(typeof name); //string

//    const anotherName = new String("John Doe") //used to manipulate a str so it bcomes an obj
// //    console.log(typeof anotherName); //object
   
// let sentence = 'A new sentence.';
// const doesIncludeNew = sentence.includes('new'); //includes method checks that sth is in a str
// // console.log(doesIncludeNew); //true
// // console.log(sentence[3]); //e will output the 3rd character in the sentence
// const startsWithA = sentence.startsWith('A');
// // console.log(startsWithA);//true bcs it does start with 'A' in uppercase

// const endsWithA = sentence.endsWith('A');
// // console.log(endsWithA);//false bcs it does not end  with letter 'A' 

// let editedSentence = sentence.replace('new', 'horrible');
// // console.log(editedSentence);//A horrible sentence.
// // console.log(sentence);//A new sentence. so replace doesnt change the original

// let trimmedSentence = sentence.trim();
// console.log(trimmedSentence);//A new sentence. with no spaces

// const wordsInSentence = sentence.split(' ');
// console.log(wordsInSentence);//[ 'A', 'new', 'sentence.' ] 
// // splits individual words according to space in original text

// let email = 'kdjnjcTndTnnAAnd@gmail.com';
// let submitEmail = email.toLowerCase();
// let capitalEmail = email.toUpperCase();
// console.log(submitEmail);//kdjnjctndtnnaand@gmail.com all in small letters
// console.log(capitalEmail);//KDJNJCTNDTNNAAND@GMAIL.COM all capital

// TEMPLATE LITERALS refer to using backticks to concatenate strings eg
        // let firstName = 'Allan';
        // let lastName = 'Acolade';

        //let fullName = firstName + ' ' + lastName;
        //console.log(fullName); //    OR 
        // let fullName = `${firstName} ${lastName}`;
        // console.log(fullName);

// DATE OBJ check developermozilla.org documentation:
        // PS D:\PYTHON-MINI-PROJECTS\YTSERIES\JSFREECODECAMP> node
        // > now.Date();
        // Uncaught ReferenceError: now is not defined
        // > let now = new Date();// undefined
        // > now // 2025-09-29T20:35:53.330Z
        // > Dec31_1979; // Uncaught ReferenceError: Dec31_1979 is not defined
        // > let Dec31_1979 = new Date(-24 * 3600 * 1000); // undefined
        // > Dec31_1979; // 1969-12-31T00:00:00.000Z
        // > now = new Date(); // 2025-09-29T20:38:43.648Z
        // > now.getMonth(); // 8
        // > now.getFullYear(); // 2025
        // > now.getTimezoneOffset(); // -180
