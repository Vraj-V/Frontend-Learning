//  objects: we create when we want everything about a particular entity or a single object. Must written in {}
    // Array : when we all entity to display.
    // Example   Array dog = [shepard,bulldog] this are types of dog.

    /* object.
    dog ={
        name : 'craj',
        age: 21,
        type: bull,
        eat: milk
    }
    */
//    Object creation
    // let obj = {
    //     shape: "circle",
    //     radius: "20cm",
    //     diameter: "40cm",
    //     border: 3
    // }

    // Object access method.
    //1st
    // let size = obj.radius;
    // console.log(size)
    // 2nd: why we use this method . let say.
    // let b = "border"
    // b is variable, b is not present inside the object.so if we write directly by " .b" it will not work because "b" is not inside the object so we add[] 
    // because we can access the array.

    // let rule = obj[b]
    // console.log(rule)

// Destructing of an object

// let object = {
//     name: "vraj",
//     age: 21,
//     number: 91512654,
//     college:{
//         batch : 23,
//         course :{
//             sem : 7,
//             subject: ['Ai','ML','DSA','CS']
//         },
//     },
// }

// let {sem, subject} = object.college.course
// console.log(sem)
// why we write this because "object.college.course" writting everytime become confusion and diffculty to manage, so we create a variable, and 
// specificy the object parameter path, we can achieve the deserve output.

// Object looping

// for in
    let obj2 = {
        name : "vraj",
        age: 21
    }
    console.log(obj2)
// Access the keys of object .
    for (let key in obj2){
        // console.log(key)
    }

    // Accessing the value of object.

    // for (let key in obj2){
    //     console.log(key, ":", obj2[key])
    // }

    // Object.keys
        // this method give the key value of given object
    // let n = Object.keys(obj2)
    // console.log(n)

    // Object.entries
        // this give value of object.
        // let j = Object.entries(obj2);
        // console.log(j)


// Copying the object values

// 1st ... (spread ) operator method.
    // let k = {...obj2};
    // console.log(k)

// // 2nd Object.keys
//     let y = Object.assign({price : 200},obj2,{lastname:"valand"})
//         console.log(y)

// // 3rd deep clone
// let obj4  = JSON.parse(JSON.stringify(obj2))
// console.log(obj4)



// Option chaining
// we use this system is not sure, wheather the property of object,or key is present inside the object or not,so this use
// when we send request to backend , instead of give error, it give undefenied.

// let v = obj2?.names?.agess;
// console.log(v);

// // Practice question
// //  Q1 access the "first-name" inside this obj

        // let ob ={
        //     "first-name": "vraj"
        // }
        // console.log(ob["first-name"])

// Q2. GIVEN A DYNAMIC KEY LET KEY  = 'AGE'(VARIABLE) ,HOW WILL YOU ACCESS USER[KEY].

let key ='age';
const obe ={
    age :21
}
console.log(obe[key])
// obe[key]  we used.


// Q3 How will handle if value of object is undefined and how will prevent from error .
// Ans: let say in obj2 age is written as age, but when giving to a variabel you give 'ages' it will thrown and error to prevent we use option chaining method to prevent from throughing any error.
let j = obj2?.ages
console.log(j)
let a = obj2?.age
console.log(a)


// if key /value is present it will give output || undefined


// Use a variable to dynamically assign a property

const keys = 'role'
let o = {
    name:"veaj",
    [keys] : "admin"
}

console.log(o.role)