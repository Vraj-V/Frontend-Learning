console.log("connected");

let refresh = document.querySelector("#refreshBtn")

function getUser(){
    fetch("https://randomuser.me/api/?results=4")
.then((raw)=> raw.json())
.then((data)=>{
    console.log(data.results);

    document.querySelector(".users").innerHTML="";
    data.results.forEach((user) => {
        console.log(user)
        console.log(user.name);

        // Parent wrapper
const card = document.createElement("div");
card.className = "w-72";

// Inner container
const inner = document.createElement("div");
inner.className =
  "flex items-center gap-3 bg-neutral-800/60 border border-neutral-700 rounded-xl p-3 shadow-sm";

// Avatar Image
const img = document.createElement("img");
img.src =user.picture.medium;
img.alt = "avatar";
img.className =
  "w-12 h-12 rounded-full object-cover ring-1 ring-neutral-700";

// Right section
const right = document.createElement("div");
right.className = "flex-1 min-w-0";

// Top Row (Name + Follow button)
const topRow = document.createElement("div");
topRow.className = "flex items-center justify-between gap-2";

// Name container
const nameBox = document.createElement("div");
nameBox.className = "truncate";

const name = document.createElement("div");
name.className = "text-sm font-semibold text-white truncate";
name.textContent = `${user.name.first}  ${user.name.last}`;

const role = document.createElement("div");
role.className = "text-xs text-neutral-400 truncate";
role.textContent = user.cell;

nameBox.appendChild(name);
nameBox.appendChild(role);

// Follow Button
const followBtn = document.createElement("button");
followBtn.className =
  "text-xs px-2 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white";
followBtn.textContent = "Follow";

topRow.appendChild(nameBox);
topRow.appendChild(followBtn);

// Location Row
const locationRow = document.createElement("div");
locationRow.className =
  "mt-2 text-xs text-neutral-400 flex items-center gap-2";

// SVG icon
locationRow.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
  <path d="M6 2a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9.414A2 2 0 0015.414 8L12 4.586A2 2 0 0010.586 4H6z" />
</svg>`;

// Text
const locText = document.createElement("span");
locText.textContent = user.location.city;

locationRow.appendChild(locText);

// Assemble
right.appendChild(topRow);
right.appendChild(locationRow);

inner.appendChild(img);
inner.appendChild(right);

card.appendChild(inner);

// Append to body
document.querySelector(".users").appendChild(card);

    });
})
}

getUser();

refresh.addEventListener("click",function () {
    getUser();
    console.log("click")
    })