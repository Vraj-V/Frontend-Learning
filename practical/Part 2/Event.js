// Event and EventListener is used when any action handle on on web page like click,hover,double clicked and this is event and give response to that event we used event listener.
// Method to perform eventlistner
/*
    1.Select the element first, and make access of it using query,id or class whatever just select
    2.visualize an action to be perform (like click,double click or hover) and based on that action what response or reaction i have to give.
    3.add event listener give what action to accept(click) and give function.
    4.you must access a variable to addEventListner because based on give variable the action will perform and update the variable.
*/

// Event as : click,dblclick =double click, input,keyup, keydown, mouseover,mousepress,drag

/*
// click and dblclick (event)

    //Code;
        let p = document.querySelector("p")
        
        p.addEventListener("click",function(){
        p.classList.add("enjoy")
        })

        p.addEventListener("dblclick",function () {
        p.style.color = "red";
        })
        console.log(p)

// input (event) handle in event listener
This will give the letter of word you type inside an input.

    //code:
        let inp = document.querySelector("input")        
        inp.addEventListener("input", function (param) {
        // console.log(param.data);    // why param.data? // param is parameter pass inside a function which accept allow object key and its value, .data means inside a object there is key name data inside which there is text value, which store on click keywords type inside a input, so we display param.data
    })

    // Use when you dont want to show the null value when press backspace or deleting a word.
    
    let inp = document.querySelector("input");
    
    inp.addEventListener("input",function(param){
        if(param.data !== null){
            console.log(param.data);
        };
    });



//Remove Event Listener;

    //Code:
        function changeColor() {
        p.style.color='red';
    }
        function changeColors() {
        p.style.color='yellow';
    }
    p.addEventListener("click",changeColor);
    p.addEventListener("dblclick",changeColors);    //this add the event listener to js element it must need the action to accept(like click), and function must be empty in name.
    p.removeEventListener("click",changeColor);     //this remove the existing eventlistner from the js element. [removeEventListener]


//change (event) = used when you want perform action on select,option when event change based on selection,
// so change help to manage multiple changes in an element easily with "change " as addEventListener.


    //code: 
        let sel = document.querySelector("select")
        let h3 = document.querySelector("#device");
        
        sel.addEventListener("change", function(param){
            h3.textContent = `${param.target.value} this device is been selected by you.`
        })


// keydown = used when you press any key on your keywords,based on press key you handle or change the event and your output for more UX/UI like a game, press a = to start, press q to quit , like this task.
    
    //code: 
    window.addEventListener("keydown", function (dets) {
        console.log(dets.key);
        let h = document.querySelector("h1")
            if (dets.key === " "){
                h.textContent = "SPC";
            }else{
                h.textContent = dets.key;
            }
    })

    //Customize button for upload the file, with of Js, normally in an input we have "file" type which accept any file, but that  button look normally, 
    // we cannot edit or customize that general button: so we hide the input using css, and with of js whenever the user 
    //user click the new upload button it will automatically click the input field button allowing user to upload the file, and it hidden the ugly input button.
        

        //Code:
        let btn = document.querySelector("#btn");
        let file = document.querySelector("#file")
        
        //this use to show you have uploaded a file and to check open console, you see 
            btn.addEventListener("click",function(){
                file.click();
                // console.log("you click to upload.")
            })
        
        //this is you display the name of file onto the button of upload.
            fileinp.addEventListener("change",function(param){
                // console.log(param.srcElement.files[0].name);
                console.log(param.target.files[0].name)
                btn.textContent = param.target.files[0].name; //These display the file you upload on the div container
            })



//submit (submit event handling listener) : we used this when there are form or submit event or action are going to perform, steps to handle
    
    1st select the form or element that will perform the submit action,like form inside we accept input with type <input type='submit'>
    2nd add eventListener and function with parameter,
    3rd inside a function add , along with parameter like this 'param.preventDefault()' to prevent page from refresh or reloading so we can access the user input data, otherwise it will vanish in seconds.
//

    //Code:
        let form = document.querySelector("form")
        let inputs = document.querySelectorAll("input")
        let p = document.querySelector("p")
        form.addEventListener("submit", function(eve){
            eve.preventDefault();
                //This prevent page from refresh or reloading so we can access the user input data, otherwise it will vanish in seconds.

                //These display user input value and based on that we passed to p with .textContent 
            console.log (inputs[0].value,
                inputs[1].value
            );
            
            p.textContent = `Your name is ${inputs[0].value} and your age is ${inputs[1].value}`
            p.style.color = 'green'
        })

// mouseover and mouseout : this are used when you want to change the color of element based on mouse hover or mouse out.

    //Code:
        let dive = document.querySelector("div");
        dive.addEventListener("mouseover",function(){
            console.log("mouse over")
            dive.style.backgroundColor = 'green';
        })
        dive.addEventListener("mouseout",function(){
            console.log("mouse out")
            dive.style.backgroundColor = 'red';
        })
        

// mousemove = this is used the data  of our mouse movement on the screen if you have select window,other wise you can also apply in div and other element to based on mouse move data, you can move object,element inside it based on mouse movement.

    //clientY = top and bottom and clientX =left to right.
    // we are moving div based on how the mouse is moving on screen.

    //code:
        let dive = document.querySelector("#dive")
        window.addEventListener("mousemove",function (param){
            // console.log(param.clientX, param.clientY)  //show the x and y value of mouse movement.
            dive.style.top = `${param.clientY}px`;
            dive.style.left = `${param.clientX}px`;
        })
      */


