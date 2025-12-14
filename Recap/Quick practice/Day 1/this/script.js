
console.log("this!!");

const User ={
    user: [
        {Name : "vraj"},
        {Name : "Vivek"}
    ],
    sayName: function () {
        return this.user.map((user)=>user.Name);
    },
    checkUser: function (e) {
        let found = false;
        this.user.forEach((user)=>{
            if(user.Name === e ){
                found =true
            }else{
                found = false
            }
        });
        if(found){
            console.log("found you")
        }else{
            console.log("not you ")
        }
    }
}

console.log(User.sayName());
console.log(User.checkUser("Vivek"));