const Checkbox = document.getElementById("checkbox");
const Notes = document.getElementById("normaltext");
const save = document.getElementById("save");
const Input = document.getElementById("userInput");
const demo = document.querySelector("#demo");


let onTextmode = false;
let onCheckmode = false;

Notes.addEventListener("click",()=>{
    onTextmode = true;
    onCheckmode = false;
    demo.innerHTML = "You're in (Notes) mode now";
});

Checkbox.addEventListener("click",()=>{
    onCheckmode = true;
    onTextmode = false;
    demo.innerHTML = "You're in (Tasks) mode now";
});

save.addEventListener("click",()=>{
    if(onTextmode && !onCheckmode){
        CreatedivInTextMode();
    }else if(!onTextmode && onCheckmode){
        CreatedivInCheckBoxMode();
    }else{
        console.warn("Both values cannot be true");
    }
});

function CreatedivInTextMode(){
    const UserNote = document.createElement("div");
    UserNote.textContent = Input.value;
    UserNote.style.padding = "20px";
    UserNote.style.margin = "15px";
    UserNote.style.border = "2px solid black";
    UserNote.style.borderRadius = "20px";
    UserNote.style.width = "400px";
    UserNote.style.wordBreak = "break-word";
    UserNote.style.display = "inline-block";
    UserNote.style.fontFamily = "Verdana";
    UserNote.style.whiteSpace = "pre-line";
    UserNote.style.backgroundColor = "#73c8d9";
    const edit = document.createElement("img");
    const Delete = document.createElement("img");
    Delete.style.width = "25px";
    Delete.style.cursor = "pointer";
    edit.style.width = "25px";
    edit.style.cursor = "pointer";
    if(Input.value == ""){
        alert("Write something!")
    }else{
        document.body.appendChild(UserNote);
        Input.value = "";
        edit.src = "/Images/edit.svg";
        Delete.src = "/Images/delete.svg";
        document.body.appendChild(edit);
        document.body.appendChild(Delete);
    }

    edit.onclick = function(){
        UserNote.contentEditable = "true";
    }
    UserNote.onkeydown = function(event){
        if (event.key == "Enter") {
            UserNote.contentEditable = "false";
         }

         if(event.key == "Enter" && UserNote.textContent == ""){
            UserNote.style.display = "none";
            edit.style.display = "none";
            Delete.style.display = "none";
         }
    }
    
    Delete.onclick = function(){
        UserNote.style.display = "none";
        edit.style.display = "none";
        Delete.style.display = "none";
    }
}


//*TextMode finished
function CreatedivInCheckBoxMode(){
    const UserNote = document.createElement("a");
    UserNote.href="#task";
    UserNote.textContent = Input.value;
    UserNote.style.padding = "20px";
    UserNote.style.textDecoration = "none";
    UserNote.style.color = "black";
    UserNote.style.margin = "15px";
    UserNote.style.border = "2px solid black";
    UserNote.style.borderRadius = "20px";
    UserNote.style.width = "400px";
    UserNote.style.wordBreak = "break-word";
    UserNote.style.display = "inline-block";
    UserNote.style.fontFamily = "Verdana";
    UserNote.style.whiteSpace = "pre-line";
    UserNote.style.backgroundColor = "#73c8d9";
    const edit = document.createElement("img");
    const Delete = document.createElement("img");
    Delete.style.width = "25px";
    Delete.style.cursor = "pointer";
    edit.style.width = "25px";
    edit.style.cursor = "pointer";
    if(Input.value == ""){
        alert("Write something!")
    }else{
        document.body.appendChild(UserNote);
        Input.value = "";
        edit.src = "/Images/edit.svg";
        Delete.src = "/Images/delete.svg";
        document.body.appendChild(edit);
        document.body.appendChild(Delete);
    }

    edit.onclick = function(){
        UserNote.contentEditable = "true";
    }
    UserNote.onkeydown = function(event){
        if (event.key == "Enter") {
            UserNote.contentEditable = "false";
         }

         if(event.key == "Enter" && UserNote.textContent == ""){
            UserNote.style.display = "none";
            edit.style.display = "none";
            Delete.style.display = "none";
         }
    }
    
    Delete.onclick = function(){
        UserNote.style.display = "none";
        edit.style.display = "none";
        Delete.style.display = "none";
    }


    UserNote.onclick = function(){
        if(UserNote.style.textDecoration == "line-through"){
            UserNote.style.textDecoration = "none";
        }else{
            UserNote.style.textDecoration = "line-through";
        }
    }
}