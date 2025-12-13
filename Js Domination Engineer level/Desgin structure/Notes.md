Design pattern:
Define how well your code is structured and how it is organized.

1. moderilarized pattern
2. iife = immediately invoke function execution
3. Revealing pattern
4. Factory object pattern
5.Observe pattern =
Below is a **single, full, professional `README.md`** for the **entire `Design-structure` repository**.
It is detailed, structured, interview-ready, and beginner-friendly, with **use cases, explanations, example code, and working description**.

You can place this file at:

```
Design-structure/README.md
```

---

# 📦 JavaScript Design Patterns – Design Structure

## 📌 Overview

This repository demonstrates **core JavaScript design patterns** using **plain JavaScript (Vanilla JS)**.
Each pattern is implemented in its **own isolated folder** with:

* `index.html` – to run and test in the browser
* `script.js` – pattern implementation
* `README.md` – pattern-specific explanation

The goal of this repository is to **understand structure, scope, encapsulation, and behavior**, not frameworks.

---

## 📁 Folder Structure

```
Design-structure/
│
├─ Factory-Pattern/
├─ IIFE-Pattern/
├─ Modularization-Pattern/
├─ Observer-Pattern/
└─ Revealing-Pattern/
```

Each folder is **independent** and can be opened directly in the browser.

---

## 🧠 Why Design Patterns Matter

Design patterns:

* Solve **common problems** in a reusable way
* Improve **code readability and maintainability**
* Reduce **tight coupling**
* Are commonly asked in **interviews**
* Help you scale from small scripts to real applications

---

# 1️⃣ Factory Pattern

## 📖 Definition

The **Factory Pattern** is used to create objects **without exposing the creation logic** to the client.
Instead of using `new` everywhere, object creation is handled by a **factory function**.

---

## 🎯 Use Cases

* Creating users with different roles (admin, guest, editor)
* Creating UI components dynamically
* Object creation based on conditions
* Reducing repeated `if / else` logic across code

---

## 🧩 Example Code

```js
function UserFactory(type) {
  if (type === "admin") {
    return {
      role: "Admin",
      permissions: ["read", "write", "delete"]
    };
  }

  if (type === "guest") {
    return {
      role: "Guest",
      permissions: ["read"]
    };
  }
}

const user = UserFactory("admin");
console.log(user.permissions);
```

---

## ⚙️ How It Works

1. Client requests an object
2. Factory decides **which object to create**
3. Factory returns the object
4. Client never knows how the object was built

---

## ✅ Benefits

* Centralized object creation
* Cleaner and scalable code
* Easy to add new object types

---

# 2️⃣ IIFE Pattern (Immediately Invoked Function Expression)

## 📖 Definition

An **IIFE** is a function that runs **immediately after being defined**, creating a **private scope**.

---

## 🎯 Use Cases

* Avoid polluting global scope
* Create private variables
* Initialization code
* Library/module setup

---

## 🧩 Example Code

```js
(function () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  increment();
  increment();
})();
```

---

## ⚙️ How It Works

* Function is wrapped in parentheses
* Executed immediately using `()`
* Variables inside are **not accessible outside**

---

## ✅ Benefits

* Data privacy
* No global variables
* Safe execution

---

# 3️⃣ Modularization Pattern (Module Pattern)

## 📖 Definition

The **Module Pattern** uses closures to create **private data** and exposes **public methods**.

---

## 🎯 Use Cases

* Managing users, carts, state
* Encapsulating business logic
* Avoiding accidental data modification

---

## 🧩 Example Code

```js
const UserModule = (function () {
  let users = [];

  function addUser(name) {
    users.push(name);
    console.log(users);
  }

  return {
    addUser
  };
})();

UserModule.addUser("Vraj");
```

---

## ⚙️ How It Works

1. IIFE creates private scope
2. Private variables stay hidden
3. Public methods are returned as an object

---

## ✅ Benefits

* Strong encapsulation
* Controlled access
* Clean API

---

# 4️⃣ Observer Pattern

## 📖 Definition

The **Observer Pattern** creates a **one-to-many relationship** where multiple observers react to changes in a subject.

---

## 🎯 Use Cases

* Event listeners
* Notifications
* Pub/Sub systems
* State management
* UI updates

---

## 🧩 Example Code

```js
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  notify(message) {
    this.observers.forEach(fn => fn(message));
  }
}

const observer1 = msg => console.log("Observer 1:", msg);
const observer2 = msg => console.log("Observer 2:", msg);

const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Update available");
```

---

## ⚙️ How It Works

1. Observers subscribe to subject
2. Subject state changes
3. Subject notifies all observers
4. Observers react automatically

---

## ✅ Benefits

* Loose coupling
* Highly scalable
* Reactive systems

---

# 5️⃣ Revealing Module Pattern

## 📖 Definition

The **Revealing Module Pattern** is an improved Module Pattern where **private functions are defined first**, and only selected ones are exposed clearly.

---

## 🎯 Use Cases

* Cleaner APIs
* Large modules
* Easier debugging
* Team-based projects

---

## 🧩 Example Code

```js
const CounterModule = (function () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function reset() {
    count = 0;
    console.log("Reset");
  }

  return {
    increment,
    reset
  };
})();

CounterModule.increment();
CounterModule.reset();
```

---

## ⚙️ How It Works

* All logic stays private
* Only chosen methods are revealed
* Public API is clearly visible

---

## ✅ Benefits

* Better readability
* Explicit public methods
* Easier maintenance

---

## 🚀 How to Run

1. Open any pattern folder
2. Open `index.html` in browser
3. Open **DevTools → Console**
4. Interact with buttons or logs

---

## 🎯 Best Practices Followed

* No global variables
* One pattern per folder
* Simple and readable code
* Real-world inspired examples
* Browser-compatible JavaScript

---

## 📌 Next Improvements (Optional)

* Convert to ES Modules
* Add TypeScript versions
* Add real-world projects per pattern
* Add UML diagrams

---

## 🧠 Interview Tip

If asked:

> “Do you know design patterns?”

You can confidently say:

> “Yes, I’ve implemented Factory, Module, Observer, and Revealing patterns in pure JavaScript with working examples.”

---

If you want:

* **Individual detailed README per folder**
* **Interview questions + answers**
* **Real-world projects using these patterns**

Say the word and we’ll level this up.
