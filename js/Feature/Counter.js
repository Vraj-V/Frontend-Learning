console.log("connected");

const Counter = 0;

function Increment (){
  Counter++;
  console.log("Incremented");
}
function Decrement(){
  if(Counter >=0){
      console.log("Decremented");
    Counter--;
  }

let btn1 = document.querySelector('.btn-1');
  btn1.addEventListener('click',Increment());


let btn2 = document.querySelector('.btn-1');
  btn2.addEventListener('click',Increment());


