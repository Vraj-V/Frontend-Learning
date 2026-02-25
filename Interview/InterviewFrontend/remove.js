// let arr = [1,2,2,4,34,2,2,3,4,21,12,1,2,3,2,1,12,2,12,12,12,32,123,2,123,];

// .reduce
// function removingDupreduc(arr){
//     let origin = []
//     //this return give for main function which removingDupreduce
//     return arr.reduce((acc,curr)=>{
//         if(!acc.includes(curr)){
//             origin.push(curr);
//         }
//         return origin;  // this return is giving for ()=> , early we were never returning anything here, that it why it give error, because it expect an output for there function so we send origin ,
//     },[])
// }

// console.log(removingDupreduc(arr));

// .filter method:
let arr = [1,2,2,4,34,2,2,3,4,21,12,1,2,3,2,1,12,2,12,12,12,32,123,2,123,];

function removingdupfilter(arr) {
    let result =[];

    let output = arr.filter((e)=>{
        let isDuplicate = false;

        for(let j =0; j< result.length; j++){
            if( e === result[j]){
                isDuplicate = true;
                break;
            }

        }
    if(!isDuplicate){
        result.push(e);
    }

    return false;
    })

    return result;
    }

    console.log(removingdupfilter(arr));
