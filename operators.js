// operators
// assignment operator uses a single = to assign a value to a variable
// arithmetic operators include increment, decrement ++ and 
//      they follow PEMDAS  ie paranthesis, exponents, multiply, divide, add, subtract
// comparison operators are >, >=, <, <=
// equality operators are strict(===) and loose(==) equality
// loose equality checks for truthy is 2 == "2" and doesnt enforcing for type similarity.
//    it  converts the values to a string then checks equality so true ie type coercion
// strict equality doesnt convert to str, returns true if the values are of the same type, and are equal
//      it checks values as they are so gives false. *BEST

// console.log(1 == true);
// console.log(1 === 3);

// ternary operator is a conditional operator used to compare values mostly two
        // let age = 10;
        // const canDrive = age >= 18 ? true : false;
        // console.log(canDrive);

        // let points = 110;
        // let customerType = points > 100 ? 'gold' : 'silver';
        // console.log(customerType);

// logical operators: used when making decisions on multiple conditions
// they include or oprator(||), and operator(&&), not operator(!!), nullcoalescing(??)
//  or operator (||) returns true as long as one value is true. it checks from left to right
        // console.log(true || true);  true
        // console.log(false || true); true
        // console.log(false || false); false

        // let hasReservations = true;
        // let acceptingWalkingins = false;
        // const hasAccessToTable = hasReservations || acceptingWalkingins;
        // console.log(hasAccessToTable);

// and operators check from lft to right, convert to a boolean and returns the inverse value
// if its already a boolean it returns the last value and all must be true 
// and operator takes precedence before the or operator
            // console.log(true && true);  true
            // console.log(false && true);  false
            // console.log(true && false);  false
            // console.log(false && false);  false


            // let age = 7;
            // let hasCar = true;
            // const canDrive = age >= 17 && hasCar;
            // console.log(canDrive);

// not operators  check from lft to right, convert to a boolean and returns the inverse value
            // console.log(!true);

//             let isClossedSunday = true;
//             let isHotelOpen = !isClossedSunday;
//             console.log(isHotelOpen);
            
// nullish coalescing operator is represented by ??. used  if a value is not defined        //    
                // let a = null;
                // const result = (a !== null && a !== undefined) ? a : false;
                // is same as const a = null;
                // console.log(result);
                
// falsy values, short circuit eval 
// fasly values are values that js doesnt consider boolean(true, false)
// they include non boolean values like null, undefined NaN, " " and 0
// short circuit eval is when js doesnt check all values when It finds 
        // the first value from left to right 

// 