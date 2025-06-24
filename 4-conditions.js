//CONDITIONS
// let isRaining = false
// if(isRaining)
//     console.log('grab an umbrealla');
// else
//     console.log('go outside and have fun');

// let result = prompt('what is the result of 2 + 5?')
// if (result == 7)
//     alert('you got it right');
// else
//     alert('you should work harder');

// switch (result) {
//     case 7:
//         alert('you got it right') 
//         break;
//     case '':
//         alert('you should try it')
//         break;
//     default:
//         alert('you should work harder')
//         break;
// }

// let num = prompt('enter a number')

// switch(true){
//     case num>0:
//         alert(`${num} is positive`)
//         break
//     case num == 0:
//         alert(`Entered number is zero`)
//         break
//     case num<0:
//         alert(`${num} is negative`)
//         break
//     default:
//         alert('entered value was not a number')
// }

//EXERCISES
// let age = prompt('Enter your age')
// let leftYears = 18-age
// alert(age>=18?'You are old enough to drive':`You are left with ${leftYears} to drive`)

// let myAge = 22
// let yourAge= prompt('Enter your age')
// if(myAge>yourAge)
//     alert(`I am ${myAge-yourAge} year older than you.`)
// else if(myAge==yourAge)
//     alert(`We are in same age.`)
// else
//     alert(`You are ${yourAge-myAge} year older than me.`)

// let a = 4
// let b = 4
// if(a>b)
//     alert('a is greater than b')
// else if(a==b)
//     alert('a equals to b')
// else 
//     alert('b is greater than a')
//
// alert(a > b ? 'a is greater than b' : a < b ? 'b is greater than a' : 'they are equal');

// let number = prompt('Enter a number.')
// alert(number % 2 == 0 ? `${number} is even` : `${number} is odd`)

// let grade = prompt('Enter your point')
// switch (true) {
//     case grade > 79:
//         alert('You got A')
//         break;
//     case grade > 69:
//         alert('You got B')
//         break;
//     case grade > 59:
//         alert('You got C')
//         break;
//     case grade > 49:
//         alert('You got D')
//         break;
//     case grade < 50:
//         alert('You got F')
//         break;
//     default:
//         alert('No input')
// }


// let input = prompt('Enter a month')
// let autumn = ['september', 'october', 'november']
// let winter = ['december', 'january', 'february']
// let spring = ['march', 'april', 'may']
// let summer = ['june', 'july', 'august']
// if (autumn.includes(input.toLowerCase()))
//     alert('Season is autumn')
// else if (winter.includes(input.toLowerCase()))
//     alert('Season is winter')
// else if (spring.includes(input.toLowerCase()))
//     alert('Season is spring')
// else if (summer.includes(input.toLowerCase()))
//     alert('Season is summer')
// else
//     alert('Enter a valid month')


// let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
// let weekEnds = ['saturday', 'sunday']
// let input = prompt('What is the day?')
// alert(weekDays.includes(input) ? `${input} is a working day` : weekEnds.includes(input) ? `${input} is a weekend` : `Enter a valid input`)

// let got31Days = ['january', 'march', 'may', 'july', 'august', 'october', 'december']
// let got30Days = ['april', 'june', 'september', 'november']
// let month = prompt('Enter a month')
// let year = prompt('Enter a year')
// if (got30Days.includes(month.toLowerCase()))
//     alert(`${month} has 30 days.`)
// else if (got31Days.includes(month.toLowerCase()))
//     alert(`${month} has 31 days.`)
// else if (month.toLowerCase() == 'february') {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
//         alert(`${month} has 29 days.`)
//     else
//         alert(`${month} has 28 days`)
// }
// else
//     alert('Enter a valid input')
