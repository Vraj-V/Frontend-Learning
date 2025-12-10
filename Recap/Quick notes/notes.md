JavaScript Quick Recap – Theory Notes


1. Variables and Declaration
   - JavaScript uses var, let, and const to create variables.
   - let and const are block-scoped; var is function-scoped.
   - const cannot be reassigned for primitive values.
- 
2. Data Types and Type System
   - JavaScript has primitive types: string, number, boolean, undefined, null, bigint, symbol.
   - Non-primitive type: object (includes arrays, functions).
   - Type conversion happens automatically in some operations.

3. Operators
   - Arithmetic: +, -, *, /, %, **.
   - Comparison: ==, ===, !=, !==, >, <, >=, <=.
   - Logical: &&, ||, !.

4. Control Flow
   - if, else if, else used for conditional decisions.
   - switch used for multiple condition branches.
   - Ternary operator offers short alternative syntax.

5. Loops
   - for loop runs a block of code a specific number of times.
   - while and do-while loops run based on conditions.
   - for...of loops through arrays; for...in loops through objects.

6. Functions
   - Functions allow reuse of code and accept parameters.
   - Arrow functions offer shorter syntax.
   - Functions can return values and form the call stack.

7. Arrays
   - Arrays store ordered lists of values.
   - Common methods: push, pop, shift, unshift, slice, splice.
   - Higher-order methods: map, filter, reduce.

8. Objects
   - Objects store key-value pairs.
   - Properties can be accessed using dot notation or bracket notation.
   - Methods are functions inside objects; they can use 'this'.

9. DOM (Document Object Model)
   - DOM allows interaction with HTML elements using JavaScript.
   - Selectors: getElementById, querySelector, querySelectorAll.
   - Common actions: change text, style, classes, attributes.

10. Events
    - Events respond to actions like click, input, submit.
    - addEventListener is used to attach events.
    - Event object contains information about the interaction.

11. Forms and Validation
    - Forms capture user input for processing.
    - Validation ensures fields are correctly filled.
    - event.preventDefault() prevents page reload on submit.

12. Timers and Intervals
    - setTimeout runs code once after a delay.
    - setInterval runs code repeatedly until cleared.
    - clearTimeout and clearInterval stop the timers.
    - 
13.  LocalStorage / SessionStorage / Cookies
     - localStorage stores key-value pairs permanently.
     - sessionStorage stores data until tab is closed.
     - Cookies store data with expiration and are sent to the server.




<!-- Important -->

window.addEventListener("keypress", (e)=>{
    if (e.key === 'Enter'){
    localStorage.setItem("name",userName.value);
    console.log(localStorage.getItem("name"));
    result.innerHTML = "Welcome back, " + userName.value;
    userName.value =''
    }
})


if you want add a feature like when press enter, use these steps:

1. Use window.addEventListener("Event", function(parameter){})
2. select Event as a = keypress.
3. pass parameter = e
4. inside the function give if-else (condition){ //action statement }
5. condition = 'e.key === "Enter"' then perform action.
