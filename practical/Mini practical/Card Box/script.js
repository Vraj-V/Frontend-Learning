console.log("conntected")
let main = document.querySelector(".main");
// Kendilly
let hire_nas= document.querySelector("#hire-nas");
let message_nas = document.querySelector("#msg-nas");

// nastha
let hire = document.querySelector("#hire");
let message = document.querySelector("#msg");


let banner = document.querySelector(".banner");
let back_btn = document.querySelector("#back");
let result = document.querySelector("#result");

hire.addEventListener("click", function (param) {
    console.log("click",param);
    Display();
    result.textContent = "Thank you are contacting me kindly check your email.";
    });

message.addEventListener("click", function (param) {
    console.log("click",param);
    Display();
    result.textContent = " You are following @kendiyall212. Follow Me on Instagram for more detail.";
    });


    // Nastha
    hire_nas.addEventListener("click", function (param) {
    console.log("click",param);
    Display();
    result.textContent = "Thank you are contacting kindly check your email.";
    });

    message_nas.addEventListener("click", function (param) {
    console.log("click",param);
    Display();
    result.textContent = " You are following @Natashrmdoff312. Follow Me on Instagram for more detail.";
    });


    function Display() {
        console.log("Calling Display function");
        main.style.display="none";
        banner.style.display="flex";
    }
    back_btn.addEventListener("click",function(){
        console.log("CLicked back");
        banner.style.display="none";
        main.style.display="flex";
    })