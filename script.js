const notesContainer = document.querySelector(".notes-container");

const crateBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    //This function call stored data inside form the browser
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

crateBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "./Images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    // This box for when we delete the data form browser then it should be update the data 
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })

    }

});