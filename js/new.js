//     let result ={
//         vraj:79,
//         shiv: 80,
//         ankit: 81,
//         ansh: 82
//     }
//     for (let i =0; i<Object.keys(result).length; i++) {
//         console.log("The marks of " ,Object.keys(result)[i]+ " are " +result[Object.keys(result)[i]]);

//     }

// for (let i = 0; i < Object.keys(result).length; i++) {
//     let name = Object.keys(result)[i];
//     console.log("This is", name, "and mark is", result[name]);
// }


// let name = "vraj";
// let marks = 79;

// console.log('name ',+ name);
// console.log('marks'+ marks);



 
// let cn = "vraj";
// let marks;
// marks = prompt("Enter your marks");

//  while(marks <= 50) {
// console.log("You have failed, please try again");
// marks = prompt("Enter your marks again");
// }
// console.log("The marks of " + cn + " are " + marks);

//  mean of 5 numebers
// taking input from user and calculating the mean of 5 numbers

// let num1 = parseFloat(prompt("Enter number"));
// let num2 = parseFloat(prompt("Enter number"));
// let num3 = parseFloat(prompt("Enter number"));
// let num4 = parseFloat(prompt("Enter number"));
// let num5 = parseFloat(prompt("Enter number"));

// mean =(a,b,c,d,e) => {
//     let sum = a+ b + c + d + e;
//     let result = sum / 5;
//     return result;
// }
// console.log("The mean of the numbers is " + mean(num1, num2, num3, num4, num5));


// without using prompt

// function mean(a, b, c, d, e) {
//     let sum = a + b + c + d + e;
//     let result = sum / 5;
//     return result;
// }
// const num1 = [10,20,30,40,50];
// console.log("The mean of the numbers is " + mean(num1[0], num1[1], num1[2], num1[3], num1[4])); // declaring the numbers in an array 
// console.log("The mean of the numbers is " + mean(10,10,20,20,30)); // declaring the numbers directly

// use of trim and concat

let friend= "        vivek         "
let name =" Vraj valand";
console.log("The friend is",friend.trim());

    console.log(" the friend is",name.concat("\n",friend.trim()));

for (let i=0;i<name.length;i++){
    console.log(name[i]);
}