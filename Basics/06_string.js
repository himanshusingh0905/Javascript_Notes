// /*
//     *   A string in JavaScript must be surrounded by quotes.
//     *   Like using : 
//                 1.  Using double quotes " "
//                 2.  Using  single quotes ' '
//                 3.  using Backticks ` ` .( Provide extended functionality of embedding variables)
// */

// let str1 = "string using double quotes";
// let str2 = "String using single quotes";
// let str3 = `string using backticks`;


// // Backticks (` `) : 
// //   Backtics are called 'extended functionality' quotes, T
// //   and they allow us to embed variables and expressions into a string by wrapping them in ${…}.

// // Example : 
// let name = "David";
// console.log("Hello Everyone! my Name is ${name}");      // Output : Hello Everyone! my Name is ${name}
// console.log('Hello Everyone! my Name is ${name}');      // Output : Hello Everyone! my Name is ${name}
// console.log(`Hello Everyone! my Name is ${name}`);      // Output : Hello Everyone! my Name is David
// // Note : This embedding functionality is supported only in backticks (` `)

// // Note : There is no character type in Javascript.


// let n1 = "2", n2 = "4";

// // Let's see few more operations
// let res = n1 * n2
// console.log(res);  // Output : 8
// console.log(typeof res);  // number

// res = n1 + n2
// console.log(res);   // Output : 24
// console.log(typeof res);   //  string

// res = n2 - n1
// console.log(res);   // Output : 2
// console.log(typeof res);   //  number


// //###########################      string concatenation      ###############################


// let greet = "Hello"
// let yourName = "Mike"

// // concatenation : Process of appending string into another string.
// console.log( greet + yourName);  //  HelloMike
// console.log(greet + " " + yourName); // Hello Mike,   Now it's look beautiful

// // Let's see if we can concatenate a 'number' to a 'string'
// let num = 9
// // Note: If any of the operands is a string, then the other one is converted to a string too.
// console.log("I'm " + num + " years old") //  I'm 9 years old
// console.log( typeof num);  // number


// ##############     length property    ###############
// To give total number of characters inside a string

let str = "Hey! How are you doing?"  // Here total 'characters' including spaces = 23 
console.log( str.length );

9
//########################         string-slicing : slice()           ############################
//   slice(start, end)
//              * It returns a section of a string 
//              * start = starting index of substring
//              * end = this index is not included in that substring.       

// str = "Welcome"
// console.log( str.slice(3) );    //  Output : come,    ->  By default [ end = last_index + 1 ]
// console.log( str.slice(1,5) );  //  output : elco
// console.log( str.slice(0,1) );  //  Output : w
// console.log( str.slice(str.length-1 , str.length) );   //  Output : e


//#####################         Some important functions          #########################
//  1. toUpperCase():   converts the all characters of a string into uppercase.
str = 'DaVid MalAn'
console.log( str.toUpperCase() );    // DAVID MALAN
// 2.   toLowerCase()
console.log(str.toLowerCase() )      // david malan 

str = "Hello World"
//  3.  lastIndexOf() : returns the last occurence of a substring into a string'
console.log( str.lastIndexOf('l'))  // Output : 9