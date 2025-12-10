function split(){
    let amount = document.getElementById("amount").value;
    let person = document.getElementById("person").value;

    let result = (amount / person).toFixed(2);
    document.getElementById("result").innerHTML = "Each person should pay: " + result;
 
    amount.value ='';
    person.value = '';
}
