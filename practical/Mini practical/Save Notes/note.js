console.log("conne");

let textArea = document.querySelector("#note-input");
let submitButton = document.querySelector("#button")
textArea.addEventListener("input",function () {
    // console.log(textArea.value);
  })


window.addEventListener("DOMContentLoaded", function (e) {
  let localNote = JSON.parse(localStorage.getItem("savedNote"));
  
localNote.forEach(function (param) {
    // console.log(e)
    // console.log(param);
    // console.log(JSON.parse(localStorage.getItem("savedNote")))
    let savedNote = document.querySelector("#saved-notes");
    let note = document.createElement("div");
      let p = document.createElement("p");
      let h4 = document.createElement("h4");
      let span = document.createElement("span")

      note.prepend(h4)
      note.append(span)
      note.appendChild(p);


      savedNote.append(note);

      note.classList.add("note");
  p.innerHTML = `<b> Noted :</b> <br> ${param}`;
  p.style.paddingLeft = `${10}px`
      })
  })


  // Time function
  let savedNotes = [];
  let count =0


  submitButton.addEventListener("click",function (e) {
    // console.log("clicked");
    // console.log("Saaved Value : "+textArea.value);
    let savedNote = document.querySelector("#saved-notes");
    if(textArea.value != ""){
      
      let note = document.createElement("div");
      let p = document.createElement("p");
      let h4 = document.createElement("h4");
      let span = document.createElement("span");
      note.prepend(h4)
      note.append(span)
      note.appendChild(p);
      
      note.classList.add("note");
      savedNote.append(note);
      
      p.innerHTML = `<br> <b> Noted :</b> <br>${textArea.value}`;


  
    
  savedNotes.push(textArea.value);
  localStorage.setItem("savedNote",JSON.stringify(savedNotes));

    textArea.value ="";
    }else{
        alert("Enter the note;")
    }

  })
