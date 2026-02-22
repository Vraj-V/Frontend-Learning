// console.log("run");

// let a =12;
// function clickings() {
//     a++
// }

// Closure


// function clos(){
//     let count = 0;

//     return function inc() {
//         count++;
//         return count;

//         }
// }
// const counter = clos();
// console.log(counter)
// console.log(counter())
// console.log(counter())


// this keyword
    //1. window as global scope
console.log(this);
// function and arrow func
const user ={
    Name : 'vraj',
    age: 21,
    greet: function (){
        console.log(this.Name);
    },
    meet: ()=>{
        console.log(this.age);
    }
}
user.greet();
user.meet()

// this in reg func
function show(){
    console.log(this)
}
show()


// 5. Constructor function
function User(name) {
  this.name = name;
}
const u1 = new User("Amit");
console.log(u1.name);



