//localStorage.setItem("name", "onur")
// console.log(localStorage.getItem("name"));
// localStorage.setItem("sa", "as")

// const user = {
//     name: "onur",
//     surname: "kahan"
// }

// localStorage.setItem('user', JSON.stringify(user))


// localStorage.removeItem('sa')
// localStorage.clear()

let basket = []
const products = [
    {
        id: 1,
        title: 'MacBook Pro 2021',
        price: 40_000
    },
    {
        id: 2,
        title: 'Lenovo Pro 2021',
        price: 30_000
    },
    {
        id: 3,
        title: 'Huawei Pro 2021',
        price: 20_000
    }
]

function saveToStorage() {
    localStorage.setItem('basket', JSON.stringify(basket))
}

function addToBasket(productID) {
    basket.push(productID)
    saveToStorage()
}

function removeFromBasket(productID) {
    basket = basket.filter(id => id != productID)
    saveToStorage()
}

function totalPrice() {
    return basket.reduce((prev, productID) => {
        const product = products.find(p => p.id == productID)
        return prev += product.price
    }, 0)
}
addToBasket(1)
addToBasket(2)
addToBasket(3)
console.log(basket);
console.log(totalPrice());
