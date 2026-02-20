// Array;

// create, access , modify.
//create.
// 1st way to declare
    /*
        let arr = new Array();
        arr = [1,2,3,4,5,5]
        console.log(arr);

    // 2nd way 
        let array = [12,213,31231];
    console.log(array)
    */


// ACCESS 
/*
let newarr = [12,231,3123124];
console.log(newarr[0])
console.log(newarr[1])
console.log(newarr[2])
console.log(newarr[3])
*/
// Modify
/*
let array = [3,3212,1231,31,231];
console.log(array)
let num = array[1] = 12312;
console.log(num)
console.log(array)
*/

// Methods
// push ,pop,shift, unshift : Used this when you want add or remove element from the array.
let array  = [12,312,41,231]
let arr = [21,13,211,23,2131,1231,12]
let suns = ["abcd","bcde","fghi","jklm"]
let asb = "asfsdsez"
        // array.push(1213)
        // console.log(array)
        // array.pop()
        // console.log(array)
        // array.shift()
        // console.log(array)
        // array.unshift(123)
        // console.log(array)

// Splice : it divide the array  value  from between into something , and display only speficiy part but does not create a new array.
        
        // let splice = array.splice(2,1);  // HEre .splice( 2 = from which index we want to remove, 1 = how much value we want to remove.)
        // console.log(splice)

// slice method : it used to slice the array to desire output. it create a new array. which the has sclie value.

        // let slice = array.slice(0,2);  //here .slice( 0 = starting index value,2 = number of slice upto the index value.)
        // let slice = array.slice(0,2,"22")
        // console.log(slice)


// reverse:

        // let reverse  = array.reverse();                             //Reverse method when number inside an array. also reverse the main array too
        // let srs = suns.reverse();                                   //Reverse method when words inside an array.
        // let sunsas = b.split('').reverse().join('');                //Reverse method when words inside a string.
        // console.log(reverse);
        // console.log(srs);
        // console.log(sunsas);

// Sort : it help to store elements from ascending to descending, it also take as a function.

                // let ascending = array.sort(function (a,b){
                //         return a - b;
                // });
                // let descending = arr.sort(function (a,b){
                //         return b - a;
                // })

                // console.log("ascending :",ascending);
                // console.log("descending :",descending);


/* for each loop : it will create a loop and run the code inside the loop for each value individually.
example :
                let arr = [12,23,21,13,131]
                arr.forEach(function(val){
                        console.log(val + 1);
                })

Explain:
        now  here on each value we see +1 to each value, it run loop of each value of value. But it affect the main array, means after this value
        of main array will be change.
        */


//Map : it accept in function only.it only use when we want a new array,based on main array data value.

        // let arrays = [12,211,231,311,2131,121]
        // let n = arrays.map(function (val) {
        //         if(val >100){
        //                 return val -50;
        //         }
        // })
        // console.log(n)
        //Output:  [ undefined, 161, 181, 261, 2081, 71 ]
        //when the value does satisfy the condition, or any other value is given is replaced ( like else ), till it shows undefined

// filter : it will work only inside a function, and it works similary like a map, and for each only it have condition of "true" or "false", 
// based on that it will filter the values. 
        
        
        /*
        let f= arrays.filter(function (val) {
                if (val === 12) return true
        })
        console.log(f)
        */


// reduce : it requies function, it used to add the value of array with each other to give the sum of array.
        //  it must have accumulator = stores the previous value and update the new val.

        // let r = array.reduce(function (accumulator,val){
        //         return accumulator + val;
        // }, 0);
        // console.log(r)

// find; it require a function,it used to find the value inside the array, it show wheather it represent the value or not.
        /*
        let find = array.find(function (val){
                if (val > 100) return val
        })
        console.log(find)
        */

// some ; it require function, used when you want find more than one value inside an array. give true or false as only output.

 

// let some = array.some(function (val) {
//         if (val >100 ) return val;
//   })
//   console.log(some)


// Destructing array; it will destruct the array and we can access any value partically in a array,
        // let ar = [23,1212,3131,3,1231]
        // let [a,b,...c] = ar     //this will remove a,b as separate index value, and give remain value inside an array.
        // let[e,f, ,g] =ar        //this will remove the middle value"3131" and display 3 directly.
        // console.log(a,b,c)
        // console.log(e,f,g)

        let fruits = ["apple","banana"];
        fruits.pop();
        fruits.push("kiwi")
        console.log(fruits)

        // pop,push,shift,unshift are js method