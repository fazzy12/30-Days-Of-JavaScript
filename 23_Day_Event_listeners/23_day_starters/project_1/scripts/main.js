// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const container = document.querySelector('#wrapper');
const input = document.createElement('input');
const button = document.createElement('button');
const grids = document.createElement('div');



h1.style.textAlign = 'center';
h2.style.textAlign = 'center';
h3.style.textAlign = 'center';
h1.style.color = 'green';



container.style.width = '50%';
container.style.margin = 'auto';
container.style.marginTop = '20px';


input.style.width = '60%';
input.style.border = '2px solid green';
input.style.height = '30px';
input.style.borderRadius = '5px';
input.style.marginBottom = '20px';


button.style.float = 'right';
button.style.height = '35px';
button.textContent = 'generate numbers';
button.style.backgroundColor = 'green';
button.style.color = 'white';
button.style.border = 'none';
button.style.width = '30%';
button.style.marginRight = '50px';
button.style.padding = '8px';
button.style.fontSize = '15px';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

container.appendChild(button);
container.appendChild(input);


button.addEventListener('click', function () {
    // get input value
    const inputValue = input.value;


    // generate numbers
    for (let i = 0; i <= inputValue; i++) {
        const divs = document.createElement('div');

        divs.style.float = 'left';
        divs.style.width = '3%';
        divs.style.height = '20px';
        divs.style.margin = '2px';
        divs.style.border = '1.4px solid black';
        divs.style.borderRadius = '5px';
        divs.style.textAlign = 'center';
        divs.style.padding = '20px';

        divs.innerHTML = i;

        console.log(container);

        container.appendChild(divs);

        // check if input is valid
        if (i % 2 === 0) {
            divs.style.backgroundColor = 'green';
        } else if (i % 3 === 0) {
            divs.style.backgroundColor = 'yellow';
        } else {
            divs.style.backgroundColor = 'red';
        }
    }



    // check if input is not empty
    if (inputValue === "") {
        const div = document.createElement('div');
        div.textContent = "Please enter a value...";
        div.style.color = 'red';
        container.append(div);
    }

    if (inputValue !== NaN) {
        const pTag = document.createElement('p');
        pTag.textContent == "Please enter a number...";
        pTag.style.color = 'red';
        container.append(pTag);
    }
});
