// function digicount(n){
//     let count =0;

//     while(n >0){
//         n = Math.floor(n/10);
//         count++;
//     }

//     return count;
// }

// let num =123242;
// console.log(num,"Count is :", digicount(num));


// Frequency count;

// function freqcount(arr){
//     let freq ={};

//     for(let i =0; i < arr.length; i++){
//         if(freq[arr[i]]){
//             freq[arr[i]]++
//         }else{
//             freq[arr[i]] = 1
//         }
//     }
//     return freq;
// }

// let arr = [231,232,2,1,3,2,1,2,1,4,42,2,3,4,5,1];
// console.log(freqcount(arr));


// largest function
function largestsum(arr){
    let largestsm = arr[0] + arr[1];
    let firstindx =0;
    let secondindx =1;
    for(let i =0; i < arr.length; i++){
        for(j =1; j < arr.length; j++){
            sum = arr[i] + arr[j];
        
        if( sum > largestsm){
            largestsm =sum;
            secondindx = arr[j];
            firstindx = arr[i]
        }
    }
}
    return {largestsm, firstindx, secondindx};
}

let arr = [1000,20,30,50,60,160];
console.log(largestsum(arr));