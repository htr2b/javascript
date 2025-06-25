// const callback = function(num){
//     return num * num
// }

// function cube(callback,num){
//     return callback(num)*num
// }

// let result = cube(callback, 3)
// console.log(result);

// const a = s1 => {
//     const b = s2 => {
//         const c = s3 => {
//             return s1 + s2 + s3
//         }
//         return c
//     }
//     return b
// }
// console.log(a(2)(3)(4));

// const numbers = [1, 3, 5, 7, 9]
// let total = 0
// numbers.forEach(num => {
//     total += num
// })
// console.log(total);

// function sayHello() {
//     console.log('hello');
// }
// // let interval = setInterval(sayHello, 1000)

// // setTimeout(() => {
// //     clearInterval(interval)
// //     console.log('Interval cleared');
// // }, 5000)

// let timeout = setTimeout(sayHello, 1000)
// setTimeout(() => {
//     clearTimeout(timeout)
//     console.log('Timeout cleared');
// }, 3000)

// let numArr = [1, 3, 5, 7, 9]
// let result = 0
// numArr.forEach(element => {
//     result += element
// });
// console.log(result);
// const mappedArr = numArr.map(number => number * 2)
// console.log(mappedArr);

// let users = [{
//     id: 1,
//     name: 'Onur',
//     age: 22
// },
// {
//     id: 2,
//     name: 'Salih',
//     age: 22
// },
// {
//     id: 3,
//     name: 'Adnan',
//     age: 21
// }
// ]

// users = users.map(user => {
//     if (user.id == 3) {
//         user.age = 22
//     }
//     return user
// })
// console.log(users);

// let numbers = [1, 3, 4, 5, 6, 7, 8, 9]
// console.log(numbers.filter(number => number > 4));

// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((oldVal, curVal) => {
//     return oldVal + curVal
// })
// console.log(sum);

// const names = ['Ali', 'Veli', 'Ahmet', 22]
// const areAllStr = names.every((name) => typeof name === 'string')
// console.log(areAllStr);
// const isSomeOfNum = names.some((name) => typeof name == 'number')
// console.log(isSomeOfNum);
// const findIndex = names.findIndex((name) => name == 22)
// console.log(findIndex);

// const names = ['Ahmet', 'Mehmet', 'Veli', 'Burak', 'Kadir']
// names.sort()
// console.log(names);

// const nums = [1, 3, 2, 4, 5, 112, 32, 245, 21, 23, 5, 6, 77, 646, 79, 55, 433, 546, 865, 34,]
// nums.sort(function (a, b) {
//     return a - b
// })
// console.log(nums);
