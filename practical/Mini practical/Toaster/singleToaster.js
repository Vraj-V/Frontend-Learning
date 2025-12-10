function createToaster(config){
    return function(notification){
        let div = document.createElement("div");
        div.textContent = notification;

        div.className = `fixed ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 
        shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10" : "left-10"} 
        ${config.positionY === "top" ?"top-10": "bottom-10"}`

        document.body.appendChild(div);

        setTimeout(()=>{
            document.body.removeChild(div);
        } ,config.duration *1000)
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration : 2
})

toaster("This is single line notification")