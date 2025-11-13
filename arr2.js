// SEPARTING AND JOINING ITEMS IN AN ARRAY:
        const bans = [4,3,7,8,9];
        const joinedBans = bans.join(', '); //joins items by what is specified inside '' 
        console.log(joinedBans); //4, 3, 7, 8, 9 joins all numbers separated by commas
        
              
        const cousreName = 'JavaScript for Beginners';
        
        const smallLetters = cousreName.toLowerCase();
        const parts = smallLetters.split(' '); //seperates items by what is specified inside '' 
         //     OR METHOD CHAINING  
         const partss = cousreName.toLowerCase().split(' ') //combine both methods

        
        console.log(parts);//[ 'JavaScript', 'for', 'Beginners' ] separated as per spaceing, giving each items in diff indexes

        const myUrl = parts.join('_');
        console.log(myUrl);//JavaScript_for_Beginners


// SORTING THRU STR AND ARRs:
        const fans = [4,3,7,8,9];   
        const sortedFans = fans.sort();
        console.log(sortedFans); //[ 3, 4, 7, 8, 9 ]ascending order
        const reversedFans =fans.reverse();
        console.log(reversedFans)//[ 9, 8, 7, 4, 3 ] descending order

        const words = ['w','a', 'b', 's', 't'];
        const sortWords = words.sort();
        console.log(sortWords);//[ 'a', 'b', 's', 't', 'w' ]ascending order
        const reverseWords = words.reverse();
        console.log(reverseWords);//[ 'w', 't', 's', 'b', 'a' ]descending order

                const students = [
                    {id: 1, name: "Jane"},
                    {id: 2, name: "Zach"},
                    {id: 3, name: "Michael"},
                    {id: 4, name: "Alex"},
                ];  

                let sortedStudents = students.sort((a, b) => {
                    const optionA = a.name.toLowerCase();
                    const optioB = b.name.toLowerCase();

                    if (optionA < optioB) return 1; //means optA comes after optB
                    if (optionA > optioB) return -1; //means optA comes bfore optB
                    return 0

                });
                console.log(sortedStudents) //logs students in reverse order z to A


// TESTING ARRAYS IN  JS using .every() .some() .filter() .map()
// .EVERY() tests whether all elemnts in arr pass the test
//  implemeneted in the function. it returns true if everyelmnt satisfies the condition, and false otherwise

    const numers = [2, 4, 9, 8, 10 ]
    const areAllEven = numers.every(numer => { numer % 2 === 0});
    console.log(`areAllEven: ${areAllEven}`) //areAllEven: false

    const fess = [1, 3, 4, 7, 11, 9];
    const hasOneEvenNumber = fess.some(fess => fess % 2 === 0);
    console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`) //hasOneEvenNumber: true
//.SOME() checks that one element in the arr passes the condition,
//  and returns true if this is met and false otherwise

//The FILTER() method goes thru an arr and extracts an element that meets a 
//specific condition ,returning a new arr comprised of only those elements

    const numbers = [1, 2, 3, 4, 7, 8];
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    console.log(`evenNumbers: ${evenNumbers}`)//evenNumbers: 2,4,8
    const oddNumbers = numbers.filter(number => number % 2 != 0);
    console.log(`oddNumbers: ${oddNumbers}`)//oddNumbers: 1,3,7

    const employers = [
        {id:1, name:'Alice', role:'Dev'},
        {id:2, name:'Bob', role:'Designer'},
        {id:3, name:'Charlie', role:'Dev'},
        {id:4, name:'Danny', role:'Manager'},
    ];
    const devs = employers.filter(employer => employer.role === 'Dev');
    console.log(devs) // logs out arr of employers Alice and Charlie with id, name and roles

//The .MAP() method iterates over every element in the arr hereby 
// perfoming the action speciied in the func and returns a new arr of the result
    const numberss = [2, 4, 14, 8, 10];
    const squaredMubers = numbers.map(num => num * num);
    console.log(squaredMubers)//[ 4, 16, 196, 64, 100 ]

    const characters = ['a', 'b', 'c', 'd']; //or ["abigael"]
    const capitalChars = characters.map(char => char.toUpperCase());
    console.log(capitalChars)//[ 'A', 'B', 'C', 'D' ] or [ 'ABIGAEL' ]

    const farmers = [
        {id:1, name:'Alice', email:'Alice@gmail.com'},
        {id:2, name:'Bob', email:'Bob@gmail.com'},
        {id:3, name:'Charlie', email:'cHaLie@gmail.com'},
    ];
    const updatedFarmers = farmers.map(farmer => ({
        ...farmer, 
        email: farmer.email.toLowerCase()
    }));
    console.log(updatedFarmers)//returns a new arr but all emails are in lowercase


// REDUCING AN ARR using .reduce() method reduces all elemnts into a single value 
// it accepts 2 params: ist param is a callback func has 2 params ie(accumulator, currentValue), 
// and then an optional sec value that sets the starting val of the accumulator  
const fruits = [1, 10, 3, 14];
let sumn = 0
for(let fruit of fruits)
    sumn += fruit;
console.log(`Total sum is: ${sumn}`);//Total sum is: 28
            //OR
const sums = fruits.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) //note the 0 which is current val set to sum
console.log(`Total sum is: ${sums}`);//Total sum is: 28
            //OR
const sum = fruits.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) //no sec value ie current val set to sum
console.log(`Total sum is: ${sum}`);//Total sum is: 28


         