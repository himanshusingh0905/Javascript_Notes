


// ###########       Math.random()        ###################

// 1.   Math.random()   returns values between [ 0 , 1):      0 (inclusive) and 1(exclusive)

for(let i=0; i<10; i++){
    // console.log(Math.random());  //  values between [0,1)

    // 1. To get value between 1 to 10
    // console.log(  Math.floor(Math.random() * 10) ); // Math.floor() helping in getting integral values.
    
    //2.  to get values between  [20,30)
    console.log( Math.floor(Math.random() * 10) + 20);
}