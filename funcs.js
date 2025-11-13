//EXPRESSIONS VS FUNCTION DECLARATIONS
//1.FUNCTION DECLARATIONS have a function keyword, its name and params
//and implementations in the curly braces 
    function sayHi() {
        console.log('Hi');
    }
    sayHi();//Hi

//2.Function EXPRESSIONS are a anonymous or named func
//  assigned to a var bcs funcs are objs
    let sayHey = function() {
       console.log('Hi'); 
    }
    sayHey()//Hi
                        //  OR
    let grreting = function sayHi() {
        console.log('Hi');
    }
    grreting()//Hi

//HOISTING is when func declarations are moved to the top of their scope during compilation.
// This helps call the func anywhere even before of after its declaration. this isnt possible with function expressions
ads(23, 44);
    function ads(num1, num2) {
        console.log(num1 + num2)}; //67

    let ads = function ads(num1, num2) {
        console.log(num1 + num2);
     } //ReferenceError: Cannot access 'ads' before initialization

//FUNCTION ARGUMENTS:
    function multiply(numa, numb) {
        return numa * numb
    }
    console.log( multiply(2) ) //NaN bcs you must give 2 args to match the 2 params
    console.log( multiply(2, 11) ) //22
    console.log( multiply(2, 11, 32)) //22 even with more args

    function multiply(numa, numb) {
        // console.log(arguments)//[Arguments] { '0': 2, '1': 11, '2': 32 }
        // return numa * numb;
        let product = 1;
        for(const num of arguments)
            product += num;
        return product;
    }
    console.log( multiply(2, 11, 32, 20)) //66



// THE REST OPERATOR is like the spread operator but it allows
//  for many args into a single arr param. a func can accept many args
    let course = {
        name: 'Java for Beinners',
        duration: '3 hours'
    };
    let newCourse = {...course,
        name: 'Swahili for Dummies'
    };
    console.log(newCourse)//logs a copy { name: 'Swahili for Dummies', duration: '3 hours' }

    function multiplish(...args) { //the word args here can be replaced by anything
        return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    }
    console.log( multiplish(2, 3, 4) ); //24 ie 2*3*4

    function parties(multiplier, ...numberss) {
        return numberss.map(number => number * multiplier);
    }
    console.log( parties(2, 1, 2, 3, 4) )//[ 2, 4, 6, 8 ] bcs the
    //  first 2 is the muliplier that multiplies all other nums ie 1, 2, 3, 4



//DEFAULT PARAMETERS:
    function writeCode(language) {// or (language = 'Javascript')
        console.log(`Write code in ${language}`);
    }
    writeCode('Python')//Write code in Python
    writeCode('Java')//Write code in Java
    writeCode('Typescript')//Write code in Typescript
    writeCode()//Write code in undefined so the language was assigned to undefined by default
    //if language has a default param like Javascript then writeCode() will logout jscript

    function codeDetails(language='Java', tool = 'VS Code') {
        console.log(`Writing code in ${language} using ${tool}`);
    }
    codeDetails('python', 'ntepad')//Writing code in python using ntepad
    codeDetails();//Writing code in Java using VS Code
    codeDetails('TypeScript');//Writing code in TypeScript using VS Code

    function createUser(name, role = 'Guest', status = 'active') {
        console.log(`User: ${name}, Role: ${role}, Status: ${status} `)
    }
    createUser('Alice');//User: Alice, Role: Guest, Status: active 
    createUser('Charlie', 'Admin')//User: Charlie, Role: Admin, Status: active
    createUser('Seline', 'manager', 'inactive')//User: Seline, Role: manager, Status: inactive


//GETTERS AND SETTERS: 
const lesson = {
    name: 'Python for Dummies',
    length: '2 hours',
    details() {
        return `${this.name} course is ${this.length} long`;
    }
}
console.log( lesson.details() )//Python for Dummies course is 2 hours long

//get and set:
const lessons = {
    name: 'Python for Dummies',
    length: '2 hours',
    get details() {
        return `${this.name} course is ${this.length} long`;
    },
    set details(value) {
        let parts = value.split( " is ");
        this.name = parts[0];
        this.length = parts[1]
    }
}
console.log( lesson.details )//Python for Dummies course is 2 hours long
lesson.details = "Swahili for Beginners is 12 months"
console.log( lesson.details )//Swahili for Beginners course is 12 months long