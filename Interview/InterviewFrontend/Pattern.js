// Square pattern
// logic : in order to create a square we need row and column, which give height and length to the square, and we need outer loop and inner loop
// (i,j) and based on that we create a square pattern


// function squarePattern(n,m){
//     let rows =n;
//     let columns = m;

//     for(let i =0; i < rows;i++){
//         let line =''
//         for(let j =0; j < columns; j++){
//             line += "* "
//         }
//         console.log(line);
//     }
    
// }
// console.log(squarePattern(4,3));

// Number pattern

function patternNum(n){

    for(let i =1; i < n; i++){
        let line =''
        for(let j =0;j<n;j++){
            line += `${i}`
        }

        console.log(line)
    }
}

console.log(patternNum(3));