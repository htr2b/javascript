const btn = document.getElementById('btn')
// btn.addEventListener('click', function (e) {
//     btn.innerHTML = 'Clicked'
// })
// btn.addEventListener('dblclick', function (e) {
//     btn.innerHTML = 'Clicked'
// })
// btn.addEventListener('mouseenter', function (e) {
//     btn.innerHTML = 'Clicked'
// })

const input = document.getElementById('name')
let password = new Array()
input.addEventListener('input', e => {
    console.log('Entering input.', e.target.value);
    password.push(e.target.value)
})

btn.addEventListener('click', e => {
    console.log(password[password.length - 1]);

})


const colorInput = document.getElementById('colorPicker')
colorInput.addEventListener('input', e => {
    console.log('Input:', e.target.value);
    document.body.style.backgroundColor = e.target.value
})
