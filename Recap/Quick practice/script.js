// Question1. Create 3 variables: your name, age, and student status (true/false). Print all in one sentence.

/*
let myname = "vraj";
let myage = 22;
let isStudent = true;

console.log("myname is : " +myname+ " my age is : " +myage+ " i am student: " +isStudent);
*/

//Question2 : Write a function that takes a value and prints its exact data type.

// let input = prompt("Enter a value");
//console.log(input+ " type is "+(typeof(input)));

// Wrong method , because in web browser, all the value is string type.


/*

3️⃣ OPERATORS

Take two numbers and print:

sum

difference

multiplication

which number is bigger?

which number is smaller?
*/

/*

let num1 = prompt("Enter a number");
let num2 = prompt("Enter a number");

let sum = parseInt(num1) + parseInt(num2);
let diff = num1 - num2;
let mul = num1 * num2;

console.log("The sum of the numbers is " +sum);
console.log("The difference of the numbers is " +diff);
console.log("The multiplication of the numbers is " +mul);

if(num1 > num2){
    console.log("The bigger of the numbers is " +num1);
}else{
    console.log("The bigger of the numbers is " +num2);
}



if(num1 < num2){
    console.log("The smaller of the numbers is " +num1);
}else{
    console.log("The smaller of the numbers is " +num2);
}
    */


/*

4️⃣ CONTROL FLOW

Write a program that checks:

if age < 18 → “Minor”

18–60 → “Adult”

60 → “Senior”
*/

/*
let age  = prompt("Enter your age");
if(age < 18){
    console.log("Minor");
}else if(age >= 18 && age <= 60){
    console.log("Adult");
}else{
    console.log("Senior");
}

*/


// Print numbers from 50 to 100, but only even numbers.

// for (let i =50; i <=100; i++){

//     if(i %2 == 0){
//         console.log(i);
//     }
// }

// Make a function calculateBill(amount, taxPercent) returning final amount.

/*

function calculateBill(amount, taxPercent){
    let finalAmount = amount + (amount * (taxPercent / 100));
    return finalAmount;
}
console.log("The final amount is " +calculateBill(1000, 10));
*/

/*
7️⃣ ARRAYS

Given let nums = [2,5,7,8,10]:
print only even numbers
create a new array with values doubled
find sum using .reduce()
*/
/*
let num = [2,5,7,8,10];
// print only even numbers

num.map((e)=>{
    if(e % 2 == 0){
        console.log(e);
    }
})

// create a new array with values doubled
let newarr = num.map((e)=>{
    return e * 2;
})
console.log(newarr);


// find sum using .reduce()


let sum = num.reduce((a,b)=>{
    return a + b;
},0)
console.log(sum);
*/


/*
8️⃣ OBJECTS

Create an object car with brand, model, price.
Add a method discount() that returns price – 10%.

*/

/*
let car = {
    brand: "BMW",
    model:"XSS",
    price: 100000,
    discount(){
        return this.price - (this.price * 0.1);
    }
}

console.log(car.discount());
console.log(car.brand);
*/

/*
9️⃣ DOM

Create a button in HTML.
When clicked, change the background color of the page.
*/
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("blue");
// });


/*
🔟 EVENTS

Create an input box.
When user types, show live text below it.
*/
/*

let inp = document.querySelector("#inputs");
let result = document.querySelector("#result");

console.dir(inp);

inp.addEventListener("input",()=>{
    console.log(inp.value);

    result.innerHTML = inp.value;
})

*/

/*
1️⃣2️⃣ STORAGE

Save a user’s name in localStorage, then load it and display:

Welcome back, username!

*/

let buttons = document.querySelector("#btn")
let userName  = document.querySelector("#inputs")
let result = document.querySelector("#result")

buttons.addEventListener("click", () => {
    localStorage.setItem("name",userName.value);
    console.log(localStorage.getItem("name"));
    result.innerHTML = "Welcome back, " + userName.value;
userName.value =''
})
window.addEventListener("keypress", (e)=>{
    if (e.key === 'Enter'){
    localStorage.setItem("name",userName.value);
    console.log(localStorage.getItem("name"));
    result.innerHTML = "Welcome back, " + userName.value;
    userName.value =''
    }
})

window.addEventListener("DOMContentLoaded", () => {
    
    result.innerHTML = "Welcome back, " + localStorage.getItem("name");
})
