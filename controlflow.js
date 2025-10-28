// node controlflow.js
 
// if else
// let priceOfCandy = 20;
// let balanceInCash = 3;

// const canAffordCandy = balanceInCash >= priceOfCandy;

        // if (canAffordCandy) {
        //     console.log('enjoy your sweets!');
        // } else {
        //     console.log('sorry, you have insufficient funds!');
            
        // }

        // let hour = 13;

        // if (hour >= 4 && hour <= 12) {
        //     console.log('serving breakfast');
        // } 
        // else if (hour > 12 && hour <= 14) {
        //     console.log('serving lunch');
        // }
        // else {
        //     console.log('serving dinner!');
            
        // }

// switch cases statements are used only for equality comparisons
// let job = 'SoftwareDev';

        // if (job === 'SoftwareDev') {
        //     console.log('writes code');
            
        // } else if (job === "Designer") {
        //     console.log("Makes UI documents");
            
        // } else if (job === "cook") {
        //     console.log("Makes the best food");
            
        // } else {
        //     console.log('Unemployed ');
            
        // }
        // let job = 'cook';
        // switch (job) {
        //     case 'SoftwareDev' :
        //         console.log('writes code');
        //         break;
        //     case 'cook' :
        //         console.log("Makes the best food");
        //         break;
        //     case 'Designer':
        //         console.log("Makes UI documents");
        //         break;
        //     default:
        //         console.log('Unemployed ');
        // }


// for loops exceutes code repeatedly if the condition is true. 
// mostly used for arrays
        // let numbers = [1,2,3,4,5,6,7];
        // let arrayLength = numbers.length;
        // console.log(arrayLength);
        // console.log(numbers[index++]);
        // console.log(numbers[index++]);
        // console.log(numbers[index++]);
        // console.log(numbers[index++]);


        //  for (let index = 0; index < numbers.length;index ++){
        //     console.log(index);
                    //  let index = 0 is the initialization, 
                    // index < numbers.length is the condition,
                    // /index++ isthe incrementation that makes sure the loop iterates
        //  } 
// while loops also exceutes code repeatedly if the condition is true:
        // let sum = 0;
        // while(true){
        //     console.log('Merry Xmas!');
        //     sum ++;

        //     if(sum === 10){
        //         break
        //     }
                
        // }
// do while loop executes code then checks condition

        // let sum = 0;
        // do{ console.log("Happy Birthday");
        //     sum++
        // }
        // while(sum < 10);
// for (let i = 0; i < 20; i++){
//     if ( i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }
// let i =0;
// do{
//     i++;
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// } while(i<10);

// let arr = [12, 19, 17, 22, 33, 77, 14];
// for (let a of arr) {
//     if (a % 2 === 0) {
//         continue;
//     }
//     console.log(a);
// }

        // function exampleCode(num1, num2){
        
        //    return num1 >= num2 ? num1 : num2;
        // }

        // console.log( exampleCode(33, 90));
        // function divisibleNums(num) {
        //     if (num % 3 === 0 && num % 5 === 0){
        //         return 'FizzBuzz' ;
        //     }
        //     else if (num % 3 === 0){
        //        return 'Fizz'; 
        //     }
        //     else if (num % 5 === 0 ){
        //        return'Buzz'; 
        //     }
        //     else{
        //         return num ;
        //     }
        // }
        // console.log(divisibleNums(50));

        // function evenNums(arr){
            
        //     for (let i of arr){
        //         if (i % 2 === 0)
        //             console.log(i);
                
        //     } 
        // }
        // evenNums([1,2,3,4,7,90,99,12,24,28]);
        
        // function oddNums(arr){
            
        //     for (let i of arr){
        //         if (i % 2 != 0)
        //             console.log(i);
                
        //     } 
        // }
        // oddNums([1,2,3,4,7,90,99,12,24,28]);

        // for in is for objects to access keys and vals 
        // for of is for arrays to access items in arrays in a loop iteration


