console.log("connected!");

// let btn = document.querySelector("#btn")
// btn.classList.add("btn")

// debounce
/*
function debounce(fnc,delay){
    let timer;
    return function (...args) { 
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fnc(...args);
        },delay);
    }
}
let input = document.querySelector("#search")
input.addEventListener(
  "input",
  debounce(function(){
    console.log("hey hey", Date.now());
  }, 2000)
);
*/




/****************************************************************************************************************************************************************/





// throttle:
// whenever is typing or accessing the component/element is must run the function every 2sec, and once user don`t perform any activity stop,
// why not user SetInternval()

// See the of setInterval() example

/*
let count =0;
let time = setInterval(()=>{
    count++;
    console.log(count)
    if(count === 5){
        clearInterval(time)
        console.log("Count finish")
    }else{
        console.log("Count running")
    }
},1000)

*/


/*output

    5
    Count finish
    6
    Count running
    7
    Count running

*/

// Throttle Example.

/*

console.log("Throttle running")
function throttle(fnc,delay){
    let timer =0;
    return function (...args) {
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args);
        }
    }
}

let input = document.querySelector("#search");
input.addEventListener("input", throttle(function () { 
    console.log("Hey you`r live here")
},2000))

*/