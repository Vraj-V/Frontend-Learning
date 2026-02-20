console.log("connected!");
// Reverse the number ,string,and array/

/*Analyse :
1. declare a num;
2. declare a reverseNum variable.
    //login 
        there is no reverse() method for num, it work only for array,so
        we convert num into string. //num.toString();       //Output: "121333"
        then once string we split to make in array. //num.toString().split("");       //Output: ['1','2','1','3','3','3'];
        Now this is in array so we use .reverse() method to reverse.                 //Output: ['3','3','3','1','2','1']
        now use .join("") to convert array in number ;                              //Output : 333121

*/

// Number reverse
let num = 121333;
let ReverseNum = num.toString().split("").reverse().join("");
// console.log(num)
// console.log(ReverseNum);

// String
let str = "Vraj Valand";
str = str.toUpperCase().trim();
let reverse = str.split("").reverse().join("");
// console.log(str);
// console.log(reverse);

// Array
// Note using reverse() this will revere the original array as well.
let Big = ["vraj","vivek","Kamlesh"];
console.log(Big)
let reverses = Big.reverse();
console.log(reverses);
