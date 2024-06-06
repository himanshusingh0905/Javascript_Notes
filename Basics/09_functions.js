

/*
    Declaration : 
         * To declare 'function' keyword is used.
         * SYNTAX :    
                    function add( parameter1, parameter2....,parameterN ){
                         // your code starts here                                
                    }
*/
function add(a,b){
     return Number (a) + Number(b)
}

n1 = "130";
n2 = "65";

result = add(n1,n2)
console.log(result);
console.log(n1 * n2)

/*
     # IMPORTANT POINTS :
              1.  Function declaration using 'function' keyword.

              2. local variables : declared inside function
              3. outer variables  :  Declared outside the function but having same scope as function
              4. global variables

              4. Parameters : variable listed inside the parentheses in the function declaration (it’s a declaration time term).
              5. Arguments : An argument is the value that is passed to the function when it is called (it’s a calling time term). 
              
              7. return : To return a value/function, 'return' keyword is used. just like c/c++.
              8. A function which either is 'empty' or 'doesn't return anything' -> by default returns 'undefined'

              9. 'continue' keyword, here is different than in c/c++. h
                   
*/

// parameters : Related declaration 
//  Here, yourName is parameter, and I am giving it a default value = Anonymous
function printName(yourName = "Anonymous"){ 
     console.log(`Hey! ${yourName}`);
}
// calling function, passing argument
printName("Himanshu"); //  Hey! Himanshu
printName();  //   Hey! Anonymous    -> By default  yourName = Anonymous

//----------------------------------------------------------------------
// A function as default-parameter: 
function showMessage (text = anotherFunction()){ 
     // Important thing here is that, anotherFunction() won't be called if text parameter is provided. 
     console.log(`text = ${text}`)
} 
// function anotherFunction(){
//      console.log("another function is called");
// }
// showMessage() 
/*
OUTPUT  =    another function is called
             text = undefined
*/
// In above output, Why we got text=undefined ?
// This is because, A function which doesn't return anything, by default it returns 'undefined'.
// lets fix this :
function anotherFunction(){
    return "another function is called";
}
showMessage();  // Output : text = another function is called
//-----------------------------------------------------------------------------------------

// ##############################        FUNCTION EXPRESSION          ######################################

// * There is another syntax for creating a function that is called a Function Expression.
// Example: 
let sayHi = function() {
     console.log( "function expresssion demo" );
};
/*  From above, some important things to note here:
         1.  There is No name for above function, So omitting a name is allowed here.
         2.  There's a semicolon here, but Normal function syntax doesn't. 
             This is because it's an expression like: let var1 = function(){}; 
*/
// ***  How do I call it ?
// sayHi     //   Doesn't do anything.
sayHi()   // Output : function expresssion demo, yes it worked this way.

// What if I try to print sayHi, because this is an expression, let's see.
console.log(sayHi); // output : [Function: sayHi],  In other words, it is function in string form.
// Please note that the this line does not run the function, because there are no parentheses after sayHi. 
// In JavaScript, a function is a value, so we can deal with it as a value. 
// The code above shows its string representation, which is the source code.

//---------------------------------------------------------------------------------------------------------------------

// IMPORTANT : In javascript, Function is a value:
function fun(){
     console.log("Have fun dum-dums");
}

let greet = fun
greet() // Have fun dum-dums
fun()  // Have fun dum-dums


//-------------------------------------------------------------------------------------------------------------

// CALLBACK function:  A callback is a function passed as an argument to another function.


//--------------------------------------------------------------------------------------------------------------

//##########################       Arrow functions        ##############################
