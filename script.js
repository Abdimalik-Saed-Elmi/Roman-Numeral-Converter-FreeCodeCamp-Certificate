const userInput = document.getElementById("user-input")
const Checkbtn = document.getElementById("check-btn")
const Clearbtn = document.getElementById("clear-btn")
const result = document.getElementById("results-div")

function Checknumber(){
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    const inputData  = userInput.value
    if(inputData === ''){
        alert("Please provide a phone number")
        return
    }
    let item = document.createElement("li")
    result.appendChild(item)
    if(regex.test(userInput.value)){
         item.innerHTML = "Valid US number: " + inputData
         userInput.value = ""
    }
    else{
        item.innerHTML = "Invalid US number: " + inputData
        inputData = ""
    }
}


Clearbtn.addEventListener("click", ()=>{
    result.innerHTML = "";
    return
})

Checkbtn.addEventListener('click', Checknumber)
  

