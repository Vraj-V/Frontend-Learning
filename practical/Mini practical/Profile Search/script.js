console.log("connected");
let form = document.querySelector("form")
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    user : [],
    init: function(){
        console.log("initial run first");
        form.addEventListener("submit", this.submitForm.bind(this))

    },
    submitForm: function (e) {
        e.preventDefault();
        console.log("Form submitted");
        this.addUser();
    },
    addUser: function() {
    console.log("adding user");
    this.user.push({
        userName: userName.value,
        role: role.value,
        bio: bio.value,
        photo: photo.value
    });

    form.reset();
    this.renderUi();
    },
    renderUi: function () {
        document.querySelector(".users").innerHTML ="";

        this.user.forEach((user,index) => {
            let card = document.createElement("div");
            card.className = "bg-neutral-800 rounded-2xl border border-neutral-700 shadow-md px-6 py-5 flex flex-col items-center";

            card.addEventListener("click", ()=> {
                this.removeUser(index);
                console.log("Clicked", index);

            })
            
            let img = document.createElement("img");
            img.src = user.photo;
            img.className = "w-20 h-20 object-cover rounded-full";
            card.appendChild(img);

            let Name = document.createElement("h3");
            Name.textContent = user.userName;
            Name.className = "text-lg font-semibold";
            card.appendChild(Name);

            let role = document.createElement("h5");
            role.textContent = user.role;
            role.className ="text-xs text-blue-300 mb-1";
            card.appendChild(role);

            let bio = document.createElement("p");
            bio.textContent = user.bio;
            bio.className = "text-xs text-neutral-300 text-center";
            card.appendChild(bio);

        
        document.querySelector(".users").append(card);
        });
    },
    removeUser: function (index) {
        this.user.splice(index,1);
        this.renderUi();
    }
}

userManager.init();