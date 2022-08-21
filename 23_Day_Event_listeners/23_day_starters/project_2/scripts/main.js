const container = document.createElement('div')
const keyPressed = document.createElement('div')
const keyCode = document.createElement('div')

container.style.width = '50%'
container.style.height = '500px'
container.style.margin = '0 auto'

keyPressed.style.backgroundColor = 'white'
keyPressed.style.margin = '0 auto'
keyPressed.style.width = '40%'
keyPressed.style.height = '100px'
keyPressed.style.position = 'absolute'
keyPressed.style.top = '30%'
keyPressed.style.left = '30%'
keyPressed.style.boxShadow = '2px 2px 2px 2px black'


keyCode.style.width = '10%'
keyCode.style.boxShadow = '2px 2px 2px 2px black'
keyCode.style.height = '70px'
keyCode.style.top = '55%'
keyCode.style.left = '45%'
keyCode.style.position = 'absolute'




document.body.appendChild(container)
container.appendChild(keyPressed)
container.appendChild(keyCode)


document.body.addEventListener('keydown', (e) => {
    keyPressed.textContent = 'you pressed ' + e.key
    keyPressed.style.fontSize = '50px'
    keyPressed.style.textAlign = 'center'
    keyPressed.style.fontWeight = '700'

    keyCode.textContent = e.keyCode
    keyCode.style.fontSize = '50px'
    keyCode.style.fontWeight = '700'
    keyCode.style.textAlign = 'center'
    keyCode.style.color = 'green'
    
    if (e.key === " "){
        keyPressed.textContent = 'you pressed space'
    }
})
