// Q1 find largest number in Array.
function arrlargest(arr){
    let largest = arr[0];

    for(let i =1; i < arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let array = [10,20,40,80,100,20,120,230,140,500,23];
console.log(arrlargest(array))