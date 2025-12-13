// Single button animation
/*
const animation_1 = document.querySelector("#animate1")
const animation_2 = document.querySelector("#animate2")
const animation_3 = document.querySelector("#animate3")

const circle = document.querySelector("#circle")

animation_1.addEventListener("click",function(e){
    console.log("Clicked for animation");
    animation_1.classList.toggle("stop");
    circle.classList.toggle("animate");

    if(animation_1.classList.contains("stop")){
            animation_1.textContent = "Stop";
    }else{
            animation_1.textContent = "Animate Now";

    }

})
*/

// My code full button:

const buttons = document.querySelectorAll(".animate-btn");
buttons.forEach((btn)=>{

    btn.addEventListener("click",function () {
        const targetId = btn.dataset.target;
        // console.log(targetId);

        const target = document.getElementById(targetId);
        if (!target) return;

        const isRunning = target.classList.toggle("animate");
        btn.classList.toggle("stop",isRunning)

        if(btn.classList.contains("stop")){
            btn.textContent ="Stop";
        }else{
            
            btn.textContent ="Run Again";
        }
    })

})






// Ai Code
// document.querySelectorAll(".animate-btn").forEach(btn => {
//   btn.addEventListener("click", () => {

//     const targetId = btn.dataset.target;
//     const target = document.getElementById(targetId);

//     target.classList.toggle("animate");
//     btn.classList.toggle("stop");

//     btn.textContent = target.classList.contains("animate")
//       ? "Stop"
//       : "Animate Now";
//   });
// });


// Engineer code:


/*
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  const btn = e.target.closest(".animate-btn");
  if (!btn) return;

  const { target: targetId } = btn.dataset;
  const target = document.getElementById(targetId);
  if (!target) return;

  const isRunning = target.classList.toggle("animate");

  btn.classList.toggle("stop", isRunning);
  btn.textContent = isRunning ? "Stop" : "Run Again";
});
*/