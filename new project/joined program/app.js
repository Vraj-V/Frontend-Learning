function joined() {
    console.log("This is the joined function.");

    let title = document.getElementById("title");
    title.innerText ="Thank you for joining us! 🎉🎉🎉"
    title.style.color = "tomato"; // Green color
    title.style.fontSize = "2em";

    let subtitle = document.getElementById("subtitle");
    console.log("Subtitle:", subtitle);
    subtitle.innerText = "We are excited to have you on board!";
    subtitle.style.color = "black"; // Green color
    subtitle.style.fontSize = "1.5em";

// let name = document.getElementById("name").value;
// console.log("Name:", name);

    let joined = document.getElementById("joined");
    joined.style.display ="none";
}

