// Dom = Document object model 
// DOM Tree Structure : node,element,text,comment.
// 1st must select element HTML,2nd how to change text, 3rd how to add CSS ,4th how to add attriute, 5th event listeners add karna
// DOM manipulation

// 1st Selecting element by js
    // document.querySelector("") ||  document.querySelectorAll("") || document.getElementById("") || document.getElementsById("").

    /*
            let query = document.querySelector("h1"); // This select the first h1 tag only.
            let classs = document.getElementsByClassName("new"); //it will select all elements with class names
            let ids = document.getElementById("new");   // it select the element with the id in it.
            let nw = document.querySelectorAll("h3");


            // console.log(query) //Output: <h1 id="new">New 1</h1>
            // console.dir(query)    //Output : h1#new [it show all dirctory used in that query therefore it written as h1 {element} and # with element name."new"]

            // console.log(classs)     //Output :HTMLCollection [h2.new]0: h2.newlength: 1[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
            // console.dir(classs)     //Output : HTMLCollection(1)

            // console.dir(ids)    //output : h1#new /it contain all h1 listed property been used to make 
            // console.log(ids) //output : h1#new /it contain all h1 listed property been used to make 

            console.log(nw)     //output: NodeList(3) [h3, h3, h3] 
            console.dir(nw)     //Output; NodeList(3)0: h31: h32: h3length: 3[[Prototype]]: NodeList
    */

    // 2nd Text/Content access
        // innerHTML || innerText ||textContent.

        /*
        let h1 = document.querySelector("h1")
        console.dir(h1)
        h1.textContent = "vraj change the text";

        let funs = document.getElementById('new');
        // console.dir(funs)
        funs.innerHTML = "<i> hey </i>"

        let v = document.getElementsByClassName("sea");
        v[0].innerHTML = "<b>new box</b>";
        console.log(v)

                // why v[0] works but not v?
                // because of output is in object with property like this one:
                // HTMLCollection [h2.sea]
                //              0: h2.sealength: 1[[Prototype]]: HTMLCollection
                // Okay so you can on [0] : we have all the Html property, so we need to access the key in order to change or acces the value of Html in "document.getElementsByClass"

        let h3 = document.querySelectorAll("h3");
        h3.forEach((item) => {
        item.innerHTML = "<u>new line</u>";
        });
        console.log(h3);


                // why this not working?
                // h3.innerHTML = "<u> new line </u>"
                        //document.querySelectorAll(".h3") returns a NodeList (like an array of elements).
                        // You can`t  directly set innerHTML on the whole list — each element must be updated individually.
                        // ✅ Fix: Loop through the elements:

        */

    // Attribute Manipulation

        // SetAttribute("") : this set new attribute to an element|| getAttribute("") : it help fetch the value of an attribute of given element   ||removeAttribute("") : it remove the attribute from the elements.
    /*
        // 1st directly seting a attribute value with help of method and objects.
            // let a = document.querySelector("a")
            // console.dir(a);
            // a.href ="https://www.google.com"

        //2nd Using SetAttribute
            
            // let a = document.querySelector("a")
            // a.setAttribute("href","https://www.google.com")

        // 3rd fetch the value of an attribute.
            
            // let a = document.querySelector("a")
            // console.log(a.getAttribute("href"))
            // Output: https://www.google.com
        
        //4th remove attribute.

        let a = document.querySelector("a")
        console.log(a.getAttribute("href"))
        console.log(a.removeAttribute("href"))
        */

// Dynamic DOM Manipulation 
    // createElement || appendChild || removeChild || prepend
/*
    //createElement : this can help to create any element you want.But you use .body or container you want inside to display,using append or prepend, otherwise it will not display in the web page.

            // let n = document.createElement("h1")
            // console.log(n)
            // n.textContent ='new line';
            // document.body.prepend(n);  //this will add the line or element at above or starting.
            // document.body.append(n);   //this will add the line or element at below or ending.

    //appendChild: merge an element inside give container based on give prepend/append position.
        let v = document.createElement("h3")
        console.log(v)
        v.innerText ="new hai ere"
        document.querySelector('div').append(v)     //Output of append and appendchild while be same. but it only output of the Variable ,Not a string.
        document.querySelector('div').appendChild(v)
        document.querySelector('div').prepend(v)    //Output will the top of the container or body.

    //remove child
    v.remove();
*/

// Styling with DOM
    // .style = you add css direct in js  ||classList = you have written extenally css in file or .html , you can access the css by using class of of the element ,from which actually css is given
/*
    // 1st style
            // let div = document.querySelector("div")
            // let v = document.createElement("h1")
            // v.innerText ="New line added!"
            // div.append(v)
            // console.dir(v)
            // v.style.color= 'white'
            // v.style.backgroundColor= 'red'

    //2nd classList.
    
        let v = document.createElement("h3")
        v.innerHTML="<i> new deeeeeeeed</i>"

        let div = document.querySelector("div")
        div.append(v);
        v.classList.add("enjoy")    //this add the externall css property written for class will add to this element 'v'
        v.classList.remove("enjoy") //this remove the externall css Property written for class will remove the property only .
        v.classList.toggle("enjoy") //this toggle mean if property is added -> it removes and if remove->it will add.
*/

//pracice
// display all li element in console and change the color.
/*
let ques = document.querySelectorAll("li");
ques.forEach((value)=>{
    console.log(value.textContent);
    let v = value; //why value because we need all li each element,and we have prpty as value which will all attribute of li, after using style we can change attribute.
    v.style.color='red'
    v.style.fontSize='24px'
})

// we need use loop in order to access each element of li. because we have use queryselectorAll. 
// 2nd fecth img src and update.
        let img = document.querySelector("img")
        console.log(img.getAttribute("src"))
        console.log()
        img.setAttribute("src","Part 2\Screenshot_27-10-2025_143547_www.bing.com.jpeg")
*/