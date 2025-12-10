// let firstName = document.getElementById("firstName");
// let lastName = document.getElementById("lastName");
// let email = document.getElementById("email");
// let phone = document.getElementById("phone");
// let age = document.getElementById("age");
// let dob = document.getElementById("dob");
// let city = document.getElementById("city");
// let job = document.getElementById("job");

const formInput= {

    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    age: document.getElementById("age"),
    dob: document.getElementById("dob"),
    city: document.getElementById("city"),
    job: document.getElementById("job"),
    submit: document.getElementById("submit"),
}

function validateForm() {

const displayInput = {
    FirstName: formInput.firstName.value,
    Email: formInput.email.value,
    Phone: formInput.phone.value,
    Age: formInput.age.value,
    DOB: formInput.dob.value,
    City: formInput.city.value,
    JOB: formInput.job.value,
    lastName: formInput.lastName.value
}
// html styling
let container = document.getElementById("container");
container.style.display = "none";

let contain = document.getElementById("container-box");
contain.style.display = "block";


let details = document.getElementById("details");


// use of querySelectorAll to select all h3 and span elements of details class of HTML

let allH3 = details.querySelectorAll("h3");
let allSpan = details.querySelectorAll("span");


for (let i = 0; i < allH3.length; i++) {
    allH3[i].style.color = "Coral";
    allH3[i].style.fontSize = "20px";
    allH3[i].style.textdecoration = "underline";
    allH3[i].style.fontWeight = "bold";
}


for (let i =0;i<allSpan.length;i++) {
    allSpan[i].style.color ="black";
    allSpan[i].style.fontSize ="14px";
    allSpan[i].style.fontWeight = "normal";
}

//Display the input values in the HTML
document.getElementById("displayFirstName").innerHTML = "FirstName" + "  :  " + displayInput.FirstName;
document.getElementById("displayLastName").innerHTML = "LastName" + "  :  " +displayInput.lastName;
document.getElementById("displayEmail").innerHTML = "Email" + "  :  " +displayInput.Email;
document.getElementById("displayPhone").innerHTML = "Phone" + "  :  " +displayInput.Phone;
document.getElementById("displayAge").innerHTML = "Age" + "  :  " +displayInput.Age;
document.getElementById("displayDOB").innerHTML = "DOB" + "  :  " +displayInput.DOB;
document.getElementById("displayCity").innerHTML = "City" + "  :  " +displayInput.City;
document.getElementById("displayJOB").innerHTML = "JOB" + "  :  " +displayInput.JOB;


}
