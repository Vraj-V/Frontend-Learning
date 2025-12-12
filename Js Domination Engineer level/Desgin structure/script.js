console.log("Connected");

// Modelizaration function
/*
let user = (function(txt){
    let Name = "Vraj";

    function greet() {
        console.log("Hello " , Name);
    }
    function drink() {
        console.log("You are drinking water ", Name)
      }
// YOu must and only can return one val. 
    return{
        greet,
        drink
    }

    // return is passing an object.
})();

console.log(user);
// Here you see two function inside an object, because when you return on "user" you has an object as result using {}. 
// so it become and object, and that is why it has 2 value in return,
// but one Object only, which satisfy but condition.
user.greet();
user.drink();

*/

// iife = immediately invoke function execution = this func executed immediately.
/*
let user2 = (function (param) {
    let age = 121;
    console.log(age);
  })() // <---here see () this is empty function call.

//   this function will execute immeditaely without call because at the end we have already called 
*/

// Revealing design pattern
/*
let user3 = (function(texts){
    let phone = 123123123123;
    let Name = texts;
    function showNumber(){
        console.log( Name +" Your Number is : ", phone);

    }
    function message(txt) {
        console.log("Your message : ",txt)
    }

    return{
        number: showNumber,
        sms : message
    }
})("Vraj");

user3.sms("Hey chitt");
user3.number();

*/

// Factory object design

function createProduct(name, price) {

    let stock =12;


    let h2 = document.createElement("h2");
    document.body.appendChild(h2);
    
    return{
        name,
        price,
        checkStock(){
            console.log("Our Stock in inventory : ", stock)
            h2.textContent = ` stock is  left : ${stock}.`
        },
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`You brought ${qty} and remaining stock is ${stock} left.`)
                h2.textContent = `You brought ${qty} and remaining stock is ${stock} left.`
            }
        
        },
        refill(qty){
            if(qty > 10){
                stock += qty
                console.log(`we have now added ${qty} and current stock is ${stock}`);
                h2.textContent = `we have now added ${qty} and current stock is ${stock}`
            }
        }
    }

}
let iphone = createProduct("iPhone",70000);
console.log(iphone);        //return an object.
iphone.buy(2);
iphone.refill(13);

let samsung = createProduct("samsung",25000);
console.log(samsung);       //return an object.
console.log(samsung.name)
samsung.checkStock();
// Here createProduct is Factory function, which will new object as return based on parameter.
// both iphone and samsung have same function working for then, like buy(),refill(),checkStock()

// So you a general function for all phone decide what parameter you accepting and based on that you can create various phone data.
// Working like a class Constructor or simple function construction
// check Part 5/Object-oriented for that.


// Basically you dont have write different function iphone () and another function samsung(),
// which has the same parameter, this save your time a lot. By giving a general function as main function().