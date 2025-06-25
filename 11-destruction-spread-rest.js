// Destructuring
// const numbers = [1, 2, 3, 4]
// const [number1, number2] = numbers
// console.log(number1);
// console.log(number2);
// console.log(numbers);

// const stack = [['HTML', 'CSS', 'JAVASCRIPT'], ['PHP', 'MYSQL', 'NODEJS']]
// const [[, , frontend], [backend]] = stack
// console.log(frontend, backend);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...other] = nums
// console.log(other);

// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo'], ['Turkey', 'Ankara']]

// for (const [country, city] of countries) {
//     console.log(country, city)
// }

// const user = {
//     name: 'Onur',
//     surname: 'Kahan',
//     age: 22,
//     pets: {
//         cats: ['Asil'],
//         dogs: ['Monti']
//     }
// }
// const { pets: { cats } } = user
// console.log(cats);

// function multiply([number1, number2]) {
//     return number1 * number2
// }
// const numbers = [10, 10]
// console.log(multiply(numbers));

// const user = {
//     name: 'Onur',
//     surname: 'Kahan',
//     age: 22,
//     pets: {
//         cats: ['Asil'],
//         dogs: ['Monti']
//     }
// }
// function showUserInfo({ name, surname, age, pets: { cats, dogs } }) {
//     return `Hello, I am ${name} ${surname}. I am ${age} years old. I have ${cats.length} cat and ${dogs.length} dog.`
// }

// console.log(showUserInfo(user));


// const numbers = [1, 2, 3]
// const numbers2 = [...numbers]
// console.log(numbers);
// numbers2.push(4)
// console.log(numbers);
// console.log(numbers2);

// const user = {
//     name: 'onur',
//     surname: 'kahan'
// }
// const user2 = {
//     ...user
// }


