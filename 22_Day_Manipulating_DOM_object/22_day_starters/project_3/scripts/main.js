const h1 = document.createElement('h1')
const span = document.createElement('span')
const container = document.getElementById('wrapper');
let data = asabenehChallenges2020

const head = data.description
const year = data.challengeYear
const subtitle = data.challengeSubtitle
const keywords = data.keywords
const author = data.author
const challenge = data.challenges

// function randomColor(){
//     year.style.color = `#` +Math.floor(Math.random()*16777215).toString(16)
// }
// setInterval(randomColor, 1000)

// numbers

h1.textContent = `${head} ${year}`
container.append(h1)
span.append()

h1.style.fontSize = '30px'
h1.style.textAlign = 'center'




// container styles
container.style.width = '60%'
container.style.margin = '0 auto'














// function randomColor(){
//     year.style.color = `#` +Math.floor(Math.random()*16777215).toString(16)
// }
// setInterval(randomColor, 1000)