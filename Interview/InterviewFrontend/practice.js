// // function removeDup(n){
// //     let arr =n;
// //     let orignal = [];
// //     let result =  arr.reduce((acc,curr)=>{
// //         if(!acc.includes(curr)){
// //             orignal.push(curr);
// //         }
// //         return orignal;
// //     },[])


// //     return result;
// // }

// // console.log(removeDup([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]))


// function removeDup(n){
//     let arr = n;
//     return  new Set(arr);
// }

// console.log(removeDup([1,1,12,3,4,2,4,2,3,2,1,3,4,5,6,6,3,2,21,4,6,2,12,2,3,2]))

function removDupSort(n){
    let arr = n;

    let sortedArr = arr.sort((a,b)=> a-b);
    let original =[];
    if(sortedArr.length == 0){
        return original;
    }

    original.push(sortedArr[0]);
    for(let i =1; i < sortedArr.length ; i++){
        if( sortedArr[i] !== sortedArr[i - 1]){
            original.push(sortedArr[i]);
        }
    }
    return original;
}


console.log(removDupSort([1,1,12,3,4,2,4,2,3,2,1,3,4,5,6,6,3,2,21,4,6,2,12,2,3,2]))