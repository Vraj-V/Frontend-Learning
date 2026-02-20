
function Namez(){
let input = document.getElementById("input");
let result = document.getElementById("para");
result.innerHTML= "YOur name is: "+input.value;
result.style.color = "red";
    input.value = "";
}

/*we learn
1. name cannot be function name because it is a keyword only use in varialble
2. [.value ] is use when you want take user input value.
3. [innerHTML] is used when you want display the data in web browser using Js
4. you cannot add style to variable to object directly first you need seperate them to beign,
    wrong
        let result = document.getElementById("para").innerHTML= "YOur name is: "+input.value;
    Reason:
        Here the input value is directly  storing in the result variable not giving the word to style.
    
    Right way
    let result = document.getElementById("para");
    result.innerHTML= "YOur name is: "+input.value;

5. when you refresh the input value bar after each search you need to assign input.value in other way , not directly to one variable who is taking id value .
Meaning : if you add
let input = document.getElementById("input").value;
it wil work, but when you want to refresh the bar you need to give to different variable.

        */