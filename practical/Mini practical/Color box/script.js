console.log("connected!");

let body = document.body;
let input = document.querySelector("#colorInput");
let btn = document.querySelector("#btn");


const colorNames = {
    "#ff0000": "Red",
    "#00ff00": "Green",
    "#0000ff": "Blue",
    "#ffff00": "Yellow",
    "#ffa500": "Orange",
    "#800080": "Purple",
    "#000000": "Black",
    "#ffffff": "White"
};


window.addEventListener("DOMContentLoaded", function(){
    let color = localStorage.getItem("color");
    let colorName = localStorage.getItem("colorName");
    if(color){
    document.body.style.backgroundColor = color;
        }

    if(colorName){
        document.getElementById("colorName").textContent =
        "Color: " + colorName;
    }

})


changeColor = () =>{
    
    let color = input.value.trim();

    if (color === ""){
        alert("Please enter a color");
        return
    }

    console.log("input : ", color);
    body.style.backgroundColor = color;

    localStorage.setItem("color", input.value);
    
    
    let name = colorNames[color] || color;
    document.getElementById("colorName").textContent =
    "Color: " + name;


    localStorage.setItem("colorName", name);
    
    input.value ='';
}


btn.addEventListener("click", changeColor);

input.addEventListener("keydown", function (param) {
    if(param.key === "Enter"){
        changeColor();
    }
  })