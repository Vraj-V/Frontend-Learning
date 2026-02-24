// q4 reverse without .reverse()

function reversing(arr){
    let reverse =[];

    for( let i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i]);

    }

    return reverse;
}

let arr =[120,121,21,12];

console.log(reversing(arr));
console.log("Original Array: ",arr);
