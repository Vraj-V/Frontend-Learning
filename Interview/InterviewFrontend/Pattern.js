// // // // Square pattern
// // // // logic : in order to create a square we need row and column, which give height and length to the square, and we need outer loop and inner loop
// // // // (i,j) and based on that we create a square pattern


// // // // function squarePattern(n,m){
// // // //     let rows =n;
// // // //     let columns = m;

// // // //     for(let i =0; i < rows;i++){
// // // //         let line =''
// // // //         for(let j =0; j < columns; j++){
// // // //             line += "* "
// // // //         }
// // // //         console.log(line);
// // // //     }
    
// // // // }
// // // // console.log(squarePattern(4,3));

// // // // Number pattern

// // // function patternNum(n){

// // //     for(let i =1; i < n; i++){
// // //         let line =''
// // //         for(let j =0;j<n;j++){
// // //             line += `${i}`
// // //         }

// // //         console.log(line)
// // //     }
// // // }

// // // console.log(patternNum(3));

// // // // Warm Up;

// // // // Reverse output;

// // function reverse(n){
// //     let value = n.toString();

// //     let reverse = value.split("").reverse().join("");
// //     let num = Number(reverse)
// //     return num;
// // }


// // console.log(reverse(12345));
// // // digit count;

// // function digitCOunt(n){
// //     let count =0;
// //     while(n >0){
// //         n= Math.floor(n/10);
// //         count++
// //     }
// //     return count
// // }
// // console.log(digitCOunt(12345))

// // Palindrome string

// // function palindromeStr(n){
// //     let str = n;

// //     let reverse = n.split("").reverse().join("");

// //     if(str === reverse){
// //         return true;
        
// //     }
// //     return false;
// // }
// // let sts ='vraj'
// // let st ='vjv'
// // console.log(palindromeStr(sts))
// // console.log(palindromeStr(st))

// // Palindrome number

// function palindromenum(n) {
//     let str = n.toString();

//     let reverse = str.split("").reverse("").join("");

//     let num = Number(reverse);
//     if(num === n){
//         return true;
//     }
//     return false
// }
// console.log(palindromenum(123));
// console.log(palindromenum(121))


function tables(n){
    
    let number =n
    let value = 0;

    for(let i =1 ; i <= 10; i++){
        value = number *i;
        console.log(number ," * ", i ," = " , value);
    }
}
console.log(tables(21023))