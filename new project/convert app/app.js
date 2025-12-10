function convert(){
    let num = document.getElementById("meter").value;
    let result = num * 100; // Convert meters to cenitmeter

    let display = document.getElementById("result"); // Display the result
    display.innerHTML = num + " meters is  " + result + " centimeters.";
}