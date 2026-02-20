console.log("connected!! ");
//Note this 
// no matter what data type is like Array, Number,string,object  Localstorage alwys save the output in String format only.
// use JSON if you convert string into array or object.


localStorage.setItem("Name","vraj");
console.log("Name : ",localStorage.getItem("Name"))

localStorage.setItem("string","valand");
console.log("string : ",localStorage.getItem("string"))

localStorage.setItem("number",21);
console.log("number : ",localStorage.getItem("number"))

localStorage.setItem("Array", [1,2,3]);
console.log("Array: ",localStorage.getItem("Array"))

localStorage.setItem("array", ["vraj","valand"]);
console.log("array : ",localStorage.getItem("array"))

localStorage.setItem("Object",{name:"vraj",age:21});
console.log("Object : ",localStorage.getItem("Object"))

localStorage.setItem("Array Object", [{name:"vraj",age:32}]);
console.log("Array Object : ",localStorage.getItem("Array Object"))

let n = "vraj";
localStorage.setItem("variable",n);
console.log("variable : ",localStorage.getItem("variable"))

let m =12;
localStorage.setItem("Number Variable",m);
console.log("Number Variable : ",localStorage.getItem("Number Variable"))

let arr =[1,2,3];
localStorage.setItem("Array Variable",arr);
console.log("Array Variable : ",localStorage.getItem("Array Variable"))

let obj ={
    name:"vraj",
    age:21
}
localStorage.setItem("Object Variable",obj);
console.log("Object Variable : ",localStorage.getItem("Object Variable"))

// String to array actual
localStorage.setItem("JSon Array", JSON.stringify(["vraj","valand"]));
console.log("JSon Object : ",JSON.parse(localStorage.getItem("JSon Array")))

// String to object.
localStorage.setItem("JSon object", JSON.stringify({name: "vraj", age:21}));
console.log("JSon Object : ",JSON.parse(localStorage.getItem("JSon object")))
