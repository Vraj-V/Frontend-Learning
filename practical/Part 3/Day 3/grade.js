console.log("cones");

// Grade of student 

/**/

let student =[{
    name: "vraj",
    age: 23,
    marks: 78
},
{
    name: "vivek",
    age: 21,
    marks: 88
},
{
    name: "masnu",
    age: 22,
    marks: 98
}
]

getGrade=(mark)=>{
    if(mark >= 90 && mark <=99){
            return "A";
        }
    if (mark >=80 && mark <=89) {
        return "B"
    } 
    if (mark >=70 && mark <=79) {
        return "C"
    }
    if (mark >= 50 && mark <= 69) {
        return "D"
    }
    else {
        return "Fail"
    }
}

student.forEach((e) =>{
    // console.log(e.marks);
console.log(e.name+" "+getGrade(e.marks))})