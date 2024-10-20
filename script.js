const grid = document.querySelector('.container');
const clearBtn = document.querySelector('.clearBtn');
const createGridBtn = document.querySelector('.create-grid');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');

let currentColor = 'black';
let currentMode = 'color';
let currentSize = 16;

setupGrid(16);

colorPicker.addEventListener("input", (e) => setCurrentColor(e.target.value));
colorBtn.addEventListener("click", () => setCurrentMode('color'));
rainbowBtn.addEventListener("click", () => setCurrentMode('rainbow'));
eraserBtn.addEventListener("click", () => setCurrentMode('eraser'));
colorBtn.addEventListener("click", () => setCurrentMode('color'));
clearBtn.addEventListener("click", cleanGrid);
sizeSlider.addEventListener("mousemove", (e) => updateSizeValue(e.target.value));
sizeSlider.addEventListener("change", (e) => changeSize(e.target.value));


function setCurrentColor(newColor){
    currentColor = newColor;
}

function setCurrentMode(newMode){
    // activateButton(newMode);
    currentMode = newMode;
}

function setCurrentSize(newSize){
    currentSize = newSize;
}

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

function changeColor(e){
    if (currentMode === 'rainbow'){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if(currentMode === 'color'){
        e.style.backgroundColor = currentColor;
    } else if(currentMode === 'eraser'){
        e.style.backgroundColor = 'white';
    }
}

function cleanGrid(){
    let divs = document.querySelectorAll('.grid-element');

    divs.forEach((div) => {
        div.style["background-color"] = '';
    })
}

createGridBtn.addEventListener("click", () => {
    console.log(currentSize);
    grid.innerHTML = '';
    setupGrid(currentSize);
});


function changeSize(value){
    setCurrentSize(value);
    updateSizeValue(value);
    grid.innerHTML = '';
}

function updateSizeValue(value){
    sizeValue.innerHTML = `${value} x ${value}`;
}