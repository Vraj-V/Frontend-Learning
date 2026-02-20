console.log("connected");

let h1 = document.createElement("h1");
document.body.prepend(h1);
h1.textContent= "Txt will display here.";


let p = document.createElement("p");
document.body.append(p);



let h4 = document.createElement("h4");
document.body.appendChild(h4);

let count =0;
let interval = setInterval(function (param) {
    if (count <5  ){
        count++;
        h4.textContent = count;
    }else{
        clearInterval(interval);
        h4.textContent = " completed"
    }
},1000)

setTimeout(function () {
    p.textContent= "hello vraj , sorry for wait."
  },5000)