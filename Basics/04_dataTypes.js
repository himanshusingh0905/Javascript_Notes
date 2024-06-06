"use strict";


/*    When strict mode is enabled, certain actions that might have been allowed in old JavaScript code 
      will trigger errors or throw exceptions, helping to catch and prevent common programming mistakes.
*/

/*
    After 'use strict' mode:
        1.  Using a variable without declaring it is not allowed.
        2.  Assigning values to read-only properties, or using a deprecated feature will trigger error.
        3.  Strict mode disallows duplicate parameter names in function declarations and function expressions. 
            This helps prevent naming conflicts and improves code readability.
*/
// Example: Below 'name' variable is not declared. so it will cause an error.
// myName = "himanshu"
// console.log(a);

/*      NOTES :
            1.  Make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.
            2.  After using 'use strict'directive at the top, the whole script works the “modern” way.
            3.  Some new features are off by default. You need to explicitly enable them with : "use strict".s
*/
//------------------------------------------------------------------------------------------------------------------------------------

//  DATA TYPES:

/* 
    *   On the basis of 'Where they are Stored (stack and heap) and How can you access them (by reference or by value)
        There are TWO types of data types:
                1. primitive : (immutable, and to change value you have to re-assign the other value)
                    * 7 types
                    * Number, String, Boolean, Bigint, Symbol, null, undefined.
                    
                2. Non-primitive: (also called as reference type)
                    * Array, Object, and functions
*/
//-------------------------------------------------------------------------------------------------------------------------------
// Primitive: 
//        * stored in stack
//        * a copy of value is created


// For Example:
let var1 = 45;
// Here var2 is assined a copy of value inside var1
let var2 = var1  
console.log(var1, var2)  //  Output : 45 45
// Now let's change value of var1 and check if it changes the value of var2 or not ?
var1 = 60
console.log(var1, var2)  //  Output : 60 45
// No it didn't. So when you modify a immutable object, it turns out it creates a different memory block.

//________________________________________________________________________________________________________________________________

// Example 2 : Non-Premitive:
let student = {
    Name: "David",
    age : 24,
    email : "david@microsoft.com"
}

let s1 = student;
console.log(s1) // OUTPUT : { Name: 'Himanshu', age: 24, email: 'david@microsoft.com' }
let s2 = s1;
console.log(s2)   // Output : { Name: 'Himanshu', age: 24, email: 'david@microsoft.com' }

s2.Name = "Mike"
s2.age = 26

console.log(s1) //  OUTPUT :  { Name: 'Mike', age: 26, email: 'david@microsoft.com' }
console.log(s2) // OUTPUT :  { Name: 'Mike', age: 26, email: 'himanshu@microsoft.com' }

// Learning : [In non-primitive or reference] address is given to new variable. so values are mutable.

//_______________________________________________________________________________________________________________________________

//  Primitives : 

//  1.  string:
let str = "Mike, you are a good boy!"
let str2 = 'And how are you'

// console.log(str,str2, "\n")

//  2. Numbers
let n1 = 147
let n2 = 1.48

console.log(n1,"  ",n2);    //  147    1.48
console.log("Type of n1 = ",typeof n1, " | type of n2 = ", typeof n2,"\n")  // Type of n1 =  number  | type of n2 =  number

// 3. Bigint

// 4. Boolean : true or false.

// 5. undefined (variables which are not initialized)
// 6. null
// 7. symbol


//_____________________________________________________________________________________________________________________

//   typeof() :  * It tells that, what is the type of a particular variable.
//               * Two syntax:
// Examples:
console.log( typeof("Himanshu") ) // Output : string
console.log( typeof 1245)     // number
// Both are correct syntax.

// Note:  both are giving different outputs : 
console.log( typeof "6" - "4")     // Output : NaN
console.log( typeof ("6" - "4"))   // Output : number

