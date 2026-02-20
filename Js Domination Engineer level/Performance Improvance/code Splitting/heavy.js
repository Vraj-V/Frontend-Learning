export function run(param) {
    console.log("running heavy load");

    let h1 = document.createElement("h1");
    h1.textContent = `Running Heavy load ${param ?? ""}`;
    document.body.appendChild(h1);

    const obj = {
        age: 21,
        phone: 21213132313
    };

    function show() {
        console.log("Age:", obj.age);
    }
    let user = ["vraj","valand"]  //database


    return {
        show,       //just share public operation like show
        ab(){
            console.log(user)       // user  cannot mess with array like push or pull
        },
        
    };
}
