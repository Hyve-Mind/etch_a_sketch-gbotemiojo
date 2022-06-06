let defaultContainer = document.getElementById("defaultContainer")
let divColor = document.getElementById("text")
let dimension = document.getElementById("dimension")
let container = document.getElementById("container")
// functions for different kinds of colors
function red(){
    divColor.textContent = "RED"
}
function yellow(){
    divColor.textContent = "YELLOW"
}
function green(){
    divColor.textContent = "GREEN"
}
function blue(){
    divColor.textContent = "BLUE"
}
function eraser(){
    divColor.textContent = "ERASER"
}

for (let j = 1 ; j<=256 ; j++){ 
    let defaultContent = document.createElement("div"[j])
    defaultContainer.appendChild(defaultContent)
    defaultContent.style.width = "25px" 
    defaultContent.style.height = "25px"
    defaultContent.addEventListener("mouseover", hover)
    function hover(){
        if(divColor.textContent === "BLUE"){
            defaultContent.style.background = "blue" 
        }
      else if(divColor.textContent === "RED"){
            defaultContent.style.background = "red" 
        }
        else if(divColor.textContent === "YELLOW"){
            defaultContent.style.background = "yellow" 
        }
        else if(divColor.textContent === "GREEN"){
            defaultContent.style.background = "green" 
        }
       else if(divColor.textContent === "ERASER"){
            defaultContent.style.background = "WHITE" 
        }
        else{
            defaultContent.style.background = "black" 
        }
    }
}
function edit(){
    clear()
    defaultContainer.style.display = "none"
    let askDimension = Number(prompt("enter dimension"))
for (let i = 1 ; i<=askDimension * askDimension ; i++){
    let content = document.createElement("div"[i])
    content.style.display = "flex"
    container.style.display = "flex"
     content.classList.toggle("colors")
    container.appendChild(content)
    content.style.width = `calc(400px / ${askDimension})` 
    content.style.height = `calc(400px / ${askDimension})`
    content.addEventListener("mouseover", hover)
    dimension.textContent = askDimension + " X " + askDimension
    function hover(){
        if(divColor.textContent === "BLUE"){
            content.style.background = "blue" 
        }
      else if(divColor.textContent === "RED"){
            content.style.background = "red" 
        }
        else if(divColor.textContent === "YELLOW"){
            content.style.background = "yellow" 
        }
        else if(divColor.textContent === "GREEN"){
            content.style.background = "green" 
        }
       else if(divColor.textContent === "ERASER"){
            content.style.background = "WHITE" 
        }
        else{
            content.style.background = "black" 
        }
    }
}
}
function clear(){
    container.innerHTML = ""
}

