document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1')
    const print = (event) => {
        let output = ''
        output += `alt:$(event.altKey)<br>`
        output += `ctrl: $(event.ctrlKey)<br>`
        output += `shift:$(event.shiftKey)<br>`
        output += `code: ${typeof(event.code) !== 'undefined' ? event.code : event.keyCode}<br>`
        h1.innerHTML= output
    }

    document.addEventListener('keydown', print)
    document.addEventListener('keyup', print)
})