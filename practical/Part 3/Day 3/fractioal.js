console.log("cesa");
// Factorial 

/*Analyses =
1. take input from user using prompt or by creating element as input. declare in a num variable.
2. declare fact =1 as a variable.
3. run for loop (let i =1;i <= num;i++):
4.          fact = fact * i;
5. exit loop
6. print the fact output.
*/
let num = prompt("enter your number: ");
let fact =1;

for(let i =1; i <= num;i++){
    fact = fact *i;
}
console.log("your factorial is :" +fact);