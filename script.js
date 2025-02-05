const Textinput = document.getElementById("text-input")
const Checkbtn = document.getElementById("check-btn")
const result = document.getElementById("result")

function isPalindrome(str) {
    const cleanedStr = str.replace(/[\W_]/g,'').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}

Checkbtn.addEventListener('click', ()=>{
    const inputValue = Textinput.value
    if (inputValue === '') {
        alert('Please input a value')
        return
    }
    if( isPalindrome(inputValue) ){
        result.innerText = `${inputValue} is a Palindrome`
    } else{
        result.innerText = `${inputValue} is not a Palindrome`
    }
})