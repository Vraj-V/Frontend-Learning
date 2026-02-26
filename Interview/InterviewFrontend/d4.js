// // // // // // // // Reverse the string without .reverse
// // // // // // // /**
// // // // // // //  * 1. start the loop with arr.length and i-- 
// // // // // // //  * 2. you must have arr.length -1 in order to get the index the value;
// // // // // // //  * 3. loop must run till i >0 , i =0 loop stop
// // // // // // //  * 4. declare an empty array reverse. and push the value using loop
// // // // // // //  * 5. for loop, while and do while work, must effect and simple is for loop
// // // // // // //  */

// // // // // // // function reversestr(arr){
// // // // // // //     let str = arr.split("");
// // // // // // //     let reversear =[];
// // // // // // //     for(let i =str.length-1; i>= 0;i--){
// // // // // // //         reversear.push(str[i]);
// // // // // // //     }
   
// // // // // // //     return reversear;
// // // // // // // }
// // // // // // // let Strs = 'vraj'

// // // // // // // console.log(reversestr(Strs).join(""));
// // // // // // // // error:
// // // // // // // /*
// // // // // // //     1. str[i] give you the access of the array. and (i) give the index value, so early i was returning the (i) so that it will return the array.
// // // // // // //     2. join()= j,v,v,v and join("") = jvas
// // // // // // // // */


// // // // // // // //q2. check if str is palindrome

// // // // // // function checkpalindrome(arr) {
// // // // // //     let ispalindrome =false;

// // // // // //     let reverse = arr.split('').reverse().join('');
// // // // // //     if(arr === reverse){
// // // // // //         ispalindrome = true;
// // // // // //     }

// // // // // //     return ispalindrome;
// // // // // // }

// // // // // // let str = 'mam'
// // // // // // let str2 = 'vraj'
// // // // // // console.log(str, "is a palindrome: ",checkpalindrome(str))
// // // // // // console.log(str2, "is a palindrome: ",checkpalindrome(str2))

// // // // // // // q3. largest num in array

// // // // // function largest(arr) {

// // // // //     let largest = arr[0];
// // // // //     let largestIndex = 0;
// // // // //     for(let i =1;  i < arr.length; i++){
// // // // //         if(arr[i]> largest){
// // // // //             largestIndex =i;
// // // // //             largest = arr[i];
// // // // //         }
// // // // //     }

// // // // //     return {largest,largestIndex}

// // // // // }
// // // // // let array = [10,20,100,2,30,4];
// // // // // console.log(largest(array))


// // // // // console.log(Math.max(10,20,30))


// // // // // // q4. second largest

// // // // function secLarges(arr){
// // // //     let largest = arr[0];
// // // //     let secondlargest = 0;

// // // //     for(let i = 1; i < arr.length; i++){
// // // //         if(arr[i] > largest){
// // // //             secondlargest = largest;
// // // //             largest = arr[i];

// // // //         }
// // // //     }

// // // //     return {largest,secondlargest};
// // // // }

// // // // let arr = [10,20,30,402,32,1,3,42,4,3,21223,4,3,1,2,21,1122,2,12121234];

// // // // console.log(secLarges(arr));

// // // // Q6. REMOVE DUPLicate

// // // function removedup(arr){
// // //     let origin =[]
// // //     let result = arr.reduce((acc,curr)=>{
// // //         if(!acc.includes(curr)){
// // //             origin.push(curr);
// // //         }
// // //         return origin;
// // //     },[]);
// // //     return result;
// // // }
// // // let array = [10,10,20,20,40,40,202,202,232,2021,2021,231,213,21,21]
// // // console.log(removedup(array));



// // function countfreq(arr){
// //     let freqcount ={};


// //     for(let i=0; i< arr.length;i++){
// //             if( freqcount[arr[i]]){
// //                 freqcount[arr[i]]++
// //             }else{
// //                 freqcount[arr[i]] = 1;
// //             }
        
// //     }

// //     return freqcount;
// // }

// // let array = [1,2,3,1,2,12,3,1,2,2,3,3,4,1,3,4,6,5];
// // console.log(countfreq(array));

// // // swap two number without third variable;

// // let a =50;
// // let b = 20;

// // a = a+b;
// // b = a-b;
// // a = a - b;
// // console.log(a,b);

// //XOR optimization
// //  let a =100;
// //  let b =50;

// //  a = a^ b;
// //  b= b^a;
// //  a= a^b;
// //  console.log(a,b);

// //  prime number

//     function isPrime(n){
//         if (n <= 1) return false;

//         for(let i =2; i <= Math.sqrt(n);i++){
//             if( n % i === 0){
//                 return false;
//             }
//         }
//         return true;
//     }

//     function primenum(arr){
//         let primenum =[];
        
//         for(let i =0; i < arr.length; i++){
//             if(isPrime(arr[i])){
//                 primenum.push(arr[i]);
//             }
//         }
//         return primenum;

//     }

//     let arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//     console.log(primenum(arr));


// // fractioral

// function farctional(n){
//     let fractorial = 1;
//     if( n >=0) {
//     for( let i = Math.floor(n); i > 0; i--){
//         console.log(i)
//         fractorial = fractorial * i;
//     }
//     }else{
//         return false;
//     }
//     return fractorial;
// }

// let num =10
// console.log("Output",farctional(num));


// fibonnaci series

function fibo(n){
    if (n ===0) return 'invalid';
    if(n === 1) return 'stoped'
    let result = [0,1];

    for(let i =2; i < n-1;i++){
        let sum = result[i -1] + result[i - 2];

        result.push(sum);

    }
    return result;
}

console.log(fibo(10));