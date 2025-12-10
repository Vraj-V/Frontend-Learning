// Pattern 

/*
1
22
333
4444
*/
//code
    /*
    for (let i =0; i <= 10; i++){
        for(let j =1; j<= i; j++){
            console.log(i);
        }
    }
    */
//    2nd pattern 
/*
1
12
123
1234
12345
*/ 
// for (let i =0; i <= 10; i++){
//     for(let j =1; j<= i; j++){
//         console.log(j);
//     }
// }


// 3rd Pattern 
// Print  1 , 10 times.

/*
let count =0;
for (let i =1; count < 10; i){

    console.log(i)
    count ++;
}
*/
//4th Pattern
// Print 1 to 100 in loop for .
/*
for (let i = 1;i <=100;i++){
    console.log(i)
}
    */

// 5th pattern print 1 to 100 in while
/*
let i=1;
while (i<=100){
    console.log(i);
    i++;
}
*/

// 6th print 1 , 25 times in while loop.

// let i=1;
// let count =0;

// while(count <25){
//     console.log(i);
//     count++;
//     i++;
// }



// print 1 to 100 in do while

// let i =1001;
// do{
//     console.log(i);
//     i++;
// }while(i<=100)



// print 5 table till 10.

// for (let m =1; m <=10; m++){
//     let i =5;
//     console.log("table of "+i+ " * "+m+ " = "+i*m)
// }

// let m =1;
// let i=5;
// while(m<=10){
//     console.log("while table of "+i+ " * "+m+ " = "+i*m)
//     m++;
// }


// Print even number of 1 to 20.

/*
for (let i =1; i<=20;i++){
    if(i%2 ===0){
        console.log("even number is : ",i);
    }
}

//while loop using.
let i= 1;
while (i <=20){
    
    if(i%2 ===0){
        console.log("while using even number is : ",i);
    }
    i++;

}
*/

// Print odd number 1 to 15.

/*
// For loop
for ( let i =1; i<=15; i++){
        if(i%2 !==0){
        console.log("odd number is : ",i);
    }
}


let i =1;
while (i<=15){
        if(i%2 !==0){
        console.log("while odd number is : ",i);
    }
    i++;
}
*/


//  Find the count of number of digit in a number.


let count =0;
let num =12314;
// while (num > 0){
//     count++;
//     num = Math.floor(num/10);
// }


for (let i =1; num>0; i++){
    count ++;
    num = Math.floor(num/10);
}
console.log("For loop wala count hai :" ,count);
// Use i bcz we need to increment the value to next digit. and stop the count we use num>0, mean num =0; it will stop.
// How number become zero(0) , use Math.floor() it remove the decimal value and by (num/10) we get 1231.4 -> 1231


// Loops
//  1. For loop Syntax:

    /*  for (start; end; change){
    //code
    }
    */

// 2. While loop
/*
    (start)
    
    while (end){
    
    //code
    
    }

*/

// 3rd Do while loop
/*
    (start)
    do{
        //code

    }while(end)

    */
