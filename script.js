const grid = document.querySelector('.container');
const clearBtn = document.querySelector('.clearBtn');
const createGridBtn = document.querySelector('.create-grid');
const gridSize = document.querySelector('input').value;

setupGrid(16);

function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener("mouseover",(e) => changeColor(e.target));
        grid.appendChild(gridElement);
    }

}

function changeColor(element){
    element.style["background-color"] = 'black';
}

clearBtn.addEventListener("click", cleanGrid);

function cleanGrid(){
    let divs = document.querySelectorAll('.grid-element');

    divs.forEach((div) => {
        div.style["background-color"] = '';
    })
}

createGridBtn.addEventListener("click", () => {
    grid.innerHTML = '';
    setupGrid(gridSize);
});