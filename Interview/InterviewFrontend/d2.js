// // // q2 second largest
// // // function seclargest(arr){
// // //     let largest = arr[0];
// // //     let seclarger ;

// // //     for(let i =1; i < arr.length; i++){
// // //         if(arr[i] > largest ){
// // //             seclarger = largest;
// // //             largest = arr[i];

// // //         }
        
        
// // //     }
// // //     return {largest,seclarger}
// // // }

// // function sec(arr) {
// //     let largest = -Infinity;
// //     let seclarger =-Infinity;

// //     for(let i =1; i < arr.length; i++){
// //         if(arr[i] > largest ){
// //             seclarger = largest;
// //             largest = arr[i];

// //         }
// //         else if(arr[i] >seclarger && arr[i] !== largest){
// //             seclarger = arr[i];
// //         }
        
// //     }
// //     return {largest,seclarger}
// //   }
// // let arr = [12,23,34,234,11,2323,341,1233,1,23,3443,12312,421,3,324,32232342];
// // console.log(sec(arr));


// // calculate sum of first and last index;

// function sum(arr){
//     let findx = arr[0];
//     let indx = arr.length -1
//     let lstindx = arr[indx]


//     return findx + lstindx;
// }


// let ar = [12,234,344,34,321,24332,1];
// console.log(sum(ar));


// q4. duplicate value;

// function duplicate(arr){
//     return  [...arr, new Set(arr)];
// }

// function dremsd(ar) {
//     let origin = [];
//      return ar.reduce((acc,curr)=>{
//         if(!acc.includes(curr)){
//             origin.push(curr)
//         }
//         return origin;
//     },[])
// }

// let area =[1,2,1,23,1,213,123,2,2,23,32,1,223,2,32,32,213]
// console.log(dremsd(area));



// reverser and check palindrome

function palindrome(arr){
    let str =arr;
    let palindrome = false;
    let reverse =str.split("").reverse().join("");

    if(str === reverse){
        return palindrome = true;
    }
    return palindrome;
}

let val = 'vraj';
console.log(palindrome(val));
let vals = 'mam'
console.log(palindrome(vals));