

// The forEach() method calls a function for each element in an array

// The map() method creates a new array with the results of a function call on each element in the array

// The filter() method creates a new array with the elements that pass the result of a given test.

// The reduce() method will reduce an array to a single value

// number 3
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// number 3
// countries.forEach((country) => console.log(country))

// number 4
// names.forEach((name) => console.log(name))

// number 5
// numbers.forEach((number) => console.log(number))

// number 6
// countries.map((country) => console.log(country.toUpperCase()))

// number 7
// const lenghth = countries.map((country) => country.length)
// console.log(lenghth)

// number 8
// numbers.map((number) => console.log(number * number))

// number 9
// names.map((name) => console.log(name.toUpperCase()))

// number 10
// products.map(product => {console.log(product.product + ' = ' + product.price)})

// number 11
// const land = countries.filter((country) => 
//     country.includes('land'))
// console.log(land)

// number 12
// const sixchars = countries.filter((country) => country.length === 6)
// console.log(sixchars)

// number 13
// const sixOrMoreChars = countries.filter((country) => country.length >= 6)
// console.log(sixOrMoreChars)

// number 14
// const startWithE = countries.filter((country) => country.charAt(0) === 'F')
// console.log(startWithE)

// number 15


// number 16
// function getStringLists(arr){
//     const strings = arr.filter((fil) => typeof fil == 'string')
//     console.log(strings)
// }
// const arr1 = [1, 2, 3, 4, 5, 'first', 'last', 'secondName', true, false]
// getStringLists(arr1)

// number 17
// const sum = numbers.reduce((acc, curr) => acc + curr, 0)
// console.log(sum)

// number 18
// const concatAll = countries.reduce((acc, curr) => acc.concat(`, are north european coutries ${curr}`))

// console.log(concatAll)

// number 19

// number 20
// const longestName = names.some((name) => name.length > 7)
// console.log(longestName)

// number 21
// const containsLand = countries.every((country) => country === 'land')
// console.log(containsLand)

// number 22

// number 23
// const findCountry = countries.find((country) => country.length === 6)
// console.log(findCountry)

// number 24
// const norwayIndex = countries.findIndex((country) =>  country === 'Norway')
// console.log(norwayIndex)

// number 25
// const findPosition = countries.findIndex((country) => country === 'Russia')
// console.log(findPosition)

// number 26

// level 2

// number 1
// function squareSum(numbers){
  
//  return numbers.map((nums) => nums * nums).reduce((acc, curr) => acc + curr)
// }

// console.log(squareSum([1,2]))

// function sumMix(x){
//   let sum = 0 
//   for (let i = 0; i <= x.length; i++){
//     const num = parseFloat(x)
//     sum += num
//   }
//   return sum
// }

// console.log(sumMix([9, 3, '7', '3']))

// number 3
function noSpace(x){
  return x.replace(/" "/, '')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))