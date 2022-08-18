// selector
const header1 = document.querySelector('h1')
const header2 = document.querySelector('h2')
const header3 = document.querySelector('h3')
const container = document.getElementById('wrapper')


header1.style.textAlign = 'center'
header1.style.marginTop = '0'

header2.style.textAlign = 'center'
header2.style.textDecoration = 'underline'
header3.style.textAlign = 'center'
header3.style.textDecoration = 'underline'

let grids

for(i = 0; i < 102; i++) {
    grids = document.createElement('div')
    
    grids.style.float = 'left'
    grids.style.backgroundColor = 'red'
    grids.textContent = i
    grids.style.textAlign = 'center'
    grids.style.width = '10%'
    grids.style.padding = '10px'
    grids.style.margin = '5px'
    grids.style.color = 'white'
    grids.style.borderRadius = '5px'

    if (i % 2 === 0) {
        grids.style.backgroundColor = 'green'
    }else if (i % 3 === 0) {
        grids.style.backgroundColor = 'yellow'
    }else {
        grids.style.backgroundColor = 'red'
    }
    
    container.appendChild(grids)
    
}

container.style.width = '50%'
container.style.margin = 'auto'


