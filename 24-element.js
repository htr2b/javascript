// const h1 = document.querySelector('h1')
// console.log(h1.attributes);

// for (const attr of h1.attributes) {
//     console.log(attr, attr.value);

// }
// console.log(h1.attributes.id.value);

// console.log(document.body.childElementCount);

// const ul = document.querySelector('ul')
//const deleteButtons = document.querySelectorAll('.deleteBtn')
// deleteButtons.forEach(btn => {
//     btn.addEventListener('click', e => {
//         e.target.remove()
//         if (ul.childElementCount == 0) {
//             ul.innerHTML = '<li>There are no data can shown</li>'
//         }
//     })
// })

// const deleteButtons = ul.children;
// [...deleteButtons].forEach(btn => {
//     btn.addEventListener('click', e => {
//         e.target.remove()
//     })
// })

// const test = document.querySelector('.test')
// console.log(test.clientHeight);
// console.log(test.firstElementChild);
// console.log(test.lastElementChild);

// const title = document.querySelector('.title')
// console.log(title.previousElementSibling);
// console.log(title.nextElementSibling);
// console.log(title.nextElementSibling.nextElementSibling);

// const scrollContent = document.querySelector('.scroll-content')
// console.log(scrollContent.scrollHeight);

// const scrollContent = document.querySelector('.scroll-content')
// console.log(scrollContent.scrollWidth);

// const scroll = document.querySelector('.scroll-content')
// const scrollBtn = document.querySelector('.scrollButton')
// scrollBtn.addEventListener('click', e => {
//     scroll.scrollTop += 50;
// })

// const scroll = document.querySelector('.scroll-content')
// const scrollBtnR = document.querySelector('.scrollButtonR')
// const scrollBtnL = document.querySelector('.scrollButtonL')

// if (scroll.scrollLeft == 0) {
//     scrollBtnL.setAttribute('disabled', 'disabled')
// } else {
//     scrollBtnL.removeAttribute('disabled')
// }

// scrollBtnR.addEventListener('click', e => {
//     scroll.scrollLeft += 50
//     console.log(e.target.tagName);

// })
// scrollBtnL.addEventListener('click', e => {
//     scroll.scrollLeft -= 50
//     console.log(e.target.tagName);
// })

// scroll.addEventListener('scroll', e => {

//     if (scroll.scrollWidth - scroll.clientWidth == e.target.scrollLeft) {
//         scrollBtnR.setAttribute('disabled', 'disabled')
//     } else {
//         scrollBtnR.removeAttribute('disabled')
//     }
//     if (e.target.scrollLeft == 0) {
//         scrollBtnL.setAttribute('disabled', 'disabled')
//     } else {
//         scrollBtnL.removeAttribute('disabled')
//     }
// })

const adana = document.getElementById('adana')
const h1 = document.createElement('h1')
h1.innerHTML = 'created after adana'
const p = document.createElement('p')
p.innerHTML = 'created after adana p'
adana.after(h1, p)



