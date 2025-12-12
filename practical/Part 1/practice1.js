//Q1. Print 1 to 100 using loop.
//Ans:
/*
        for (let i =1; i< 100; i++){
            console.log(i);
            }
*/

//Q2 Reverse the string.
//ANs:
    //Function method
    /*
    function ReverseString(str){
            return str.split('').reverse().join('');
        }
        console.log(ReverseString("hello"));

    // Direct declaration
        let a = "jeaas"
        let b = a.split('').reverse().join('');
        console.log(b)
        // split() coverts the string-> array , reverse() -> it reverse the words, join () makes it a string again
        // You cannot make a chain pattern to obtain the reverse number.
        */

// Q3 CHECK IF A STRING IS A PALINDROME OR NOT.
// ANS;
    // A palindrome reads the same backward and forwards
    /*
    function isPalindrome(Str){
        const reverse = Str.split('').reverse().join('');
        return Str === reverse;
    }

    console.log(isPalindrome("madam"));
    console.log(isPalindrome("nitin"));
    console.log(isPalindrome("vraj"));
*/

// Q4. Find the factorial of a number.
//Ans:
/*
        function factorial(n){
            let fact =1;
            for (let i =1; i<=n ;n++){
                fact *= i;

            }
            return fact;
        }
        console.log(factorial(5));
*/

// Q5 FInd the largest nummber in an array.
// Ans;
/*
        function findLargest(arr) {
            let largest = arr[0];
            for (let i =0; i < arr.length; i++){
                if(arr[i]> largest) largest = arr[i]
            }
            return largest
        }
console.log(findLargest([12,669,233]))
*/

// Q6. Count the vowel use in a string..
// ANs;
/*
        function countVowels(str){
            const vowel = "aeiouAEIOU";
            let count =0;
            for (let ch of str){
                if(vowel.includes(ch)) count++;
            }
            return count;

        }

        console.log(countVowels("Vraj is human being , and alive."));
        */

// Q7. Check if the number is prime or not.
// ANs;

    /*
    function isPrime(num){
        if (num <2) return false;

        for (let i =2; i < Math.sqrt(num);i++){
            if( num % 2 === 0) return false;
        }
        return true;
    }

    console.log(isPrime(122));
    console.log(isPrime(3));
    */

// Q8. Generate a fibonnaci series up to n terms.
// Ans;
/*
    function fibonnaci(n){
        let fib = [0,1];
        for (let i =2; i<n; i++){
            fib[i] = fib[i -1] + fib[i -2];
        }
        return fib.slice(0,n)

    }
    console.log(fibonnaci(12));
    */
    
    //Each term = sum of previous two.

// Q9 Find the sum of all elements in an array.
// ans;
/*

    function sumArray(arr){
        let sum =0;
        for (let num of arr){
            sum += num;
        }
        return sum;
    }
    console.log(sumArray([12,2,21,23,22]))
*/

// Q10. Remove Duplicate number from the array.
// ANs;
/*
    function RemoveDuplicate(arr){
        return[ ...new Set(arr)];
        // "Set" set automatically stores only unique value.NO duplicate allow.
    }
    console.log(RemoveDuplicate([1,2,2,22,21,12,12,31,21]))
    */