/*
    Event Object : target,type and preventDefault.

    //code:
        let abcd = document.querySelector("#abcd")
        let form = document.querySelector("form");
        let inputs = document.querySelector("input")
        abcd.addEventListener("click",function(param){
            // param = [parameter] -> Event objects. these helps to get all the event objects of the element
            console.log(param.target) // used to show where the event was target  = div#abcd.
            console.log(param.type) //Used to show which enter was trigger = click
        })

        form.addEventListener("submit", function (e){
            e.preventDefault();   //used to prevent the page from reloading and refreshing.help to fetch the data of user.
        console.log(inputs.value)
            inputs.value = "";
        })
*/

/*
Event Bubbling = jispe event aayega agar uspar listener nahi hua to humaara uske parent par listener dhunfhega aur aisa krte krte
    uppar ki taraf move karega.

    //  Event bubbling : here we have addEventListener to ul, but when you click on any li element of ul div means [ul is parent, li `s are child node] so when you click on li, it trigger event listener  since there is no listener for li,
    //  it jump to parent Listener which ulist.addEventListener and it perform the parent action.
    // Usefull when you have multiple child Node , then there no need create event listener for all child , just pass the parent eventListener to handle all the task and action.
    
    //code:
            let list = document.querySelector("ul");
            list.addEventListener("click",function (param) {
                console.log(param.target)
            param.target.classList.toggle("lt")

            // why use .classList.toggle("") you see what toggle if there class it add and vice-versa by removing. when user click it add  ("lt")class , if class already applied it remove with help of
            toggle.
            //
})
*/

//Event Capturing : using we can activate the phase 1 of event handle, what happen in phase 1, it start from parent div to child element, but in 
// phase 2 it start from child to parent .

let a = document.querySelector("#a");
let b = document.querySelector("#a");
let c = document.querySelector("#a");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log("button click")
},true)

a.addEventListener("click", function () {
    console.log("a click")
},true)

b.addEventListener("click", function () {
    console.log("b click")
},true)

c.addEventListener("click", function () {
    console.log("c click")
},true) //by applying true at the end we activate phase 1 for this element, which now execute this first since it is parent element.

//   event Bubbling: when i click on button only it give output like this:
// button click
// Output:
    // Event.js:218 a click
    // Event.js:222 b click
    // Event.js:226 c click

// Event Capturing: when i click on button only it give output like this because i apply true on c first (which a parent div) :
// Output:
    // a click
    // Event.js:222 b click
    // Event.js:226 c click
    // Event.js:214 button click