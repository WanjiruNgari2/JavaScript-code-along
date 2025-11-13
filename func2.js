//TRY CATCH BLOCKS help to handle errors gracefully and prevent crashing thru defensive programming
    const lessons = {
        name: 'Python for Dummies',
        length: '2 hours',
        get details() {
            return `${this.name} course is ${this.length} long`;
        },
        set details(value) {
            if (typeof value !== "string") {
                throw new Error(`Value  ${value} is not a string`)
            } 
            let parts = value.split( " is ");
            this.name = parts[0];
            this.length = parts[1]
        }
    };


    try {
        lessons.details = 44;
    } catch(e) {
        console.log(`Caught an error: ${e.message}`)
    }

    // console.log( lessons.details )//Error: Value  44 is not a string
    console.log( lessons.details )//Caught an error: Value  44 is not a string




//LOCAL VS GLOBAL SCOPE: global scope vars are accesible to 
// any part of code after their declaration, while local globe vars
//  are declared within a func or block and are only accessed inside them.

    console.log(name) //ReferenceError: Cannot access 'name' before initialization
    const name = 'Francis';
    console.log(name) //Francis

    {
        const pets = "Andrew"
    }
    console.log(pets)//ReferenceError: pets is not defined

function greets() {
    let text = "Hollah!"
    console.log(text)
}
greets() //Hollah!
console.log(text)//ReferenceError: text is not defined



//LET AND VAR KEYWORDS: var was used before and is function scoped, 
// so only scoped to the func its defined, not to any blocks in that func ie loops and cinditionals
//LET and Const(modern and block scoped ie accessible in the block)
// they allows devs not to misuse and overuse variables, thereby wring clean code

    function display() {
        for(var i = 0; i < 7; i++) {
            console.log(i) //0,1,2,3,4,5,6 
        }
        console.log(i) //7
    }
    display()

    function displays() {
        for(let r = 0; r < 7; r++) {
            console.log(r) //0,1,2,3,4,5,6 
        }
        console.log(r) //ReferenceError: r is not defined
    }
    displays()



//        THE THIS KEYWORD: refers to the obj that is currently executing the method/func
const read = {
    name: "Python Mid Level",
    start() {
        console.log(this.name)
    }
}
read.start()//Python Mid Level
console.log(read)//{ name: 'Python Mid Level', start: [Function: start] }

function startVideo() {
    console.log(this)
}
startVideo() //logs the global obj or the window obj in browsers


//NOTE:arrow funcs dont have a this context, instead they inherit
//  it from the parent scope during the time they are defined

    const books = {
        name: "ES4 Syntax",
        commence: () => {
    console.log(this.name)
        }
    }
    books.commence()//undefined bcs the parent scope has no field called name


    function introduce(language) {
        console.log(this.name +" " + 'teaches'+ " " + language)
    }
    const instructor = { name: 'Phoebe' };
    const introduction = introduce.bind(instructor);
    introduction('Python'); //Phoebe teaches Python

//in JS to explicitly set the value of the this keyword for a  func, you can use the bind method. 
// The bind method creates a new func that when called has its own this keyword set to the provided value. 
// this allows you to call a func with this set to a specific obj even if the func is defined in a different context



//                      THE END