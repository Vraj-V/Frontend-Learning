console.log("connected");


// code for Function method
/*
function CreateEmployee(name,age,gender,phone,position,salary,color){
    this.Name = name;
    this.age = age;
    this.phone = phone;
    this.position = position;
    this.salary = salary;
    this.color = color
    
}

// Function prototype for connect
CreateEmployee.prototype.connect = function (text,color) {
        let h1 = document.createElement("h1");
        h1.textContent = `Loggin ${text}`;
        h1.style.color = this.color;  //we use `this` here because we are taking parameter from object "CreateEmployee".
        document.body.appendChild(h1);
        }

CreateEmployee.prototype.project ="React-Native"
let empolyee1 = new CreateEmployee("Vraj",23,"Male","795432164","Frontend-Dev",25000);
let empolyee2 = new CreateEmployee("Vivek",25,"Male","91545213545","Backend-Dev",25000);


console.log(empolyee1.Name)
console.log(empolyee2.Name)
*/

// Class constructor
/*
class CreateObj{
    constructor(name,age,color){
    this.Name = name;
    this.age = age;
    this.color = color;
    }

    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1)
    }

    erase(){
        document.body.querySelectorAll("h1").forEach(function (param) {
            param.remove()
        })
    }

    select(){
        document.body.querySelectorAll("h1").forEach( (param)=> {
            if(param.style.color == this.color){
                param.remove();
            }
        })
    }
}

let obj1 = new CreateObj("vraj",21,"black");
let obj2 = new CreateObj("vraj",21,"red");

console.log(obj1.Name)
*/



// Extend and super class use case:
/*
class User{

    constructor(name,age,color,role){
        this.Name = name;
        this.age = age;
        this.color = color;
        this.role ="user"
    }

    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = `${this.Name} :${text}`;
        h1.style.color = this.color;
        document.body.appendChild(h1)
    }
}

class Admin extends User{
    constructor(name,age,color){
        super(name,age,color);
        this.role ="admin";
    }
    remove() {
            document.body.querySelectorAll("h1").forEach( function (element) {
                element.remove();
            })
        }
}
let user1 = new User("vraj",21,"black");
let user2 = new User("vivek",23,"red");


let admin = new Admin("Ceo",32,"green");
console.log(user1.Name)
console.log(admin.role);
admin.write("Hey from admin");
*/


// Inheritance
// classical inheritance
// Same as above of Extend and Super line (74-101)

// prototypical inheritance: you a object can use the property of other Object.

let coffee ={
    color: "dark",
    drink: function () {
        console.log("see see");
        
        }
}

let coldCoffee = Object.create(coffee);
coldCoffee.color = "cold";
console.log(coldCoffee.color);
console.log(coldCoffee.drink());