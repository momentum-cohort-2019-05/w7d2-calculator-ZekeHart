const displayWindow = document.querySelector('.c-display')
const inputBox = displayWindow.querySelector('input')
const buttonList = document.querySelectorAll('#clicky')
for (let button of buttonList) {
    button.addEventListener('click', function () {
        if (button.innerText === '=') {
            try {
                inputBox.value = math.evaluate(inputBox.value)
            }
            catch{
                inputBox.value = ''
                window.alert("Pls enter valid input")
            }
        }
        else if (button.innerText == 'clear') {
            inputBox.value = ''
        }
        else if (button.innerText === 'x') {
            inputBox.value += '*'
        }
        else {
            inputBox.value += button.innerText
        }
    })
}