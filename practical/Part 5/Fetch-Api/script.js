console.log("cnp")

// Fetch Api using .then() and .catch()
/*
fetch("https://randomuser.me/api/")
.then((raw)=> raw.json())
.then((data)=>{
    console.log(data.results[0].location.city);
    console.log(data.results[0].name.first);
    let h1 = document.createElement("h1")
    let sec = document.createElement("h1")
    sec.innerHTML = ` Name :${data.results[0].name.first} ${data.results[0].name.last}` //data.results[0].name.first    = first name of user
    h1.innerHTML = `City : ${data.results[0].location.city}`                    //data.results[0].location.city  = location of city
    document.body.append(sec);
    document.body.append(h1);
}).catch((err)=>{
    console.log(err)
})
*/


// Fetching Api using async and await

async function getAPi() {
    try{
        let api = await fetch("https://randomuser.me/api/")
        let result = await api.json();
        console.log(result)
        result.results.forEach((data) => {
            console.log(data.name.first)
            console.log(data.name.last)
            console.log(data.name.title

            )
            
        });
    }catch{

    }
}
getAPi();