

const header = document.querySelector('header')
const h2 = document.querySelector('h2')
const h4 = document.querySelector('h4')
const h3 = document.querySelectorAll('h3')
const container = document.getElementById('countries-wrapper')



header.style.margin = 'auto'
header.style.width = '50%'


h2.style.textAlign = 'center'
h2.style.textTransform = 'uppercase'
h2.style.wordSpacing = '3px'
h2.style.letterSpacing = '10px'


h4.innerHTML = `total number of countries: ${countries.length}`
h4.style.textAlign = 'center'
h4.style.fontSize = '20px'
h4.style.wordSpacing = '3px'
h4.style.letterSpacing = '3px'

h3.forEach((tags) => {
    tags.style.fontSize = '15px'
    tags.style.textAlign = 'center'
})


let grids

for (i = 0; i < 193; i++) {
    grids = document.createElement('div')

    grids.style.border = '2px solid black'
    grids.style.float = 'left'
    grids.textContent = countries[i]
    grids.style.textAlign = 'center'
    grids.style.width = '12%'
    grids.style.padding = '10px'
    grids.style.margin = '5px'
    grids.style.borderRadius = '5px'
    grids.style.height = '50px'

    container.appendChild(grids)

}

container.style.width = '50%'
container.style.margin = 'auto'

