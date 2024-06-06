// Basics:
// 1. Declaration : it's a process of specifying variable's name and it's type(for dynamic typed lang. it's not necessary)
let variable;
//  Initialization : when variable is assigned a value.
variable = 25;
// we can do both in one go:
let age = 45
 
// NOTE : While creating variable names follow 'camelCase' because it looks good.
//--------------------------------------------------------------------------------------------------------------------------

//                      WHAT IS THE DIFFERNCE BETWEEN 'let', 'var' and 'const' ?

//     ########      I.  'var'      ###########

//  ***   1.  variables declared with 'var' are RE-DECLARATION tolerant:
var Name = "David"
var Name = "Joss"
console.log(Name);  // Output  = Joss
// So, It's clear that re-declaration is allowed, when variables are declared with 'var'
//------------------------------------------------------------------------------------
//  ***   2.   “var” has no block-scope
//          *   variables declared with 'var', are either 'function-scoped' or 'global-scoped'.

// Example 1:
var id = 45
if(true){
    var id = 24
    console.log("printing id inside the function : ",id);       // Output : 24
}
console.log("Printing id outside the function : ",id)           // Output : 24

// So, Here id is global-scoped. because, when value of  'id' inside if-block is modified, outer 'id' also gets modified. 

// Example 2 : ( functional-scope ) :
var test = 4444;
function fun(){
    var test = 2222;
    console.log("Inside function id = ",test);   // OUTPUT : 2222
}
fun();
console.log("Outside function id = ",test);  // OUTPUT : 4444 

// NOTE : So, Yes functional-scope exists.
//-----------------------------------------------------------------------
// ***  3. “var” variables can be declared below their use.
// Example : 
function sayHi() {
    phrase = "Hello";
    // console.log(phrase);
    var phrase;
  }
  sayHi();
//-----------------------------------------------------------------------

// NOTE : 
//      1.  Variables declared with 'var' are re-declaration tolerant.
//      2.  'var' has no block scope, It's either 'functional-scope' or 'global-scope'
//      3.  'var' variables can be used before declaration.
//--------------------------------------------------------------------------------------------------------------------

//     ########      I.  'let'      ###########

//   ***   1.  Re-declaration is not allowed
let myVar = 25;
// let myVar = 45;        // Error :  Identifier 'myVar' has already been declared

//   ***   2.   Unlike 'var',  'let' supports block-scope
// Example 1:
if(true){
    let myVar = 777
    console.log("Printing inside the if-block : ", myVar);    //  Output  : 777
}
console.log("Printing outside the if-block : ", myVar);   // Output : 25


// *** 3. Let's see if we can use a variable before declaration:
function sayHi() {
    // phrase = "Hello";        //  ReferenceError: Cannot access 'phrase' before initialization
    // console.log(phrase);
    let phrase;
  }
  sayHi();

  //  Note : 'let' handles all drawbacks of 'var'.

//---------------------------------------------------------------------------------------------------------------------

//     ########      I.  'const'      ###########

const roll = 45
//   ***   1.  Re-assignment to constant variable is not allowed.
// roll = 97 
// console.log(roll);

//  ***    2.  It also supports block-level scope
if(true){
    const roll = 21;
    console.log(roll); // Output : 21
}
console.log(roll);    // Output  : 45


//---------------------------------------------------------------------------------------------------------------------

/*

#   So we're left with only two keywords: 
    1.   let
    2.   const   

    Because 'var' is deprecated( whose use is not recommended ). See when you hover over variables declared using 'var' 
    keyword. you will see this suggestion : deprecated.

*/