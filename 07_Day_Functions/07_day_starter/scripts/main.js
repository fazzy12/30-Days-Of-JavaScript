// Level 1

// number 1
// function fullName(firstName, secondName) {
//   return firstName + ' ' + secondName
// }
// console.log(fullName('ifeanyi', 'kalu'))

// number 2
// function fullName(firstName, secondName) {
//   return firstName + ' ' + secondName
// }
// console.log(fullName('ifeanyi', 'kalu'))

// number 3
// function addNumbers(num1, num2){
//     let sum = (num1 + num2)
//     return sum

// }
// console.log(addNumbers(49, 50));

// number 4
// function calcRect(width, height) {
//     const area = width * height
//     return area

// }
// console.log(calcRect(50, 50))

// number 5
// function clacPerimeter(length, width){
//     const perimeter = (length + width) * 2

//     return perimeter
// }
// console.log(clacPerimeter(29, 30))

// number 6
// function volumeOfRectPrism(length, width, height){
//     const volume = length * width * height
//     return volume
// }
// console.log(volumeOfRectPrism(29, 30, 60))

// number 7
// function areaOfCircle(r1, r2) {
//     const pi = Math.PI
//     const area = Math.floor(pi * r1 * r2)
//     return area
    
// }
// console.log(areaOfCircle(59, 94))

// number 8
// function circumOfCircle(radius){

//     const circumfrence = 2 * Math.PI * radius
//     return circumfrence

// }
// console.log(circumOfCircle(10))

// number 9
// function calcDensity(mass, volume){
//     const density = mass/volume
//     return density
// }
// console.log(calcDensity(23, 12))

// number 10
// function calcSpeed(distance, time){

//     const speed = distance / time
//     return speed

// }

// console.log(calcSpeed(1000, 24))

// number 11
// function calcSubstance(mass, gravity){
//     const weight = mass * gravity
//     return weight
// }

// console.log(calcSubstance(1000, 12))

// number 12
// function convertCelsiusToFahrenheit(celcius){
//     const fahreinheit = (celcius * 9/5) + 32
//     return fahreinheit
// }
// console.log(convertCelsiusToFahrenheit(20))

// number 13
// function checkBmi(weight, height) {
//     const bmi = Math.floor((height * height) / weight);

//     if (bmi < 18.5) {
//         alert('Underweight:');
//     }
//     else if (bmi == 18.5 && bmi == 24.9) {
//         alert('Normal weight:');
//     }
//     else if (bmi == 25 && bmi == 29.9) {
//         alert('overweight:');
//     }
//     else if (bmi >= 30) {
//         alert('Obese:');
//     } else {
//         // return
//     }

//     return bmi
// }
// console.log(checkBmi(60, 5))

// number 14
// function findMax(num1, num2, num3, num4) {

//     let sum = 0

//     if (num1 > num2) {
//         sum = num1
//     }else if (num2 > num3){
//         sum = num2
//     }else if (num3 > num4) {
//         sum = num3
//     }else{
//         sum = num4
//     }

//     return sum

// }
// console.log(findMax(10, 77, 20, 30,))
 

// level 2

// Number 5

// function swapValue(a, b){
//     return [a, b] = [b, a];
// }
// console.log(swapValue(5, 10))
// console.log(swapValue(10, 5))
// function randrgb() {
//     var red = Math.floor(Math.random() * 256)
//     var green = Math.floor(Math.random() * 256)
//     var blue = Math.floor(Math.random() * 256)
//     var rgb = "rgb(" + red + "," + green + "," + blue + ")"  
//     return rgb
//   }
  
//   console.log(randrgb())

// Number 6
// function reverseArray(arr){
//     let newArray = []
//     for(var i = arr.length -1; i >= 0; i--){
//         newArray.push[arr[i]]

//     }  
    
//     return newArray
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))

// function reverseArrayInPlace(arr) {
//     for (var i = 0; i <= (arr.length / 2); i++) {
//         let el = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = el;
//     }
//     return arr;
//   }

//   console.log(reverseArrayIn([1, 2, 3, 4, 5]))

// number 7

// function sumOfOdds(numArray) {
//     var sum = 0
//     for(var i=0; i < numArray.length; i++) {

//         if (numArray[i] % 2 == 0) {
//             sum += numArray[i]
//         }
//     } 
    
//     return sum
// }

// console.log(sumOfOdds([1, 2, 3, 4, 5, 5, 6]))

// number 12

// function sumOfEven(numArray) {
//     var sum = 0
//     for(var i=0; i < numArray.length; i++) {

//         if (numArray[i] % 3 == 0) {
//             sum += numArray[i]
//         }
//     } 
    
//     return sum
// }
// console.log(sumOfEven([1, 2, 3, 4, 5, 5, 6]))

// number 13
function evensAndOdds(nums){
    var sumEven = 0
    var sumOdd = 0
    for (var i = 0; i < nums; i++){

        // if (nums % 2 == 0){

        // return  sumEven += nums

        // }else if (nums % 3 == 0){

        //  return  sumOdd += nums
        // }
    }
}

console.log(evensAndOdds(100))




