function seaching(arr){
    let arrayvaluepresent =[12,2,32,34,31,22,12,10];
    let search =false;
    for(let i= 0; i< arrayvaluepresent; i++){
       
        if( arrayvaluepresent[i] ===arr){

            search = true;
       }
    }
    return search;
}

let value =12;
console.log(seaching(value));