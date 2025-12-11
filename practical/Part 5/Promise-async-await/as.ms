🚀 1. What is a Promise? (Very Simple Explanation)

A Promise in JavaScript represents a future value.
It is used for asynchronous operations like:

    fetching data
    setTimeout
    reading files
    database operations

A Promise has 3 states:
State	Meaning
pending	Promise is running; result not ready
fulfilled	Operation succeeded → resolve() called
rejected	Operation failed → reject() called

✔ Example of creating a Promise:

  let myPromise = new Promise((resolve, reject) => {
      let success = true;

    if (success) resolve("Task completed");
    else reject("Task failed");
  });

🚦 2. Using .then() and .catch()

then() runs when resolve() is called.
catch() runs when reject() is called.

Example:
  myPromise
    .then((result) => {
      console.log(result); // Task completed
    })
    .catch((error) => {
      console.log(error); // Task failed
    });

🔥 Real Example (with random number)

  let number = new Promise((res, rej) => {
      let random = Math.floor(Math.random() * 10);

    if (random > 5) res("Accepted " + random);
    else rej("Rejected " + random);
    });

  number
    .then((msg) => console.log("Success:", msg))
    .catch((err) => console.log("Error:", err));



⭐ How .then() works in simple words:
.then()

Runs when promise is resolved
Takes the value returned by resolve()

.catch()

Runs when promise is rejected
Takes the value returned by reject()


⚡ 3. What is async and await?
async and await are cleaner ways to work with promises.
They make asynchronous code look like synchronous code.

🟢 async keyword
When you add async before a function:
👉 The function automatically returns a Promise.

Example:

async function demo() {
  return "Hello";
}

demo().then(console.log);   // prints "Hello"

🟣 await keyword

await pauses the function until the Promise settles.
But it only works inside an async function.

🔥 Example using async/await

Let’s create a promise:

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function show() {
  console.log("Start");

  let result = await getData(); 
  console.log(result);

  console.log("End");
}

show();

Output:
Start
(2 seconds wait)
Data received
End

🎯 Why async–await is better?
Callback Hell ❌
getUser(function(user) {
  getPosts(user, function(posts) {
    getComments(posts, function(comments) {
      console.log(comments);
    });
  });
});

Promise chaining 🙂
getUser()
  .then(getPosts)
  .then(getComments)
  .then(console.log);

async–await 😍 (Best & Cleanest)
async function run() {
  const user = await getUser();
  const posts = await getPosts(user);
  const comments = await getComments(posts);

  console.log(comments);
}
run();


Code looks clean, linear, and easy to understand