function bmical(){
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");

    let result = weight.value/(height.value* height.value);
    result = result.toFixed(2);

    if(result < 18.5){
        document.getElementById("result").innerHTML = "You are underweight. 😌";
        document.getElementById("result1").innerHTML = "Your BMI" + result;
        result1.style.display = "block";

    }
    else if(result >= 18.5 && result < 24.9){
        document.getElementById("result").innerHTML = "You have a normal weight. 😎";
                document.getElementById("result1").innerHTML = "Your BMI" +result;
                result1.style.display = "block";
    }
    else if(result >= 25 && result < 29.9){
        document.getElementById("result").innerHTML = "You are overweight. 😯";
                document.getElementById("result1").innerHTML = "Your BMI" + result;
                result1.style.display = "block";

    }
    else{
        document.getElementById("result").innerHTML = "You are obese. 😱";
                document.getElementById("result1").innerHTML = "Your BMI" + result;
                result1.style.display = "block";


    }
}