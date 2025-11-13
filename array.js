// are data structures sed to rep a list of items.
// arrays have lots of methods used to manipulate the items in an array

// ADDING ELEMENTS: push(), splice() and unshift()
        let numers = [3, 8, 9, 7, 2,1]; //all numbers start at index 0
// items can be added from the front, middle or the end of the array
        numers.push(900);//push adds item to the end of the array
        // console.log(numbers); //[3, 8, 9, 7, 2,1,900] 
        numers.unshift(22); //unshift adds item to the beginning of the array
        // console.log(numbers); //[22, 3, 8, 9, 7, 2,1,900] 
        numers.splice(2, 2, 34, 44);// first 2 means start from index 2,
                //  second 2 means delete 2 items from list, 
                // next 2 numbers (34 , 44) are the numbers to replace the deleted numbers.
        console.log(numers); //[22, 3, 34, 44, 7, 2,1,900] 

        const numbers = [3, 4, 7, 9, 8];
        const indexofSeven = numbers.indexOf(7); // 2
        const indexofnum = numbers.indexOf(11); // -1
        console.log(indexofSeven); // 2
        console.log(indexofnum);// -1 bcs 11 doesnt exist in the list
        if (indexofnum === -1){
            console.log('num doesnt exist in the array');
            
        } OR 
        if (!numbers.includes(11)){
            console.log('num doesnt exist in the array');
            
        }

        const employees = [
            {
                id: 1,
                name : 'jim',
            },

            {

                id: 2,
                name: 'michael',
            },
            {
                id: 3,
                name : 'Pam'
            },
        ];

        const employee = employees.find(function(e) {
            return e.name === 'Pam'

        });
        console.log(employee);//{ id: 3, name: 'Pam' }
        // find method uses a predicate func that finds/locates for the specific value 
        // and returns true or undefined if the value isnt in the array.


//ARROW FUNCTIONS :
//example of normal function is :
        function findSum(num1, num2) {
              return  num1 + num2;
        } or // const findSum = (num1+num2) => num1 + num2 
// arrow function knows to return the result so doesnt need the return keyword.

//REMOVING ELEMENTS using : pop (), shift () and splice ()
        const fruits = [2, 3, 4, 7, 8, 9];

        let lastElement = fruits.pop();
        console.log(`lastElement: ${lastElement}`); //lastElement: 9 so pop removes items frm the end of the array

        let firstElement = fruits.shift();
        console.log(`firstElement: ${firstElement}`);//firstElement: 2 so shift removes items frm the start of the array

        let removed = fruits.splice(1, 2);
        console.log(`removed: ${removed}`);//removed: 4,7 splice is used to remove or add an item
// 1 means start at index 1 and 2 means remove 2 items. 
// if you add two more argummens then they will be added to replace the removed items


//CLEARING ALL ELEMENTS IN AN ARRAY;
   let seats = [2, 3, 4, 9, 8, 7];

        while (seats.length > 0) {
            seats.pop()
        }
        console.log(seats); //[] clears whole array OR 

        seats.length = 0;
        console.log(seats); //[] clears whole array OR 

        deletedItems = seats.splice(0, seats.length) ; //also clears array OR
        console.log(`deletedItems: ${deletedItems}`); //deletedItems: 2,3,4,9,8,7

        seats = []; //assigning the variable to an empty arr also works to clear it
        console.log(seats);

//COMBINING AND SLICE ARRAYS: using CONCAT and SPREAD opearators
        const arrOne = [2, 3, 4,];
        const arrTwo = [1, 7, 9];

        const comnbinedArr = arrOne.concat(arrTwo);
        console.log(comnbinedArr);[ 2, 3, 4, 1, 7, 9 ] //OR 

        let combinedArr = [...arrOne, ...arrTwo, 343, 1000]//spread operator
        console.log(combinedArr);[ 2, 3, 4, 1, 7, 9 , 343, 1000] //can add items too in the spread syntax while conbining

//SLICE has the start index and stop index. usually stop index is minus 1 ie 4 means stop at 3
//so delete everything after item index 3.
        const firstSlice = comnbinedArr.slice(0, 4)
        console.log(firstSlice);//[ 2, 3, 4, 1 ] it removed all items after index 3

        const secondSlice = comnbinedArr.slice(0, 2);
        console.log(secondSlice);//[ 2, 3 ] removes every item after index 1


//ITERATING ARRAYS: foreach() and for of()
        const fries = [4,3,7,8,9];

        for(let i of fries){
            //console.log(i);// 4,3,7,8,9 vertically ordered
        } //OR

        fries.forEach(i => console.log(i));// 4,3,7,8,9 vertically ordered); //OR

        fries.forEach((i, index) => 
            console.log(`At index, ${index}: ${i}`)); 
        //At index, 0:At index, 1: 3 At index, 2: 7 At index, 3: 8 At index, 4: 9


