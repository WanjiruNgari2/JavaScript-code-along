// In JS, objects are dynamic, so we can add/remove their methods or properties after they are already instantiated.
        // const person = {
        //     name: 'Magda'
        // };
        // // console.log(person);
        // person.favouritefood = 'pizza';
        // // console.log(person);
        // person['iceCream'] = 'vanilla';
        // // console.log(person);
        // delete person.favouritefood;
        // // console.log(person);
        // person.eat = function() {
        //     console.log('eating fishes!');
        // }
        // person.eat();
        // console.log(person);



        // every obj has a construcor property that initializes and creates it.
        // let newObj = {}; // also let newobj = new Object();
        // console.log( newObj.constructor );

        // function add(num1, num2) {
        //     return num1 + num2;
        // }
        // const n = add;
        // console.log( n(33, 1)); //34
        // console.log( add.length ); //2

        // function developerName (name) {
        //     this.name = name;
        //     this.writesCode = function () {
        //         console.log('Codes in Python!');
                
        //     }
        // }
        // // console.log( developerName.length ); // 1
        // // console.log( developerName.constructor ); // [Function: Function]

        // const Developer = new Function('name', `
        //     this.name = name;
        //     this.writesCode = function() {
        //         console.log('Codes in Python!');
        //     }

        // `);
        // const newDeveloper = new Developer('Maribel');
        // newDeveloper.writesCode(); //Codes in Python!
        // console.log(newDeveloper);//anonymous { name: 'Maribel', writesCode: [Function (anonymous)] }

        // let a = 190;
        // let b = a;

        // a = 'goats';
        // console.log(a); //goats
        // console.log(b); //190
 // primitive values(simple ie, boolean,num, str...) are passed by copy and not by reference
        // let x = { value: 20 };
        // let y = x;

        // x.value = 100;
        // console.log(x);//100 bcs both point to a property called 'value', so same memory address
        // console.log(y);//100
 // objects(ie arrays, keyvalue pairs etc) are passed by reference 

        // let numbers = [0,1,2,3,4];
        // for (const i of numbers) {
        //     console.log(i);
        // }
// const dog = {
//     name: 'Alice',
//     age: 7,
//     eyeColor: 'blue'
//  };
        // const keys = Object.keys(dog); 
        // // console.log(keys);//[ 'name', 'age', 'eyeColor' ]keys in an array

        // const values = Object.values(dog);
        // // console.log(values);//[ 'Alice', 7, 'blue' ] values in an array

        // const entries = Object.entries(dog);
        // // console.log(entries);// all entries: [ [ 'name', 'Alice' ], [ 'age', 7 ], [ 'eyeColor', 'blue' ] ]

        // for (const key of Object.keys(dog) ){
        //     console.log(key) //outputs [ 'name', 'age', 'eyeColor' ] 

        // }
        // for (const entry of Object.entries(dog)) {
        //     console.log(entry); //outputs all key value pairs in obj dog. 
            
        // }
// CLONING OBJECTS: is done so you have a copy of one obj 
//  in another, with diff memory addresses. This helps avoid 
//  making changes in both copies. eg
        // let a = { value: 100 };
        // let b = {};//assign b to an obj litearl ie empty obj

        // Object.assign = (b, a)// b is the obj I wanna copy to and a is the obj am copying{matsercopy)
        // // b will have the clone of the obj referenced by a.
        // b.value = 29; //will change b only

        // //SPREAD OPERATOR is used instead of Object.assign = (b, a)
        // let a = {value : 34};
        // let b =  { ...a };//means create a copy of a and assign it to b

        // b.value = 2; //changes b only


// GARBAGE COLLECTION ,means allocating and deallocating memory which is done internally .
    // devs dont free up space in js


// BUILT IN MATH FUNCTIONS mostly uses the method "Math" for mathematical consts and funcs
//  PS D:\PYTHON-MINI-PROJECTS\YTSERIES\JSFREECODECAMP> node
        // > Math.round(3.147)// 3 rounds up
        // > Math.round(3.7) // 4 rounds up
        // > Math.floor(4.9) // 4 returns only the floor num
        // > Math.ceil(4.7) // 5 rounds up
        // > Math.max(13, 74, 890) // 890 is the maximum number in the list
        // > Math.min(3, 7, 9) // 3 is the minimum number in the list
        // > Math.pow(2, 3) // 8 means 2 raised to power 3
        // > Math.sqrt(49) // 7 means sqroot of 49
        // > Math.random()// 0.5325238712351228 returns any no btwn 0 and 1
        // let min = 1;
        // let max = 10;
        // const randumNum = Math.round(Math.random() * (max - min) + min);
        // console.log(randumNum); //will return a number btwn 1 and 10, and round it off eg 7,2, 8 etc

