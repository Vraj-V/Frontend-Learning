// // // q1
// // // console.log([]==![]);

// // // console.log(typeof(null));
// // // console.log(typeof(undefined));

// // // q2
// // // function ab(){
// // //     return;
// // //     {
// // //         Name: 'vraj'
// // //     }
// // // }
// // // console.log(ab());
// // // console.log(ab());

// // // fix 
// // /**
// //  * function ab(){
// //     return {
// //         Name: 'vraj'
// //     }
// // }
// //  */

// // // q3 sum =30, give index of array that help to achieve the sum

// // // let arr = [14,12,18,3,16];
// // // let sum =30;
// // // let index =[];

// // // for(let i = 0; i < arr.length; i++){
// // //     for(let j = i+1; j < arr.length; j++){
// // //         if(arr[i] + arr[j] === sum){
// // //             index.push([i,j]);
// // //         }
// // //     }
// // // }

// // // console.log(index);

// // // let n = 5
// // // let num =1

// // // for(let i =1 ; i <= n; i++){
// // //     let row =''
// // //     for(let j= 1; j <= i;j++){
// // //         row =+ num;
// // //         num++;
// // //     }
// // //     console.log(row)
// // // }
 


// // let arr = [12,123,1231,123];

// // // arr.map((e)=>{
// // //     console.log(arr);
// // // })
// // // console.log(arr)

// //  arr.forEach(e => {
// //     let count = e + 2;
// //     console.log(count);
// // });
// // console.log(arr);

// let arr = [10,123,1231,123];

// // let result =arr.filter(e=>{
// //     return e>20 
// // }   )

// // console.log(result);

// let result = arr.find(e=>{
//     return e>20
// })

// console.log(result);


function a(b){
    return (c)=>{
        return b+ c;
    }
}

console.log(a(3));
