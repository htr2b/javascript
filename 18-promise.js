// const test = callback => {
//     setTimeout(() => {
//         callback('hata olustu', [])
//     }, 2000)
// }
// const callback = (err, data) => {
//     if (err) {
//         console.log('Error', err);
//     } else {
//         console.log(data);

//     }
// }

// test(callback)


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('success')
//         reject('fail')
//     })
// }, 1500)

// promise.then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.warn(err);
// })


const API_URL = 'https://jsonplaceholder.typicode.com/posts'
//fetch(API_URL).then(res => res.json()).then(data => console.log(data)).catch(err => console.error(err))

async function getPosts(API_URL) {
    try {
        const res = await fetch(API_URL)
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error.message);

    }
}
getPosts(API_URL)

const square = async n => {
    const value = await (n * n)
    return value
}
(async () => {
    const result = await square(2)
    console.log(result);
})();


