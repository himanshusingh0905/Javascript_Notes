

// # Most of the time, operators and functions automatically convert the values given to them to the right type.
//  For Example: 
result = "6" / "2"
console.log(result);  // OUTPUT : 3 
console.log(typeof result); // number

//_________________________________________________________________________________________________________________
// ###################       String Conversion        ######################
//  1.   String() -> constructor can convert a value into string


let var1 = false;
var1 = String(var1);
console.log(var1);  // 'false'
console.log(typeof var1); // string

// String conversion is mostly obvious. A false becomes "false", null becomes "null", undefined becomes "undefined", etc.

//--------------------------------------------------------------------------------------------------------------------------
// ###################       Number Conversion        ######################
// 1. To explicitly convert a value into a Number, we use -> Number()   constructor.
// For Example:
let age = "24"
console.log(typeof age) //  string

age = Number(age)
// console.log(typeof age)  // number

// *** If a string is not a valid number ?
num = "123a"
console.log(Number(num));    // NaN  <-  Not a number

/*
#######      Numeric conversion rules:     ######

undefined	      becomes     NaN
null              becomes     0
true and false	   becomes     1 and 0
*/
console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

// -------------------------------------------------------------------------------------------------------------------------

// ###################       Boolean conversion       ######################

//  * There's a constructor = Boolean() which converts other values into boolean.

// Note : Values like :  NaN ,  null, undefined,  empty string(""),  and  0  --> false,   others --> true.


console.log(Boolean(0));      // false
console.log(Boolean(NaN));    // false
console.log(Boolean(undefined));  // false
console.log(Boolean(""));     // false
console.log(Boolean(Infinity)); // true

// console.log(Boolean(" "));     // true, Because string is not empty.


// Question : predicts it's output ?
let a = "0"   
// console.log( Boolean(a) ); // true ,because it's not empty string.
// Even if a string contains a space, it's boolean is going to give -> false