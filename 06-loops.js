// for(let i = 0;i<15;i++){
//     console.log(i,' * ',i,' = ',i*i);

// }

// const names = ['Onur','Salih','Adnan','Mert','Cemilhan']
// for (let index = 0; index < names.length; index++) {
//     const element = names[index];
//     console.log(element);
// }

// const numbers = [1,2,3,4,5,6]
// let sum = 0
// for(let i = 0;i<numbers.length;i++){
//     sum+=numbers[i]
// }
// console.log('sum: ',sum)

// let countries = ['turkey','cyprus','azerbaijan']
// let reversedCountries = []
// for (let i = countries.length-1; i >= 0; i--) {
//     reversedCountries.push(countries[i].toUpperCase())
// }
// console.log(reversedCountries);


// let i = 0
// while(i<5){
//     console.log(i);
//     i++
// }

// let temp
// let nums = [1,2,3,4,5]
// do{
//     temp = nums.pop()
//     console.log(temp);
// }while(nums.length!=0)

// let nums = [1,3,5,7,9,12,13,15,17]
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i]%2==0)
//         break
//     console.log(nums[i]);

// }
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i]%2==0)
//         continue
//     console.log(nums[i]);

// }


//EXERCISES
// for (let i = 1; i < 7; i++) {
//     let line = ''
//     for (let j = 0; j<i; j++){
//         line+='#'  
//     }
//     console.log(line);
// }

// console.log('i    i^2   i^3')
// for (let i = 0; i <= 10; i++) {
//     if (i >= 10) {
//         console.log(i, '  ', i ** 2, '  ', i ** 3)
//     }
//     else if (i < 5) {
//         console.log(i, '   ', i ** 2, '   ', i ** 3)
//     }
//     else {
//         console.log(i, '   ', i ** 2, '   ', i ** 3)
//     }

// }

// let sumOfEvens=0
// let sumOfOdds = 0
// for (let i = 1; i <= 100; i++) {
//     sumOfEvens+=i%2==0?i:0
//     sumOfOdds+=i%2==1?i:0
// }
// console.log(sumOfEvens);
// console.log(sumOfOdds);


//GENERATE ID
// let randID = ''
// let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// for(let i = 0;i<Math.random()*16;i++){
//     randID += chars.charAt(Math.floor(Math.random()*chars.length))
// }
// console.log(randID);
