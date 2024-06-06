
//  ######################      COMPARISION OPERATORS:    ########################
//  1.    > ,  <
//  2.    <= , >=
//  3.    == , !=

//  All comparision operators return boolean value ( true or false )

// 1. Number comparision :
console.log(2 > 1); // true
console.log( 2 == 1);   //  false

// --------------------------------------------------------------------

// 2. String comparision : 
// To compare strings, JavaScript uses the so-called “dictionary” or “lexicographical” order.
// In other words, strings are compared letter-by-letter

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// -------------------------------------------------------------------

// When comparing values of different types, JavaScript converts the values to numbers.
console.log( '2' > 1); // '2' is converted to 2, Hence,      Output : true
console.log( '01' == 1 ); // true,     ->  string '01' becomes a number 1(number)

console.log( true == 1 ); // true,     As true becomes 1
console.log( false == 0 ); // true     As true becomes 1


// ----------------------------------------------------------------
let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true
// ------------------------------------------------------------------

// A regular equality check == has a problem. It cannot differentiate 0 from false:

console.log( 0 == false ); // true

// The same thing happens with an empty string:

console.log( '' == false ); // true
// This happens because operands of different types are converted to numbers by the equality operator ==. 
// An empty string, just like false, becomes a zero.

//  WHAT IF WE WANT TO DIFFERENTIATE  0  FROM  false.
// A  'strict equality' operator  ===  checks the equality without type conversion.
//  Similarly,  'strict non-equality' operator !==

console.log( 0 === false ); // false

// NOTE : null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
//        and NaN is a special numeric value which returns false for all comparisons.

//   'null' and 'undefined' are equal to each other, and aren’t equal to anything else.
console.log(null == undefined); // true
// with   'strict equality operator'
console.log( null === undefined) // false

// We shoud avoid this kind of comparision

console.log( undefined > 0 );  // false (1)   
console.log( undefined < 0 );  // false (2)
console.log( undefined == 0 ); // false (3)

console.log( null > 0 );   // (1) false
console.log( null == 0 );  // (2) false
console.log( null >= 0 );  // (3) true