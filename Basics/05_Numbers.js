
"use sctrict"

// Numbers: Important points:
/*
    1.  Represented by 'double-precision 64-bit binary format'  <-  IEEE 754. 
        means it doesn’t differentiate between integers and floating-point numbers

    2.  Integers and floating-point numbers are both represented using above format.

    3.  This format stores numbers in 64 bits, 
            *    0-51 bit (52 bits ) : To store value(fraction)
            *    52-62 bit ( 11 bits) : To store exponent.
            *    63-bit (1 bit): To store sign
    
    4. Range :  ( -2^53 + 1 ) to  ( 2^53 - 1 )

    5. Along with normal values Number can take, There are two special numeric values: 1. NaN  2. infinite
                                                               

*/
//--------------------------------------------------------------------------------------------------------------------------
// # Ways to represent a Number in Javascript:

//  1.
let a = 17859746311

//   2. :  to increase the readability of numbers
let b = 17_235_1492_13  // Output : 17235149213

//  3.
let c = 2.3e5  // Output: 230000
let d= 1.56e-3   // Output : 0.00156

console.log(`a = ${a} , b = ${b} , c = ${c} , d = ${d}`);

// Can we use second rep. in case of float?     -> Yes, it works
let f = 1.2_369_839_12  // Output : 1.236983912

//--------------------------------------------------------------------------------------------------------------------------

// 2.  INTEGER PRECISION:
// Note:   1. Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
//         2.  Numeric literals with absolute values greater than or equal to 2^53, 
//             are too large to be represented accurately as integers.

let n = 9999_9999_9999_9999
let m = 9999_9999_9999_9999..toString()         // <-- We can call function this way also. using two dots ( .. )
console.log(n);        // 10000000000000000   ->   17 digits  -> precision got disturbed
n = 999_9999_9999_9999  // 15 digits
console.log(n);        // output : 999999999999999   -> 15 digits, safely printed. so accuracy is upto 15 digits


//  undefined : when a variable is not assigned any value, then it's by default value is = undefined
let var1;     // for now, var1 = undefined
console.log(var1);  // Output : undefined
let var2 = undefined;
console.log(var2) 


//--------------------------------------------------------------------------------------------------------------------------

// Demonstration to special numeric values ( NaN , infinity )
let n1;
let n2;

n1 = 5 / 0;  // infinity
n2 = "123Him" / 4;  // NaN
console.log(n1) 
console.log(n2)

//  Additional Points : 
let var3 = "125"/ 5;
console.log(var3); // 25

n1 = "2";
n2 = "4";
let res = n1 * n2;
console.log(res);  // Output : 8
console.log(typeof res);  // number
res = n1 + n2
console.log(res);   // Output : 24
console.log(typeof res);   //  string
res = n2 - n1
console.log(res);   // Output : 2
console.log(typeof res);   //  number

//--------------------------------------------------------------------------------------------------------------------------
// #######################           Decimal precision            ##########################
/*
        * SYNTAX : 
                *  toFixed()
                *  toFixed(digits)
                        *  digits =  Number of digits to appear after the decimal point;[ A value b/w  0 to 100 inclusive ]
                                    By default, it's = 0
        *  Returns a string representation    
*/
let num = 4.234569
console.log( num.toFixed() )// 4
console.log( num.toFixed(2) ) // 4.23