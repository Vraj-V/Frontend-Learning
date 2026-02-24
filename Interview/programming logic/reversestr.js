function reverstr(arr){
    let reverse =''

    for(let i = arr.length -1; i >= 0; i--){
        reverse += arr[i];
    }
    return reverse;
}

let sas = 'vasdds';
console.log(reverstr(sas));