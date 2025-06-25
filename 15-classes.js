// class Car {
//     constructor(brand, year) {
//         this.brand = brand
//         this.year = year
//     }
//     startCar() {
//         console.log('Car started.')
//     }
//     carInfo() {
//         console.log('Car brand is', this.brand, 'and it is', this.year, 'modal');

//     }
// }
// let firstCar = new Car('BMW', 2025)
// firstCar.carInfo()
// firstCar.startCar()

class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    get getPersonInfo() {
        return `Name: ${this.firstName} ${this.lastName} Age: ${this.age} Country/City: ${this.country}/${this.city}`
    }
    set setName(name) {
        this.firstName = name
    }
}
// let person1 = new Person('Ali', 'Bilir', 24, 'Turkiye', 'Ankara')
// let person2 = new Person('Ahmet', 'Yaşar', 21, 'Turkiye', 'Kayseri')
// let person3 = new Person('Ferhat', 'Gelici', 26, 'Turkiye', 'Osmaniye')
// let person4 = new Person('Zeynep', 'Güzel', 23, 'Turkiye', 'Hatay')
// console.log(person1.getPersonInfo)
// console.log(person2.getPersonInfo)
// console.log(person3.getPersonInfo)
// console.log(person4.getPersonInfo)
// person1.setName = 'Kadir'
// console.log(person1.getPersonInfo)

// class Student extends Person {
//     constructor(firstName, lastName, age, country, city, studentID) {
//         super(firstName, lastName, age, country, city)
//         this.studentID = studentID
//     }
//     set setID(id) {
//         this.studentID = id
//     }
//     learn() {
//         console.log('learning');

//     }
// }
