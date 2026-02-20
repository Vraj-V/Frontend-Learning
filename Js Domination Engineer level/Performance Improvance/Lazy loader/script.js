console.log("running code splitting script", Date.now());

const observer = new IntersectionObserver((entities)=>{
    entities.forEach((entry)=>{
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);

        }
    })
})

const images = document.querySelectorAll("img")
images.forEach((e)=>{
    observer.observe(e);
    e.className = "loading";
})