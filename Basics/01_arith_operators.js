// Arithmetic Operators:

let n = 15;

n = n + 1; // Output : n = 16
n = n - 1; // Output : 15
n = n * 2; // Output : 30
n = n / 3;  // Output : 10

// Exponent (just like python)
n = n ** 2 // output (10^2 = 100)
n = n % 6  // OUtput = 4;

// We can also use (combined assignment operators) :
//  1.  +=
//  2.  -=
//  3.  *=
//  4.  /=
//  5.  %=
//  6.  **=

var1 = 25;
n++ // n++ = (n = n + 1)
n--  // n-- = (n = n - 1)

//------------------------------------------------------------------------
/*
Operator precedence :
        1. unary +
        2. unary -
        3. paranthesis ()
        4. exponent **
        5. multiplication, division, modulo
        6. addition, substraction
        7. assignment =

        Note : In case of equal priorty : equation will be solve from  Left -> right

*/

result = 5 * 4 % 3 / 2;  // Answer = 1
result = 5 * 2 ** 4 / 10;  // answer = 8 , exponent solved first, then left to right
console.log(result);
console.log(n)

//===============================================================================================================================

//   ######################       LET'S SEE THE MAGIC OF SOME OPERATORS        ###########################

// 1.  Binary '+'
// *** Case (i) : If the binary + is applied to strings, it concatenates them:
let s = "Hello" + "World"
console.log(s); //  HelloWorld

// *** Case (ii) : Note that: If any of the operands is a string, then the other one is converted to a string too.
console.log(  "1" + 2 );  // 12
console.log(  1 + '2' );  // 12
//  Note : See, it doesn’t matter whether the first operand is a string or the second one.

// ***  Let's see more interesting examples 
console.log(2 + 2 + '1')  //  Output =  41  not  221
console.log('1' + 2 + 2)  //  Output =  122   not  14
// The binary + is the only operator that supports strings in such a way .


// Note: In contrast to '+' :
// Other arithmetic operators work only with numbers and always convert their operands to numbers.
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

//__________________________________________________________________________________________________

//  2.  Unary '+' : 
//   The 'unary plus' or the plus operator (+) applied to a single number, then doesn't do anything.
//   But if the operand is not a number, the unary plus converts it into a number.
console.log( +true );  // Output = 1
console.log( +"25" );  // Output = 25

let n1 = "25";
let n2 = "35";
console.log(n1 + n2);     // Output = 2535
console.log( +n1 + +n2);  // Output = 60

// What if I use this with mixed string like this:
console.log( +"12a" )  // NaN

// NOTE : So, (Unary + ) = Number()

// --------------------------------------------------------------------------------------------------------------------

// Now unlike binary +,  '-' and '/' behaves different:

//  + operator can be used to convert number into string:
console.log(6 + '2') // 62
console.log (6 - 4 + '2'); // 22
// But these converts string into number
console.log( 6 - '2' ); //  Output : 4, converts '2' to a number
console.log( '6' / '2' ); // Output : 3, converts both operands to numbers
console.log (8 - 4 - '2'); // Output : 2

// Point is, Except '+' operator, NO one can perform concatenation with string

//__________________________________________________________________________________________________________________________


//  #############################        LOGICAL OPERATORS        ##############################
//  ->  4 TYPES 
        //     1.  and ( && )
        //     2.  or  ( || )
        //     3.  not ( ! )
        //     4.  Nullish ( ?? )


//  #   nullish Operator :  ( a ?? b)
//                             * Returns b, if a = null or undefined
//                             * Returns a if b = null or undefined
//                             * Returns -> undefined, if both are null or undefined
let a = NaN;
let b = undefined;
console.log(a ?? b);  //  NaN
a = null
console.log(a ?? b);  //  undefined
