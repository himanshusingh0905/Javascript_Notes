/*
        *  Object is non-primitive type.
        *  Two syntaxes for creating empty object : 
                                   1.   let student = {};                       <--  This declaration is called 'object literal'
                                   2.   let student = new Object();             <--  using constructor

        *  Each literal consist of -> properties
        *  A property is 'key:value' pair. (key also called 'name' or 'identifier' ).
        *  'key' by default is of 'string' type.
        *  a colon (:) separates the key and value.
        *  
        
..............................................................................................................................*/

// Example : 
let student = {
    Name:"David",  
    roll : 7913,
    1111 : 15
}

console.log(student);   // Output :  { '1111': 15, Name: 'Himanshu', roll: 7613 }
console.log(typeof student); // Output : object
// there are two properties above : 1. 'Name'  2. roll
console.log(Object.keys(student)); // OUTPUT :   [ '1111', 'Name', 'roll' ]    <-- Keys are arranged in increasing order

console.log(Object.keys(student)[0]);          //  Output = 1111
console.log( typeof Object.keys(student)[0]);  //  output = string

console.log(Object.keys(student)[1]);          //  Output = Name
console.log( typeof Object.keys(student)[1]);  //  output = string

//  console.log(student.1111)  // ERROR : for dot-access you need keys to be in proper identifier format

//-------------------------------------------------------------------------------------------------------------------------------

// #################################################################################################

//  ## Topic : Operations like ADD or DELETE and ACCESS on Objects:
//              -> There are Two syntaxes for performing Operations:
//                                                            1.  using dot (.) operator
//                                                            2.  []   (square brackets)

// ##  1. using dot (.) Operator:

// #  (i) To add new property:
student.marks = 96;
console.log(student);  // Output :  { Name: 'Himanshu', roll: 7613, marks: 96 } 

//  # (ii) To remove a property :
delete student.roll;
console.log(student);  // Output : { Name: 'Himanshu', marks: 96 }

// (iii) To access:
let percent = student.marks;
console.log(percent); // Output : 96

// When we have multiword property name : Here dot access doesn't work
// let's add another property to -> student object.
//                          student."Your rank"=  1,    <-- Error, it didn't work. 

//    Reason : ( dot access ) requires a key in valid identifier syntax :
//                            * contains no spaces, 
//                            * doesn’t start with a digit 
//                            * doesn’t include special characters except ( $ and _ ).

//  student."isTopper" = "Himanshu"     // ERROR, Bcz when you work with dot operator, it require identifier syntax or simply identier.

//  So , For that we use another  syntax -> square brackets []

//_______________________________________________________________________________________________________________________________

//  2. syntax: using []  <-- Square brackets
let user = {
    "your name" : "Mike Ross",
    Age : 23,
}
//   1. To Access :
//         user.your name     <-  ERROR
//         user."your name"   <-  ERROR
//         user[your name]    <-  ERROR : write in quotes
//         user[age]          <-  ERROR, age is not defined

//  ***  Note : In case of [] syntax:
//                       1.  For accessing properties, key-names must be put inside quotes only.
//                       2.  Or We can use separate variable and store 'key-name' inside that, then it'll work fine in [].
// Example for 2nd syntax :
let email = 'Your email'
user[email] = "mike@microsoft.com"
// Now in same syntax (2nd one), If I put non-string value inside a variable. then pass it into [] then?
let a = 11111
console.log(typeof a) // Output : number
user[a] = 794        // Output : A new property added.  '11111' : 794
console.log(user)  // Output : '11111' : 794
// Hence, it was automatically converted into string. 

// for now lets delete that property
delete user[a]
// console.log(user);

//-------------------------------------------------------------------------

//  2. To add :
// let's add another multiword property:  similarly, Two syntaxes :
//                                                         1. directly (using double quotes inside []) 
//                                                         2. Indirectly (By creating a variable and storing key-name inside it)

// a. first method : directly 
user["your salary"] = 50_00_000;

// b. By use of another variable/identifier.
id = "your Id" 
user[id] = 1235    //  Now this will work and key name = your id

// console.log(user) 
/*  Output : 
        {
        'your name': 'Sonam Singh Rana',
        Age: 23,
        'your salary': 5000000,
        'your Id': 1235
        }

     'your salary' is added to object and see how 'your id' is added.
*/

//   3. To remove or delete:
delete user["your salary"]; // console.log(user);  // Output : deletes the 'your salary' property.
delete user[id] // delete 'your Id'  because inside 'id' variable, 'your Id' is stored.

//---------------------------------------------------------------------------------------------

// ##  To check existence of a property in an object :
// Two methods :
//         1.  using 'in'
//         2.  using 'undefined'

//   **NOTE :  When you access a non-existing property returns -> undefined.

// Example:
let car = {
    model : "Lamborgini",
    mileage: undefined,
} 
// 
// console.log( car.speed === undefined ); // returns true. Because a non-existing property returns undefined, so, true means no such property exists.

// Now see important thing:
console.log(car.mileage === undefined)  // Returns true, but it should be 'false'. because 'mileage' exist.
// So why this happens ? because mileage's value is undefined and === checks 'data-type' as well as 'value'.
// Hence, there comes role of 'in'

// console.log(mileage in car)    -> ERROR : mileage is not defined. so when using 'in', key-name should be in quotes.
console.log('mileage' in car)  // returns true, means exist.

console.log("---------------------------");
myOjbect = {
    123 : "ramesh",
    true : "suresh"
}
console.log(myOjbect[123]);
console.log(myOjbect['123']);
console.log(myOjbect[true]);