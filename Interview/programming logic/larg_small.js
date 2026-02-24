function lar_small(arr){
    let largest = arr[0];
    let smallest = arr[0];

    for(let i =1 ; i< arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }

        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }

    return { largest,smallest};
}

let array = [10,200000,40,80,-1000,20,-120,2350,140,150500,23];
console.log(lar_small(array))