const grid = document.querySelector('.container');

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