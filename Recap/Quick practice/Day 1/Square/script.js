console.log("Connected Square");
// function for square
/*  Steps:

    1.  Accept num from user
    2. return num *num;
    3. create p element
    4. declare a result variable
    5. add text to p = result(variable);
    6. design it
    7. must handle by button click
    8. add class = result to p for style using classList.add();
    */  


    function square(num){
        return num *num;
    }

    let btn = document.querySelector("#button");
    let p = document.createElement("p");
    btn.addEventListener("click", function(e){
        e.preventDefault();
        let input = document.querySelector("input");
        let numbers = input.value.trim();


            p.textContent = "";

        // throw alert is input is empty
        if(numbers === ""){
            alert("Nothing written")
            return;
        }

        // throw an alert is input.value is not a number is isNanN()
        if(isNaN(numbers)){
            alert("Enter a number");
            return; 
        }

        console.log(input.value);
        let nums = Number(numbers);

        let result = square(nums);
        p.textContent = `Result : ${result}`;
        p.classList.add("result")
        document.body.appendChild(p);
        input.value ='';
    })