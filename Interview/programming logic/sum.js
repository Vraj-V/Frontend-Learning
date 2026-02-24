function sums(arr){
    let sum =0;

    for(let i =0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let array = [2,2,2,-2,2];
console.log(sums(array));