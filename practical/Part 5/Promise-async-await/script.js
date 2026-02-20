console.log("connected");
// Promise
/*
let number = new Promise((res, rej) => {
    let random = Math.floor(Math.random() * 10);
    if (random > 5) {
        res("Accepting " + random);
    } else {
        rej("Rejected " + random); // FIXED
    }
});

console.log(number);
*/

// .then() and .catch()
/*
let Num = new Promise((resolve,reject)=>{
    let random = Math.floor(Math.random()*10);
    if(random >5) resolve("Accepted " +random);
    else reject("Rejected   " + random);
})

Num.then((val)=>{
    console.log(val);
}).catch((val)=>{
    console.error(val);
})

*/

// Async and await

function New() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Completed");
            resolve();
        },3000)
        console.log("Dwn stat");
    })
}

async function name() {
    await New("vraj");
}

name()