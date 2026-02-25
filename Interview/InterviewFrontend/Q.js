// // // // // reverse a string

// // // // let str = 'hello world'

// // // // let reverse = str.split("").reverse().join();
// // // // console.log(str);
// // // // console.log(reverse);
// // // //

// // // // function method

// // // let str = 'vraj';

// // // function rev(arr){
// // //     let reverser = []

// // //     for(let i = arr.length -1 ; i >=0; i--){
// // //         reverser.push(arr[i]);
// // //     }
// // //     return reverser;
// // // }

// // // console.log(rev(str).join());

// // // Q2. check palinodrome

// // let palindorme = false;

// // let str = 'mam';
// // let reverser = str.split('').reverse().join("");

// // if(str === reverser){
// //     palindorme = true;
// // }
// // console.log(palindorme);

// // // q3.  largest num in arr


// let arr = [12,213,312,2,13,321,2,22312];

// // function masx(arr){
// //     return Math.max(...arr);

// // }
// // console.log(masx(arr));

// // function lar(arr){
// //     let larg = arr[0];

// //     for(let i =1; i <= arr.length; i++){
// //         if(arr[i] > larg){
// //             larg = arr[i];
// //         }
// //     }
// //     return larg;
// // }

// // console.log(lar(arr))

// function largst(arr){
//     return arr.reduce((max,curr)=> curr > max ? curr : max);

// }
// console.log("Reuce",largst(arr));;

// // Remove duplicates
// let arra = [12,23,21312,3,23,21,3,23,213,213,22,2,2,21,21,21];

// function removeDup(arr){
//     return [...new Set(arr)];
// }
// console.log(removeDup(arra))


// let arr =[1,2,3,4,5,2,2,3,3,2,3,9,23,33,4,5,5,6,7,7];
// let orig = []
// let as =arr.reduce((acc,curr)=> {

//     if(!acc.includes(curr)){
//         orig.push(curr);
//     }
//     return orig;

// },[]);
// console.log(orig);


// Promise

let student = new Promise((resolve,reject)=>{
    let present = true;
    if(present){
        resolve("Attended marked");

    }else{
        reject("Attended not presented");
    }
})
student.then((result)=>{
        console.log("your: ", result)
}).catch((err)=>{
    console.log("Error:", err);
})  