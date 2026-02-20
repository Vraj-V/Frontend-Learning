// default , reset. and spread operators for funnction

        /*
        function abc(){
            console.log("hello vraj from function")
        }
        abc()

        // 2nd type to write function

        let val = function(){
            console.log(" \n new line from 2nd function")
        }
        val()

        // 3rd type to write a function

        let vale = () =>{
            console.log(" \n 3 way to write a function")
        }
        vale()

        */


// parameters in function

        // 1 default paramters
            /*
            function add( v1,v2){
                console.log(v1,v2);

            }
            add() 
            */
            // output : undefined undefined 
            // this is default value to beign with

        // 2. rest
            /*
            function add (...val){
                console.log(val)
            }
            add(1,2,3,4,5,6,7,8)
            */

// Return.

        // function add(){
        //     return "hello";
        // }
        // console.log(add())


// High order function

        // this become high order function because when we abcd function is called for it val() for we declare we need in abcd () , but when call it has another function 
        // inside it so our val = new empty function(), that is why it is high order function.

        // 1 way 
        // function abcd(val){
        //     val()
        // }
        // abcd(function () {
        //     console.log("hello from lower function.")
        //   })

        //   2nd way
        // function abd(){
        //     return function () {
        //         console.log("hello from return high order function")
        //     }
        // }
        // abd()();
        // we need declare () () because there is return function inside so, () will call abd function, and () will call empty function of return.  





// Pure vs Impure function

        // Pure func : aisa func jo ki bahaar ki value ko naa badle wo hai pure func.
        // impure func: aise fucn jo bahaar ki value ko change kare vo impure func.

        /*
                let a =12;
                function newe(){
                    console.log("vnw")
                }
                newe();
        */

        // impure function

        // let a=12;
        // function ada() {
        //         a++;
        //     }
        //     ada();
            // Here a value of variable is change so, it is impure function because a was declare outside the function


// Closures : ek func jo return kare ek aur function aur return hone waala function humesha youse karega parent func ka koi variable.

    /*
            function add() {
                let a =12;
                return function () {
                    console.log(a+1)
                }
            }
            add()();
      */

// Lexical scoping : a variable of parent can access the other variable inside the function of parent , a can access scope of ad2(), ad3() variable, same with ad2 () variable b has
//  access of c.
/*
        function ad1(){
                let a=12;
            function ad2(){
                let b;
                    function ad3(){
                        let c;
                    }
            }
        }
    */

// IIFE (): here is func is declare without using a name, and we call function in empty call and works.by wrapping into ()
        /*
            (function () {
                console.log("'asfaff")
            })();
        */

// Hoisting : you can call func before initialization.

        // correct way 
                // abcd();


                // function abcd(){
                //     console.log("hello form")
                // }

        // wrong way not work if you are using expression or arrow function to declare.
  
                // abcd()
                
                // let abcd =function(){
                //     console.log("esff")
                // }
                // Output: ReferenceError: Cannot access 'abcd' before initialization



    // Practice Question
    // BMI calculator 
    /*
    function bmi( weight, height){
        return weight /(height* height)
    }
console.log(bmi(56,1.7).toFixed(3))
    */

    // Reusable Discount calculator.
    
    function discount(discount){
        return function (price) {
            return price - (price * (discount)/100)
          }
    }
    let discounter = discount(10)
console.log( `Your discount number 10% and final amount is = ${discounter(1200)}`)