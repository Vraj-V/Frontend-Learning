function arrsmall(arr){
    let smallest = arr[0];

    for(let i =1; i <arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

let array = [0,-20,-40,80,100,20000,1920,-230,140,500,23];
console.log(arrsmall(array))