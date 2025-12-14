console.log("connected  scripts");

let inputs = document.querySelectorAll("input");
let buttons = document.querySelectorAll("button");

let n1 = 0;
let n2 = 0;

async function render() {
    const operations = await import("./function.js")
    const calculators = operations.cal();

    // console.log(calculators.add(1,3));


    inputs.forEach((inp)=>{

    inp.addEventListener("input", function (e) {
        // console.log("writing");
        // console.log(e.target.id);
        let value = e.target.value.trim();
        if(value === ""){
            value = 0;
            updateNumber(e.target.id,0)
            return;
        }
        if(isNaN(value)){
            console.log("Not a number");
            alert("Not a Number")
            return;
        }

        updateNumber(e.target.id,Number(value));
        
    });
});

buttons.forEach((btn)=>{
    btn.addEventListener("click",function (value) {
        let result;
    switch(btn.textContent){
        case "+":
            result = calculators.add(n1,n2);
            break;
        case "-":
            result = calculators.sub(n1,n2);
            break;
        case "*":
            result = calculators.mul(n1,n2)
            break;
        case "/":
            result = calculators.div(n1,n2);
            break;
        case "%":
            result = calculators.module(n1,n2);
            break;
    }

    let p = document.querySelector("#value");
    p.textContent = ` Result = ${result}`;
    p.style.color = "red";
    });
});
}

function updateNumber(id,value) {
    if(id === "num1"){
        n1 = value;
    }
    if(id === "num2"){
        n2 = value;
    }
}

render()