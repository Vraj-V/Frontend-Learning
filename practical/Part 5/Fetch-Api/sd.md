✅ What is Fetch API? (Very Simple)

Fetch API = a built-in JavaScript tool used to get data from servers.

It allows your JS code to:
request data
wait for the response
read that data
Just like going to a website and downloading information — but using JavaScript.

🎯 Simple Example
        fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => console.log(data));

What happens?

fetch() goes to the URL
the server sends back some data
.json() converts it to JavaScript object

you print it

🧠 Even Simpler Explanation

Think of fetch like placing an order on Swiggy:

You send request → fetch(url)
Restaurant prepares it → server processes
Delivery boy brings it → Response
You open the package → .json()

You use the food → your code uses data

🔥 Fetch with async/await (cleanest)
        async function getData() {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
        }

        getData();

📌 Why do we use Fetch?

Because it:

✔ Makes API calls easy
✔ Returns Promises (so works with async/await)
✔ Is built into browsers (no need for libraries)
✔ Sends GET/POST/PUT/DELETE requests

📦 Fetch POST Example (sending data)
        fetch("https://api.example.com/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Vraj" })
        })
        .then(res => res.json())
        .then(data => console.log(data));

🧩 Summary (Super Simple)

Fetch = JavaScript way to talk to servers and get/send data.
