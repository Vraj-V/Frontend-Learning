class YouTube{
    constructor(cname){
        this.subscribers =[];
        this.channelName = cname
    }

    subscriber(user){
        this.subscribers.push(user);            //push = name ❌error   this means you are assign a value not pushing the array.
                                                // push(name) ✔ correct because is function now a variable
        console.log(`${user.name} you have subscribed to "${this.channelName}"`)
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub)=> sub !== user)
        console.log(`${user.name} you no longer subscribed to ${this.channelName}`)
    }

    notify(message){
        this.subscribers.forEach((user) =>{
            user.update(message)
        });

    }
    showUser(){
        this.subscribers.forEach((user)=>{
            console.log(`${user.name}`);
        });
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(` ${this.name} Msg From Channel: ${data}`);
    }
}

let Gamer = new YouTube("GamerZ");

let user = new User("Vraj");
let user2 = new User("Vivek");

Gamer.subscriber(user);
Gamer.subscriber(user2);
Gamer.notify("Hello Guys! Welcome to the channel")

console.log("new");