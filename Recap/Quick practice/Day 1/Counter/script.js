console.log("connected");


/*Steps:

    1. declare a counter function()
    2. inside a counter() declare a increment() and decrement() function.
    3.return the insider functions
    4.check the validation condition, for decrement if num < 0 //throw error or alert();
    
    // Important
    
    # call counter () and declare inside a counter = variable
    # Now this counter (variable) just contain the function of counter
    # using counter.increment() and counter.decrement() you are calling insider function
    # this hide the code complexity and value of main counter.


    5. render all buttons
    6. render p = result paragraph
    7.all button in forEach loop
    8. separate btn by parameter
    9. add event Listener to buttons
    10. check with id of button
    11. based on that add if-else(){}
    12. check id of button e(param of fnc).target.id;
    13. declare increment() and decrement visealy
    14. to result using .textContent = count.increment;
 */
function counter() {
    let count =0;
    function increment() {
        count ++;
        return count;
    }

    function decrement() {
        if(count >0){
            count--;
            return count;
        }else{
            alert('cannot decrement below Zero');
            return count;
        }

    }

    return{
        increment,
        decrement
    }
}

let count = counter();

console.log(count.increment())
console.log(count.increment())
console.log(count.decrement())
console.log(count.decrement());
// console.log(counter().increment())



let buttons = document.querySelectorAll("button");
let result = document.querySelector("#result");
result.textContent= 0;

buttons.forEach((btn)=>{
    // console.log(btn);
    btn.addEventListener("click",function(e){
        console.log(e.target.id);

        if(e.target.id === "inc"){
            result.textContent = count.increment();
            
        }
        if(e.target.id === "dnc"){
            result.textContent = count.decrement();
        }
    })
})