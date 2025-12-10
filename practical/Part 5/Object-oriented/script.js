console.log("connected");

// Function Constructor
/*
function CreateText(name,price,company,time,color){
    this.Name = name;
    this.price = price;
    this.company = company;
    this.time = time;
    
}

CreateText.prototype.value ="Employee"
CreateText.prototype.write = function (text) {
        console.log(text)

        let h1 = document.createElement("h1");
        document.body.appendChild(h1);

        h1.textContent = text
        h1.style.color = color;
    }

let doc = new CreateText("Vijay",30,"Bajaja",15.30,"red")
let doc1 = new CreateText("Kumar",40,"Gajaaj",25.30,"blue")
doc.write("jumeesas");
doc1.write("su khe che");
doc.write("gand mai ussjo ensahank benchond");
doc1.write("baccha twiarri");
*/

//Class Constructor
class CreatePencil{
    constructor(name,brand,price,company,color){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.company = company;
        this.color = color;

    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);

    }
}

let p1 = new CreatePencil("Nataraj","Cello",10,"Cello","black")
let p2 = new CreatePencil("3Ds","Cello",10,"DOms","red")