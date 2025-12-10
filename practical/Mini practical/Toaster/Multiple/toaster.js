function createToaster(config){
    return function (param) { 

        let div = document.createElement("div");
        div.className = `inline-block   ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} 
        px-6 py-3 shadow-lg pointer-events-none
        ${config.positionX === "right" ? "right-10" : "left-10"}
        ${config.positionY === "top" ?"top-10": "bottom-10"}`
        div.textContent = param;
        document.querySelector(".parent").appendChild(div);
        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div)
        },config.duration*1000)
    }
}

let toaster = createToaster({
    positionX :"left",
    positionY :"bottom",
    theme :"dark",
    duration : 3
})

toaster("New line")
setTimeout(()=>{

    toaster("New line 2 ajksd")
},2000)

setTimeout(()=>{
    toaster("New line 3 ajksd")
},1000)