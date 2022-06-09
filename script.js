let defaultContainer = document.getElementById("defaultContainer")
let divColor = document.getElementById("text")
let dimension = document.getElementById("dimension")
let container = document.getElementById("container")
// functions for different kinds of colors
let colorred = document.querySelector(".divRed")
let coloryellow = document.querySelector(".divYellow")
let colorgreen = document.querySelector(".divGreen")
let colorblue = document.querySelector(".divBlue")
let colorBlack = document.querySelector(".divBlack")
let erazer = document.querySelector(".divEraser")
let editpad = document.querySelector(".editPad")

colorred.addEventListener("click",redColor)
coloryellow.addEventListener("click",yellowColor)
colorgreen.addEventListener("click",greenColor)
colorblue.addEventListener("click",blueColor)
colorBlack.addEventListener("click",blackColor)
erazer.addEventListener("click",eraser)
editpad.addEventListener("click",edit)


function redColor(){
    divColor.textContent = "RED"
}
function yellowColor(){
    divColor.textContent = "YELLOW"
}
function greenColor(){
    divColor.textContent = "GREEN"
}
function blueColor(){
    divColor.textContent = "BLUE"
}
function blackColor(){
    divColor.textContent = "BLACK"
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
            defaultContent.removeAttribute("class")
            defaultContent.classList.add("divBlue")
        }
      else if(divColor.textContent === "RED"){
        defaultContent.removeAttribute("class")
        defaultContent.classList.add("divRed")
        }
        else if(divColor.textContent === "BLACK"){
            defaultContent.removeAttribute("class")
           defaultContent.classList.add("divBlack")
        }
        else if(divColor.textContent === "YELLOW"){
           defaultContent.removeAttribute("class")
           defaultContent.classList.add("divYellow")
        }
        else if(divColor.textContent === "GREEN"){
          defaultContent.removeAttribute("class")
            defaultContent.classList.add("divGreen")
        }
       else if(divColor.textContent === "ERASER"){
           defaultContent.removeAttribute("class")
            defaultContent.classList.add("divEraser")
        }
        else{
          defaultContent.removeAttribute("class")
           defaultContent.classList = defaultContent
        }
    }
}
function edit(){
    clear()
    defaultContainer.style.display = "none"
   dimensions()   
}
function clear(){
    container.innerHTML = ""
}
function dimensions(){
    let askDimension = (prompt("enter dimension","1-64"))
    if (askDimension > 64 || askDimension < 1 || isNaN(askDimension)){
        alert("input a number from 1 - 64")
        edit()  
    }
    else{
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
                    content.removeAttribute("class")
                    content.classList.add("divBlue")
                }
              else if(divColor.textContent === "RED"){
                content.removeAttribute("class")
                content.classList.add("divRed")
                }
                else if(divColor.textContent === "BLACK"){
                    content.removeAttribute("class")
                   content.classList.add("divBlack")
                }
                else if(divColor.textContent === "YELLOW"){
                   content.removeAttribute("class")
                   content.classList.add("divYellow")
                }
                else if(divColor.textContent === "GREEN"){
                  content.removeAttribute("class")
                    content.classList.add("divGreen")
                }
               else if(divColor.textContent === "ERASER"){
                   content.removeAttribute("class")
                    content.classList.add("divEraser")
                }
                else{
                  content.removeAttribute("class")
                   content.classList = defaultContent
                }
            }
        }  
    }
}

