const button = document.getElementById('btn')
const content = document.getElementById('content')

button.addEventListener('click', e => {
    if (content.style.display == 'block') {
        content.style.display = 'none'
        button.innerHTML = 'Show'
    } else {
        content.style.display = 'block'
        button.innerHTML = 'Hide'
    }
})

