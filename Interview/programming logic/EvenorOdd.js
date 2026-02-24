function EvenoOdd(arr) {
    let even =[];
    let odd = [];

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] % 2 ===0){
            even.push(arr[i]);
        }
        else{
            odd.push(arr[i]);
        }
    }

    return {odd, even};
}

let arras = [21,2,212,10,23,211,2322,2134];
console.log(EvenoOdd(arras));
