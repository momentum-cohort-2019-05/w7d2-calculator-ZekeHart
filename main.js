const displayWindow = document.querySelector('.c-display')
const inputBox = displayWindow.querySelector('input')
const buttonArray = document.querySelectorAll('#clicky')
for (let button of buttonArray) {
    button.addEventListener('click', function () {
        if (button.innerText === '=') {
            try {
                inputBox.value = math.evaluate(inputBox.value)
                inputBox.focus()
            }
            catch{
                inputBox.value = ''
                window.alert("Pls enter valid input")
                inputBox.focus()
            }
        }
        else if (button.innerText == 'clear') {
            inputBox.value = ''
            inputBox.focus()
        }
        else if (button.innerText === 'x') {
            inputBox.value += '*'
            inputBox.focus()
        }
        else {
            inputBox.value += button.innerText
            inputBox.focus()
        }
    })
}
inputBox.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        try {
            inputBox.value = math.evaluate(inputBox.value)
            inputBox.focus()
        }
        catch{
            inputBox.value = ''
            window.alert("Pls enter valid input")
            inputBox.focus()
        }
    }
})