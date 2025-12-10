console.log("connected to simple!! ");

let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
btn.classList.add("btn")

let list = document.querySelector("#list");


// Submit the input and add task.
btn.addEventListener("click",function () {
    
    if(input.value != '')
    {
        let ipt = input.value;
        console.log(ipt);

        // create a new li element.
        let task = document.createElement("li");
        list.append(task);
        task.classList.add("li")
        task.textContent = ipt;
    }
input.value= '';
})

// Remove the item from list.
list.addEventListener("click", function(e){
    let task;
    task = e.target;
    console.dir(task);
    task.classList.toggle("remove");


})