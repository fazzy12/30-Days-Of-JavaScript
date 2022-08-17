const  container = document.getElementById('wrapper')
const year = document.getElementById('year')
const underline = document.querySelector('h2')
const fistHeader = document.querySelector('h1')
const randColorEl = document.createElement('p')
const unorderedList = document.querySelector('ul')
const list = document.querySelectorAll('li')







// position container style
container.style.width = '80%'
container.style.position = 'absolute'

container.style.top = '5%'
container.style.left = '10%'
container.style.textAlign = 'center'

year.style.fontSize = '150%'
underline.style.textDecoration = 'underline'



// random color generator
function randomColor(){
    year.style.color = `#` +Math.floor(Math.random()*16777215).toString(16)
}
setInterval(randomColor, 1000)



container.insertBefore(randColorEl, unorderedList)



function timer(){
    // format date
    const date = new Date()
    
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let month = months[date.getMonth()]
    let day = date.getDate()
    let currentYear = date.getFullYear()
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let time = `${month} ${day}, ${currentYear} ${hh} : ${mm} : ${ss}`
    randColorEl.innerHTML = time
}setInterval(timer,  1000)


// timer backgroundColor
function randomColor2(){
    randColorEl.style.backgroundColor = `#` +Math.floor(Math.random()*16777215).toString(16)
}
setInterval(randomColor2, 1000)


randColorEl.style.width = '20%'
randColorEl.style.marginLeft = '40%'
randColorEl.style.height = '20px'
randColorEl.style.padding = '10px'
randColorEl.style.borderRadius = '10px'


// items


list.forEach((lists) => {
    
    // dynamic colors
    if (lists.textContent.includes('Done')) {
        console.log(lists.style.backgroundColor = 'green')
    }
    else if (lists.textContent.includes('Ongoing')) {
        lists.style.backgroundColor = 'yellow'
    }
    else{
        lists.style.backgroundColor = 'orange'
    }
    
    lists.style.fontSize = '20px'
    lists.style.marginTop = '2px'
    lists.style.padding = '5px'
    lists.style.borderRadius = '5px'
})

unorderedList.style.width = '50%'
unorderedList.style.listStyle = 'none'
unorderedList.style.margin = 'auto'