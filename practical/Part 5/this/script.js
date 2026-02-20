// this keyword = special keywords hai, jaise ki baaki saare keyword ki value ya unka nature  same rehta hai this ki value ya nature badal jata hai
// is baat se ki app usey youse ka use kar rahe ho

// Global scope
/*
console.log(this); // this ki value window object hai
*/
// function scope:
    /*
    function hello(){
        console.log(this); // this ki value window object hai
    }
    hello();
    */
// object scope:

    /*
    let obj = {
        name : "Rahul",
        age : 25,
        hello : function(){
            console.log(this.age); // this ki value object hai
        }
    }
    obj.hello();
    */

// event handle ise value element hote hi

/*
document.querySelector("button").addEventListener("click",function(){
    console.log(this.style.backgroundColor ="red"); // this ki value window object hai
})
*/

// class ke andar this value object hote hai jo blank rahete hai.
// class me blank object hote value .

    /*
    class Abcd{
        
        constructor(){
            this.a =12;
            console.log("heye")
            console.log(this)
        }
    }
    new Abcd();
    */


// call apply bind
// function ko call karte waqt aap set kr skte ho ki uski this ki value kya hogi

// call
let obj2 ={
    names: "vraj",
    age: 21
};
/*
function abcd() {
    console.log(this.age)
  }
abcd.call(obj2)
*/
// call 2 : when calling a function you can pass many parameter.
/*
function abcd(a,b,c) {
    console.log(this,a,b,c)
  }
abcd.call(obj2,1,2,3)   // <-here calling the function with parameter.
*/

// apply : here we pass in an array

function abcd(a,b,c) {  
    console.log(this,a,b,c);
}

abcd.apply(obj2,[1,2,31])




// bind : here it give a new copy of function, and that new function is object.
function abcd(a,b,c) {  
    console.log(this,a,b,c);
}

let newAbcd = abcd.bind(obj2,1,2,3)
newAbcd();





// Note:
// this always take value from it parent component.
/*
    SO in global scope this = window.(Parent)
    function scope me this = window (Parent)
    object scope me this = object(Parent hai this ka)
    event handler me this = element (Parent hai element jiske andar this declare hai.)
*/



// method = a function that is inside a object
    // object -> function  = method 

// Global scope:

// this ki value window object hai

// function scope:

// this ki value window object hai

// object scope:

// this ki value object hai