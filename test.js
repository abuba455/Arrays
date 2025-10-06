// //fizz buzz 
// //num divisible by 3 is fizz
// //num divisible by 5 is buzz
// //num divisible by 3 and 5 is fizzbuzz

// //start small
// const fruits = ['🥭','🍊','🍇','🍌']
// for(i = 0; i < fruits.length; i++){
//     console.log(i)
// }

// fruits.push('🍏') // adds new element
// console.log(fruits)

// // let type = typeof fruits
// // console.log(type)

// // const details = {
// //     name : "khalil",
// //     age : 24,
// //     cars: [
// //         { name: 'Tesla', model: ['X', 'CyberTruck']},
// //         { name : 'Audi', model: ['Q7', 'Q5']}
// //     ]
// // }


// // console.log(details)
// fruits.pop() // removes last element
// console.log(fruits)
// let fruit = fruits.at(2)
// console.log(fruit)

// fruits.shift() // removes first array element
// console.log(fruits)

// fruits.unshift('🍡') // adds new element to the others
// console.log(fruits)

// console.log(fruits[1]) // access an index

// fruits[2] = '🥤'
// console.log(fruits)


// fruits[fruits.length] = '🍐'
// console.log(fruits)

// const emos = ['😃','😇', '🥰']

// const fruityEmo = fruits.concat(emos)
// console.log(fruityEmo)

// const months = ['Jan', 'Feb', 'March', 'April']
// let spliced = months.toSpliced(0, 1)
// console.log(spliced) // removes the first 2

// // const cars = ['Bently', 'Maserati', 'Opel', 'Mazda']
// const slice = cars.slice(1) // can take two arguments
// console.log(slice)

// const levels = ['one', 'two', 'three']
// // const position = levels.indexOf('one') + 1


// //lastindexof;
// const position = levels.lastIndexOf('two') + 1
// console.log(position)

// const vegis = ['cucumber', 'okra', 'apple']
// let arrange = vegis.sort()
// console.log(arrange)

// fruits.reverse()


//map 
// let numbers = [1, 2, 3, 4]

// let double = numbers.map(num => num * 2)

// console.log(double)

//u have a Price in dollars change to gh
let currencyUSD = [ 500, 1200, 3489]

let convertToGhs = currencyUSD.map(currency => currency * 12.50)

console.log(convertToGhs)

let cars = [
    { brand: 'Toyota', price: 180000},
    { brand: 'Mazda', price: 280000},
    { brand: 'Honda', price: 550000}
]

// let carNames = cars.map(car => car.brand)

// console.log(carNames)

let afforable = cars.filter(car => car <= 200000)

console.log(afforable)

let numbers = [23, 54, 39, 1, 15]

let over15 = numbers.filter(num => num > 30)

console.log(over15)

let users = [
    {name: 'ramzy', age: 24},
    {name: 'khalil', age: 19}
]

let found = users.find(user => user.name === 'ramzy')
console.log(found)

let fruits = ['mango', 'orange', 'pineapple']
fruits.forEach(fruit => console.log(fruit))

//shopping cart
let cart = [
    {name: 'shoe', price: 350},
    { name: 'bag', price: 230},
    {name: 'hat', price: 50}
]

let total = cart.reduce((sum, item) => sum + item.price, 0)

console.log(`Price total was ${total}`)

//counting votes

let votes = [
    { places: 'Greater-Accra', voteNo: 300},
    { places: 'Ho', voteNo: 350},
    { places: 'Tamale', voteNo: 400}
]
    let totalNo = votes.reduce((sum, paper) => sum + paper.voteNo, 0 )
    console.log(`New patrotic party had ${totalNo} votes`)

let numberz = [2, 3, 4, 5]

let double = numberz.map(num => num * 2)
console.log(double)
console.log(numberz)

