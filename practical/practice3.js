// Rock, paper and scisssor.

function rps(user,computer){
    if (user === computer) return draw;

    if(user === "rock" && computer ==="scissor") return "user win";
    if(user === "scissor" && computer ==="paper") return "user win";
    if(user === "paper" && computer ==="rock") return "user win";
return "computer win"
}
console.log(`This winerr is : "${rps("rock","scissor")}"`);