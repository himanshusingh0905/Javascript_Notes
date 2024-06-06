// if - else block is same as c++
if( true){
    console.log("if block executed");
}else{
}


// ##########################         Loops ( for and  while )         ###########################
// Syntax of while, for, and do-while is same as in c++

// 1. while :
// while (condition) {
//   }

// 2. for loop :
// for (begin; condition; step) {
//     // ... loop body ...
// }


// 3. do - while :
// do {
//     // loop body
//   } while (condition)

let fruits = ["Apple", "Orange", "Pear"];

// normal for-loop
for (let i = 0; i < fruits.length; i++) {
  console.log( fruits[i] );
}
// 
for ( let fruit of fruits){
    console.log(fruit);
}

// ##########################        switch statement        ###########################
/* 
// SYNTAX : 

switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default:
      ...
      [break]
}

  */