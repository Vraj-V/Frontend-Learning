let counter =0;
let countvalue = document.getElementById("counter");


function increment() {

    counter++;
    countvalue.innerText = counter;
}

function decrement() {

    if (counter > 0) {
        counter--;
        countvalue.innerText = counter;
    }
    else {
        alert("Counter cannot be less than 0");
    }
}


// USe case of each code

// 1. Increment the counter when the increment button is clicked
// 2. Decrement the counter when the decrement button is clicked
// 3. Display the current counter value in the countvalue element
// 4  document.getElementById("counter");  = this is used to get the element with id "counter" from the HTML document
// 5  counter++;  = this is used to increment the counter variable by 1
// 6  countvalue.innerText = counter;  = this is used to update the text content of the countvalue element with the current counter value
// 7. Alert the user if they try to decrement the counter below 0
// 8 counter--;  = this is used to decrement the counter variable by 1

