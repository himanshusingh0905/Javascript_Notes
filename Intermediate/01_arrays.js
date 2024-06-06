// Just Like python list, Here also Arrays can store values of multiple data-types.
// But unlike python's list, it doesn't support negative-indexing.

//1. Declaration :
// Two syntaxes : 
// (i). 
let arr = new Array();
// (ii) 
let myArray = [];
//------------------------------------------------------------------------------------------------



// Just like python's List, here Array can also store values of any-type.

let array = [2, null, true, ['r',0,9], "Joss", undefined, {name:"David", age: 24}, function(){ console.log("Function inside array");}]
console.log(array)  // working fine

// accessing function inside array:
console.log( array[array.length - 1]() )   // Output : Function inside 
//                                                     undefined               <- value returned by that function

//2.  Is it mutable ?
array[1] = 20;
// console.log(array) // Yes, it is mutable

// 3. Can I push new elements just like in python (push)
array.push(45)   // 45 will be appended at the back.
// console.log(array) // sure, we can

// 4. pop(): last element will be deleted
array.pop()  // 45 will be popped.

// 5. Re-assigning is allowed here.
array = ['smith', 'stokes', 'Josh']
//-----------------------------------------------------------------------------------------------------------------------------

// Let's declare the array with 'const' keyword
const numbers = [1,2,3,4,5,6];

// 1. push() Element :
numbers.push(7)
// console.log(numbers);     

// 2. pop():
numbers.pop()
// console.log(numbers); 

// 3. Now lets check if it is mutable?
numbers[0] = 45
// console.log(numbers); // Yes it is mutable

//  **  Then what's the difference when declaring array using 'let' and 'const'
// numbers = [9,8,7,6,5];     // There you get ERROR. In case of 'const' re-assigning is not allowed.
// console.log(numbers);

//==========================================================================================================================

// 5. slice and splice
// -> slice will give you a segment of array. but won't affect actual array.
// -> And splice will give you segment but will also delete those elements from actual array.

let ar = [1,2,3,4,5,6]
// slice():
// SYNTAX : ar1 = ar.slice( start, end)
//   -> start = Begining index for slicing. By default it is = undefined, in that case slice begins from 0th index
//   -> end = exlcusive index upto which slicing is to be done. [exclusive index means last value won't be included] 
ar1 = ar.slice(1,3);
console.log(`Actual array = ${ar}`);
console.log(`sliced array = ${ar1}`);
//_____________________________________________
// splice(): 
// SYNTAX : ar2 =  ar.splice( start, deleteCount ) -> returns an Array containing elements that were deleted from actual array.
//                    -> start = location from which to start removing elements.
//                    -> deleteCount = Number of elements to be removed
console.log("Now splice operation : ");
ar2 = ar.splice(1,2)
console.log(`Actual array = ${ar}`);
console.log(`spliced array = ${ar2}`);

//==============================================================================================================================

//###########################          Negative-indexing           #####################################

// Unlike python, Javascript doesn't support negative indexing. When you try to access it, result = undefined.
let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[-1] ); // output = undefined

// But don't worry there's another way this feature was recently.
//  ->  using   at()
console.log( fruits.at(-1));  // plum
console.log( fruits.at(-2));  // Orange
console.log( fruits.at(-3));  // Apple
console.log( fruits.at(-4));  // undefined (index out of bound)

// also work with positive index
console.log(fruits.at(0));
//=======================================================================================================================

// Let's loop through arrays:
fruits = ["Apple", "Orange", "Pear", "Banana"];

// normal for-loop
for (let i = 0; i < fruits.length; i++) {
  console.log( fruits[i] );
}
// for-of loop  -> similar to for-in loop in python
for ( let fruit of fruits){
    console.log(fruit);
}


// -------------------------------------------------------------------------------------------------------------------------

// ######################          SOME Important functions         ######################
// 1.  includes() :  Returns 'true' -> If element present inside the array.  or 'false' -> when it's not present inside array.
console.log( fruits.includes("Orange"))   // true.