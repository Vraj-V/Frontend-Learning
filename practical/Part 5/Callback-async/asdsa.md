🚦 1. Synchronous (Sync) — One-by-One Execution

👉 JavaScript executes one line at a time, in order.
👉 It waits for each line to finish before moving to the next.

This is called Blocking because the next line is blocked until current finishes.

 2. Asynchronous (Async) — Non-blocking
    JS does NOT wait for the task to finish.
    It starts a task → moves to next line → finishes task later.

    Good for long tasks like:
        fetching API
        setTimeout
        database calls
        file reading
        This is called Non-blocking execution.


3. callback
    What is a Callback?

    A callback is a function passed as an argument to another function
    It is executed later, usually after some task completes (async).

Simple Example:
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback function
}

greet("Vraj", function() {
  console.log("Welcome!");
});

Output:
Hello Vraj
Welcome!


The second function (callback()) is executed after the first one → that's a callback.
    Q. Why Do We Need Callbacks?

    They allow us to run code after an asynchronous operation finishes, such as:
        setTimeout
        reading files
        fetching API
        database operations
        animations

    Q. What is callback pattern?
    Callback Pattern =  Take a function → pass another function → call it when done.

    Q. Callback Hell (The Big Problem)
        Callback hell happens when:
        👉 You have too many nested callbacks,
        👉 Code becomes messy, unreadable, hard to maintain.
        
        function() {
            function() {
                function() {
                    function() {
                    }
                }
            }
        }