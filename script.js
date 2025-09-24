const main = document.querySelector('main')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const body = document.querySelector('body')
const copy = document.getElementById('copy')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey, .charKeyNumber').forEach(function (charKeyButton) {
    charKeyButton.addEventListener('click', function() {
        const value = charKeyButton.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    resultInput.value = ''
    input.focus()
    resultInput.classList.remove('error')
})

input.addEventListener('keydown', function(ev) {
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'Error'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    input.value = ''
    resultInput.classList.remove('error')
}

copy.addEventListener('click', function(ev) {
    const button = ev.currentTarget
    if(button.innerText === 'Copiar') {
        button.innerText = 'Copiado!'
        button.classList.add('sucess')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copiar'
        button.classList.remove('sucess')
    }
})

document.getElementById('switchTheme').addEventListener('click', function() {
    if(main.dataset.theme === 'dark'){
        copy.style.setProperty('border-color', '#191013')
        copy.style.setProperty('background-color', '#f4f4f2')
        copy.style.setProperty('color', '#191013')

        body.style.setProperty('background-color', '#f4f4f2')
        body.style.setProperty('color', '#191013')

        input.style.setProperty('background-color', '#f4f4f2')
        input.style.setProperty('border-color', '#191013')
        input.style.setProperty('color', '#191013')

        resultInput.style.setProperty('background-color', '#f4f4f2')
        resultInput.style.setProperty('border-color', '#191013')
        resultInput.style.setProperty('color', '#191013')

        document.getElementById('switchTheme').style.setProperty('background-color', '#f4f4f2')
        document.getElementById('switchTheme').style.setProperty('color', '#191013')
        document.getElementById('switchTheme').style.setProperty('border-color', '#191013')

        main.dataset.theme = 'light'
    } else {
        copy.style.setProperty('border-color', '#f4f4f2')
        copy.style.setProperty('background-color', '#121416')
        copy.style.setProperty('color', '#f4f4f2')

        body.style.setProperty('background-color', '#121416')
        body.style.setProperty('color', '#f4f4f2')

        input.style.setProperty('background-color', '#121416')
        input.style.setProperty('border-color', '#f4f4f2')
        input.style.setProperty('color', '#f4f4f2')

        resultInput.style.setProperty('background-color', '#121416')
        resultInput.style.setProperty('border-color', '#f4f4f2')
        resultInput.style.setProperty('color', '#f4f4f2')

        document.getElementById('switchTheme').style.setProperty('background-color', '#121416')
        document.getElementById('switchTheme').style.setProperty('color', '#f4f4f2')
        document.getElementById('switchTheme').style.setProperty('border-color', '#f4f4f2')
        main.dataset.theme = 'dark'
    }
})