// Form validation : when we want to check validatization for the input from form.


/* 1st reading values from input, textarea,select
    2nd Prevent default submission
    3rd inline and JS based validation
    4th Showing error messages conditonally
    5th pattern attribute and custom regex

    regex is form validation written in grammer form of context. CFG.
    example:
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a=zA-Z]{2,}$/;

    this check the email format
    . must be a-z letter || capatiable accept || 0-9 accept numbers |. ,% ,+ ,- accepted 
    . must have @
    . must be a-z letter || capatiable accept || 0-9 accept numbers |. ,% ,+ ,- accepted  and it must have 2 or more words.
    

    // check for wheather name is correct in length or not.
    //code:
    
        let form  = document.querySelector("form");
        let nm = document.querySelector("#name");

        form.addEventListener("submit", function (e){
            e.preventDefault();

            if(nm.value.length <= 2 ){
                document.querySelector("#hide").style.display = "block";
                console.log("name is small")
            }else{
                document.querySelector("#hide").style.display = "none"
                console.log(nm.value);
            }
        })

*/

let form  = document.querySelector("form");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reading values
    let info = document.querySelector("#info").value;
    console.log("Name:", input[0].value,
        "email:", input[1].value,
        "Password:", input[2].value,
        "age:", input[3].value,
        "Info:", info);

    // Clear old errors
    document.querySelector("#UsernameError").textContent = '';
    document.querySelector("#emailError").textContent = '';
    document.querySelector("#passwordError").textContent = '';
    document.querySelector("#ageError").textContent = '';

    let isValid = true;

    // Name validation
    const nameRegex = /^[a-zA-Z0-9]{3,6}$/;
    if (!nameRegex.test(input[0].value)) {
        document.querySelector("#UsernameError").textContent = "UserName is incorrect";
        document.querySelector("#UsernameError").style.display = "block";
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(input[1].value)) {
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "block";
        isValid = false;
    }

    // Password validation
    const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#$%&^*])[A-Za-z\d@$!%?*#&^]{8,}$/;
    if (!PasswordRegex.test(input[2].value)) {
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.display = "block";
        isValid = false;
    }

    // Age validation
    const age = input[3].value;
    if (age < 18) {
        document.querySelector("#ageError").textContent = "You are too young";
        document.querySelector("#ageError").style.display = "block";
        isValid = false;
    }

    // Final result
    if (isValid) {
        let n = document.querySelector("#result");
        n.textContent = "Good to go!";
        n.style.color = "green";
    }

    // Clear inputs
    input.forEach(function (e) {
        if (e.type != "submit") e.value = "";
    });
});
