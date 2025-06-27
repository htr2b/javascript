// const form = document.getElementById('form1')
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     for (const element of e.target.elements) {
//         console.log(element.value);
//     }
// })

// console.log(document.forms)
// console.log(document.forms.form2)

// const btn = document.querySelector('button')
// btn.addEventListener('click', e => {
//     document.forms.form.submit()
// })

// const form = document.querySelector('form')
// const resetBtn = document.getElementById('resetBtn')
// resetBtn.addEventListener('click', e => {
//     form.reset()
// })

// const form = document.getElementById('form')
// form.addEventListener('submit', e => {
//     e.preventDefault();
//     [...e.target.elements].forEach(element => {
//         console.log(element.checkValidity());
//         console.log('-');
//     })
// })

// const btn = document.getElementById('btn')
// btn.addEventListener('click', e => {
//     if (e.isTrusted) {
//         console.log('clicked to button');
//     } else {
//         console.log('you didnt click');

//     }
// })
// btn.dispatchEvent(new Event('click'))

// const tab = document.getElementById('tab')
// const items = tab.querySelectorAll('nav button')
// const contents = tab.querySelectorAll('section')
// items[0].classList.add('active');
// [...contents].filter((item, key) => key !== 0).forEach(content => content.style.display = 'none')
// items.forEach((item, index) => item.addEventListener('click', e => {
//     items.forEach((item, i) => {
//         if (i === index) {
//             item.classList.add('active')
//         } else {
//             item.classList.remove('active')
//         }
//     })
//     contents.forEach(content => content.style.display = 'none')
//     contents[index].style.display = 'block'

//     tab.dispatchEvent(
//         new CustomEvent('tabChanged', {
//             detail: {
//                 tab: index
//             }
//         })
//     )
// }))

// tab.addEventListener('tabChanged', e => {
//     console.log('tab degisti', e.detail)
// })
