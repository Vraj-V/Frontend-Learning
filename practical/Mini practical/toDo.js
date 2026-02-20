console.log("connected!! ");

let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
btn.classList.add("btn")

let list = document.querySelector("#list");
let clearBtn = document.querySelector("#clear")
let items = [];
let removeItems = [];
// Window reload show the save data.

window.addEventListener("DOMContentLoaded", function () {
    let savedItems = JSON.parse(localStorage.getItem("tasks")) || [];
    let removeItem = JSON.parse(localStorage.getItem("remove")) ||[];

    savedItems.forEach((e) => {
        let li = document.createElement("li");
        li.textContent = e;
        li.classList.add("li");
        
        //if the item was cancel

        if(removeItem.includes(e)){
        li.classList.add("remove")
    }
    list.append(li)
    });
});


clearBtn.addEventListener("click",function () {
    localStorage.clear();
    console.log("All local storage data cleared!");
    location.reload();
  })

btn.addEventListener("click",function () {
    if(input.value != ''){
    let ipt = input.value;
    console.log(ipt);
    let task = document.createElement("li");
    list.append(task);
    task.classList.add("li")
    task.textContent = ipt;

    items.push(ipt)
    localStorage.setItem("tasks" , JSON.stringify(items));
    }else{
        alert("no task enter")
    }
    input.value= '';
})

list.addEventListener("click", function(e){
    let task;
    task = e.target;
    console.dir(task);
    task.classList.toggle("remove");

    if(task.classList.contains("remove")){
        removeItems.push(task.textContent);
        localStorage.setItem("remove" , JSON.stringify(removeItems));
        console.log("add to array ",task)
    }
})
