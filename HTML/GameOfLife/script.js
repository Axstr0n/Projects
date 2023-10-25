let generation = [];
let isPlaying = false;
const cellSize = 10;
// Width
const screenWidth = document.getElementById('screen-wrapper').clientWidth;
const cols = Math.floor(screenWidth / cellSize);
// Height
const screenHeight = document.getElementById('screen-wrapper').clientHeight; // %
const rows = Math.floor(screenHeight / cellSize);

CreateBoard(rows, cols, cellSize);

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', function(){
    isPlaying = true;
    PlayGame();
})

async function PlayGame(){
    while(isPlaying){
        CreateNextGeneration();
        await delay(100);
    }
}

const stepButton = document.getElementById('step-button');
stepButton.addEventListener('click', function(){
    isPlaying = false;
    CreateNextGeneration();
})

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    isPlaying = false;
    CreateBoard(rows, cols, cellSize);
})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function CreateNextGeneration(){
    let nextGeneration = [];
    for (let i = 0; i < rows; i++) {
        let array = new Array(cols);
        nextGeneration.push(array);
    }
    // Evaluate
    let hasChanged = false;
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let status = generation[x][y];
            let div = document.getElementById(`cell-${x}-${y}`);
            let neighbors = this.CountNeighbors(x,y);
            let nextStatus;
            // Rules
            if(status == 0 && neighbors == 3){
                hasChanged = true;
                nextStatus = 1;
            }
            else if(status == 1 && (neighbors < 2 || neighbors > 3)){
                hasChanged = true;
                nextStatus = 0;
            }
            else{
                nextStatus = status;
            }
            nextGeneration[x][y] = nextStatus;
            if(status == nextStatus){

            }
            // If status changed update cell color
            else{
                if(nextStatus == 1){
                    div.style.backgroundColor = 'white';
                }
                else if(nextStatus == 0){
                    div.style.backgroundColor = 'black';
                }

            }
        }
        
    }
    generation = nextGeneration;
    nextGeneration = [];
    // If nothing changed stop loop
    if(hasChanged == false){
        isPlaying = false;
    }
}

function CountNeighbors(x,y){
    // Count live neighbors around cell
    let neighbors = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const xi = (x + i + generation.length) % generation.length;
            const yi = (y + j + generation[xi].length) % generation[xi].length; 
            let status = generation[xi][yi];
            neighbors += status
        }
    }
    neighbors -= generation[x][y];
    return neighbors;
}

function CreateBoard(rows, cols, cellSize){
    ClearBoard();
    const screen = document.getElementById('screen');
    screen.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
    screen.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
    for (let x = 0; x < rows; x++) {
        let row = [];
        for (let y = 0; y < cols; y++) {
            let status = 0;
            row.push(status);

            let div = document.createElement('div');
            div.classList.add('cell');
            div.setAttribute('id', `cell-${x}-${y}`);
            div.style.backgroundColor = 'black';
            //#region Events
            document.addEventListener('mousedown', () => {
                this.mouseDown = true;
            });
        
            div.addEventListener('mouseover', () => {
                if (this.mouseDown) {
                    //let div = document.getElementById(`cell-${x}-${y}`)
                    generation[x][y] = 1;
                    div.style.backgroundColor = 'white';
                }
            });
        
            document.addEventListener('mouseup', () => {
                this.mouseDown = false;
            });
            //#endregion
            screen.appendChild(div);
        }
        generation.push(row);
    }
}

function ClearBoard(){
    const screen = document.getElementById('screen');
    while(screen.firstChild){
        screen.removeChild(screen.firstChild);
    }
    generation = [];
}

