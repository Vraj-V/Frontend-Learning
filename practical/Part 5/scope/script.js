console.log("connected");

// Scope :Scope is the region or environment in which a variable is defined and can be accessed.
//          It determines the lifetime and visibility of variables and functions.

/*
🔹 Why Scope Exists

JavaScript uses scope to:

    Avoid variable name conflicts.
    Manage memory efficiently.
    Control variable accessibility.

🔹 Types of Scope in JavaScript

There are four main types of scope:

1. Global Scope:
        Variables declared outside any function or block are in the global scope.
        They can be accessed from anywhere in the program.
        In browsers, global variables become properties of the window object.

🧩 Example:

        let x = 10;  // global variabl
        function display() {
        console.log(x); // accessible here
        }
        display();
        console.log(x); // also accessible here

2. Local / Function Scope

    Variables declared inside a function are local to that function.
    They cannot be accessed outside that function.
    Created when the function is called and destroyed when it ends.

🧩 Example:

    function show() {
    let y = 20; // function scope
    console.log(y); // accessible
    }
    show();
    console.log(y); // ❌ Error: y is not defined

3. Block Scope (ES6)

    Introduced with let and const.
    A variable declared inside a block { ... } is only accessible inside that block.
    Not accessible outside that block.

🧩 Example:

    {
    let z = 30; // block scope
    console.log(z); // ✅ accessible
    }
    console.log(z); // ❌ Error: z is not defined


Note: var does not have block scope; it has function or global scope.
*/

// Global scope
/*
var a = 10;
console.log(a);
*/

// Function scope   : it will not the variable outside the function, var b was created inside a function, so it can be accessed inside the function only.


/*
function display() {
    var b = 20;
}
// console.log(b); //Wrong method
                // Right method Below:

// display();
// console.log(b);
// Error: Uncaught ReferenceError: b is not defined
*/
// Block scope:     it will not the variable outside the block, var c was created inside a block, so it can be accessed inside the block only.


/*
{
    var c = 30;
}
console.log(c);
*/


// Lexical scope :  it will not the variable outside the lexical scope,
// var d was created inside a lexical scope, so it can be accessed inside the lexical scope only.


/*
function ad1() {
    var d = 40;
    function ad2() {
        var e = 50;
        function ad3() {
            var f = 60;
        }
    }
}
console.log(d);
console.log(e);
console.log(f);


// Error: Uncaught ReferenceError: d is not defined


*/

// Execution content:
/* Js sabse pahle jaise hi appka function dekha hai sabse pahle  js banaata execution context , ye ek process hai jo ki do different phasess mein
chaltie hai, memory phase and doosre ka naam hai execution phase.

*/
//  it create a box that contain variable, function, etc, use for execution that Js create..
// There are  2 phase of execution context : memory and execution phase.

// Abstract: means something that you can touch or see  but you can feel it existence. Example air = Abstract , pencil = not abstract.


// Closure hote hai function jo kisi parent fnc ke andar ho aur andar waala function return ho raha ho , and returning fnc youse
// kare , parent function ka koi variable

function abcd(){
    let count =0;
    return function(){
        count++;
        console.log(count);
    };  
}

let fnc = abcd();
console.log(fnc())
console.log(fnc())
console.log(fnc())
// console.log("ensa")

//Lexical scoping
/*
function bc() {
    let a =12;
  function bcs() {
    console.log(a);
    }
    bcs()
}
bc()

*/
// dynamic scoping
let a =12;
function sad(){
console.log(a);
}

function asd() {
    let a =13;
    sad();
}

asd();