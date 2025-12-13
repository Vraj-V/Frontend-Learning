console.log("running code splitting script", Date.now());

let btn = document.querySelector("#btn");
btn.addEventListener("click", async function () {
    const module = await import("./heavy.js");
    // module.run("Vraj").show();
    module.run("Vraj").ab();
    module.run("Vraj").user;
});
