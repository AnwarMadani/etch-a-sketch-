const container = document.querySelector('.container');

createGrid(16);

function createGrid(size){
    container.computedStyleMap.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.computedStyleMap.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++){
        const newDiv = document.createElement('div');
        newDiv.addEventListener("mouseover", changeColor);
        container.appendChild(newDiv);
    }
}

function changeColor(e){
    e.target.style["background-color"] = 'black';
}