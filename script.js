const Textinput = document.getElementById("number")
const Checkbtn = document.getElementById("convert-btn")
const result = document.getElementById("output")



Checkbtn.addEventListener('click', ()=>{
    const inputValue = +Textinput.value
    if (!inputValue) {
        result.classList.add("outputChanger")
       result.innerText = 'Please enter a valid number'
  
        return
    }
    if (inputValue < 0) {
        result.classList.add("outputChanger")
       result.innerText = 'Please enter a number greater than or equal to 1'
  
        return
    }
    if(inputValue >= 4000){
        result.classList.add("outputChanger")
        result.innerText = "Please enter a number less than or equal to 3999"
        return
    }

    const lastResult = ConvertNumToRoman(inputValue)
    result.classList.add("outputChanger")
    result.innerText = lastResult
})


function ConvertNumToRoman(num){
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const syms = ["M","CM", "D","CD","C","XC", "L", "XL","X","IX", "V", "IV", "I"]
    let Roman = '';
    let i = 0
    while (num > 0) {
        const div = Math.floor(num / val[i])
        num -= div * val[i]
        Roman += syms[i].repeat(div)
        i++
    }
    return Roman;
}   

