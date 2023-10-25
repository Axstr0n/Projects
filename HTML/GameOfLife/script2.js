class Cell{
    constructor(x,y, status, div, board){
        this.x = x;
        this.y = y;
        this.status = status; // 0-black-death 1-white-live
        this.div = div;
        this.board = board;
        this.mouseEnter = false;
        this.mouseDown = false;
        this.SetEvents();
        this.ShowStatus()
    }
    //mouseEnter = false;
    //mouseDown = false;
    //statusHistory = [];
    GetNeighbors(){
        let liveNeighbors = 0;
        /*
        for (let i = this.x-1; i <= this.x+1; i++){
            for (let j = this.y-1; j <= this.y+1; j++){
                if((0 <= i && i < this.board.layout.length) && (0 <= j && j < this.board.layout[i].length)){
                    const neighbor = this.board.layout[i][j];
                    liveNeighbors += neighbor.status;
                }
            }
        }*/
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                const xi = (this.x + i + board.layout.length) % board.layout.length;
                const yi = (this.y + j + board.layout[xi].length) % board.layout[xi].length;
                let cell = this.board.layout[xi][yi];
                liveNeighbors += cell.status;
            }
            
        }
        liveNeighbors -= this.status;
        /*console.log(liveNeighbors)
        liveNeighbors -= this.board.layout[this.x][this.y].status;
        console.log(liveNeighbors)*/
        return liveNeighbors;
    }
    ShowStatus(){
        //this.statusHistory.push(this.status);
        if(this.status === 0){
            //this.div.style.backgroundColor = 'black';
            this.div.style.backgroundColor = 'transparent';
            this.div.style.color = 'white';
        }
        else{
            this.div.style.backgroundColor = 'white';
            this.div.style.color = 'black';
        }
        //this.div.innerHTML = this.status;
    }
    SwitchStatus(){
        if(this.status == 0){
            this.status = 1;
        }
        else{
            this.status = 0;
        }
        this.ShowStatus();
    }
    ChangeStatus(status){
        this.status = status;
        //this.statusHistory.push(this.status);
        this.ShowStatus();
    }
    SetEvents() {
        document.addEventListener('mousedown', () => {
            this.mouseDown = true;
        });
    
        this.div.addEventListener('mouseover', () => {
            if (this.mouseDown) {
                this.ChangeStatus(1);
            }
        });
    
        document.addEventListener('mouseup', () => {
            this.mouseDown = false;
        });
    }
    
}
class Board{
    constructor(xSize, ySize, cellSize){
        this.xSize = xSize;
        this.ySize = ySize;
        this.cellSize = cellSize;
    }
    isPlaying = false;
    layout = [];
    nextGen = [];
    Clear(){
        const screen = document.getElementById('screen');
        while(screen.firstChild){
            screen.removeChild(screen.firstChild);
        }
        this.layout = [];
        console.log('BoardClear: done')
    }
    CreateEmptyBoard(){
        this.Clear();
        this.layout = [];

        const screen = document.getElementById('screen');
        screen.style.gridTemplateRows = `repeat(${this.xSize}, ${this.cellSize}px)`;
        screen.style.gridTemplateColumns = `repeat(${this.ySize}, ${this.cellSize}px)`;
        for (let x = 0; x < this.xSize; x++) {
            let cellRow = [];
            for (let y = 0; y < this.ySize; y++) {
                let div = document.createElement('div');
                div.draggable = false;
                div.classList.add('cell');
                screen.appendChild(div);
                let status = 0;
                let cell = new Cell(x,y,status, div, this);
                //cell.SetEvents();
                cell.ShowStatus();
                cellRow.push(cell);
            }
            this.layout.push(cellRow);
        }
        console.log('BoardCreate: done');
    }
    CreateAll(){
        this.Clear();
        this.layout = [];
        this.statusLayout = [];

        const screen = document.getElementById('screen');
        screen.style.gridTemplateRows = `repeat(${this.xSize}, 10px)`;
        screen.style.gridTemplateColumns = `repeat(${this.ySize}, 10px)`;

        for (let x = 0; x < this.xSize; x++) {
            let cellRow = [];
            let statusRow = [];
            for (let y = 0; y < this.ySize; y++) {
                let div = document.createElement('div');
                div.classList.add('cell');
                screen.appendChild(div);
                let status;
                let rand = Math.random();
                if(rand >= 0.1){
                    status = 0;
                }
                else{
                    status = 1;
                }
                let cell = new Cell(x,y,status, div, this);
                cell.ShowStatus();
                cellRow.push(cell);
                statusRow.push(status);
            }
            this.layout.push(cellRow);
            this.statusLayout.push(statusRow);
            //console.log(this.layout);
        }
        console.log('BoardCreate: done');
    }
    Start(){
        //let nextGen = this.layout.slice();

        //let nextGen = JSON.parse(JSON.stringify(this.layout)); 
        /*for (let x = 0; x < this.xSize; x++) {
            nextGen[x] = new Array(this.ySize);
        }*/
        console.log(this.layout)
        this.nextGen = this.layout.map(innerArray =>
            innerArray.map(cell => new Cell(cell.x, cell.y, cell.status, cell.div, this))
          );
        console.log(this.nextGen);
        for (let x = 0; x < this.xSize; x++) {
            //this.nextGen[x] = new Array(this.ySize);
            for (let y = 0; y < this.ySize; y++) {
                let cell = this.layout[x][y];
                //let nextCell = nextGen[x][y];
                let nextStatus;
                
                let neighbors = this.CountNeighbors(x,y);
                
                if(cell.status == 0 && neighbors == 2){
                    nextStatus = 1;
                }
                else if(cell.status == 1 && (neighbors < 2 || neighbors > 2)){
                    nextStatus = 0;
                }
                else{
                    nextStatus = cell.status;
                }/*
                if(cell.status == 0 && neighbors == 3){
                    nextStatus = 1;
                }
                else if(cell.status == 1 && (neighbors < 2 || neighbors > 5)){
                    nextStatus = 0;
                }
                else{
                    nextStatus = cell.status;
                }*/
                //let nextCell = new Cell(x,y,nextStatus,cell.div,cell.board);
                //let nextCell = cell;
                let nextCell = this.nextGen[x][y];
                nextCell.status = nextStatus;
                nextCell.ChangeStatus(nextStatus);
                //this.nextGen[x][y] = nextCell;
            }
        }
        this.layout = this.nextGen;
        
        this.nextGen = [];
    }
    CountNeighbors(x, y){
        let liveNeighbors = 0;
        /*
        for (let i = this.x-1; i <= this.x+1; i++){
            for (let j = this.y-1; j <= this.y+1; j++){
                if((0 <= i && i < this.board.layout.length) && (0 <= j && j < this.board.layout[i].length)){
                    const neighbor = this.board.layout[i][j];
                    liveNeighbors += neighbor.status;
                }
            }
        }*/
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                const xi = (x + i + this.layout.length) % this.layout.length;
                const yi = (y + j + this.layout[xi].length) % this.layout[xi].length;
                let cell = this.layout[xi][yi];
                liveNeighbors += cell.status;
            }
            
        }
        liveNeighbors -= this.layout[x][y].status;
        /*console.log(liveNeighbors)
        liveNeighbors -= this.board.layout[this.x][this.y].status;*/
        //console.log(liveNeighbors)
        return liveNeighbors;
    }
    Make2dArray(){
        /*let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
        }
        return arr;*/

        let array = new Array(this.ySize);
        for (let i = 0; i < array.length; i++) {
            array[i] = new Array(this.xSize);
        }
        return array;
    }
}

class Board1{
    constructor(xSize, ySize, cellSize){
        this.xSize = xSize;
        this.ySize = ySize;
        this.cellSize = cellSize;
    }
    isPlaying = false;
    layout = [];
    Clear(){
        const screen = document.getElementById('screen');
        while(screen.firstChild){
            screen.removeChild(screen.firstChild);
        }
        this.layout = [];
        console.log('BoardClear: done')
    }
    CreateEmptyBoard(){
        this.Clear();
        this.layout = [];

        const screen = document.getElementById('screen');
        screen.style.gridTemplateRows = `repeat(${this.xSize}, ${this.cellSize}px)`;
        screen.style.gridTemplateColumns = `repeat(${this.ySize}, ${this.cellSize}px)`;
        for (let x = 0; x < this.xSize; x++) {
            let cellRow = [];
            for (let y = 0; y < this.ySize; y++) {
                let div = document.createElement('div');
                div.draggable = false;
                div.classList.add('cell');
                div.setAttribute('id', `cell-${x}-${y}`);
                div.style.backgroundColor = 'black';

                document.addEventListener('mousedown', () => {
                    this.mouseDown = true;
                });
            
                div.addEventListener('mouseover', () => {
                    if (this.mouseDown) {
                        //let div = document.getElementById(`cell-${x}-${y}`)
                        this.layout[x][y] = 1;
                        div.style.backgroundColor = 'white';
                    }
                });
            
                document.addEventListener('mouseup', () => {
                    this.mouseDown = false;
                });

                screen.appendChild(div);
                let status = 0;
                cellRow.push(status);
            }
            this.layout.push(cellRow);
        }
        console.log('BoardCreate: done');
    }
    CreateAll(){
        this.Clear();
        this.layout = [];
        this.statusLayout = [];

        const screen = document.getElementById('screen');
        screen.style.gridTemplateRows = `repeat(${this.xSize}, 10px)`;
        screen.style.gridTemplateColumns = `repeat(${this.ySize}, 10px)`;

        for (let x = 0; x < this.xSize; x++) {
            let cellRow = [];
            let statusRow = [];
            for (let y = 0; y < this.ySize; y++) {
                let div = document.createElement('div');
                div.classList.add('cell');
                screen.appendChild(div);
                let status;
                let rand = Math.random();
                if(rand >= 0.1){
                    status = 0;
                }
                else{
                    status = 1;
                }
                let cell = new Cell(x,y,status, div, this);
                cell.ShowStatus();
                cellRow.push(cell);
                statusRow.push(status);
            }
            this.layout.push(cellRow);
            this.statusLayout.push(statusRow);
            //console.log(this.layout);
        }
        console.log('BoardCreate: done');
    }
    Start(){
        //let nextGen = this.layout.slice();

        //let nextGen = JSON.parse(JSON.stringify(this.layout)); 
        /*for (let x = 0; x < this.xSize; x++) {
            nextGen[x] = new Array(this.ySize);
        }*/
        let nextGen = this.Make2dArray();
        for (let x = 0; x < this.xSize; x++) {
            for (let y = 0; y < this.ySize; y++) {
                let status = this.layout[x][y];
                let div = document.getElementById(`cell-${x}-${y}`);
                let nextStatus;
                
                let neighbors = this.CountNeighbors(x,y);
                
                if(status == 0 && neighbors == 3){
                    nextStatus = 1;
                }
                else if(status == 1 && (neighbors < 2 || neighbors > 3)){
                    nextStatus = 0;
                }
                else{
                    nextStatus = status;
                }
                nextGen[x][y] = nextStatus;
                if(status == nextStatus){

                } else{
                    if(nextStatus == 1){
                        div.style.backgroundColor = 'white';
                    }
                    else if(nextStatus == 0){
                        div.style.backgroundColor = 'black';
                    }

                }
            }
        }
        this.layout = nextGen;
        console.table(this.layout)
        nextGen = [];
    }
    CountNeighbors(x, y){
        let liveNeighbors = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                const xi = (x + i + this.layout.length) % this.layout.length;
                const yi = (y + j + this.layout[xi].length) % this.layout[xi].length;
                let status = this.layout[xi][yi];
                liveNeighbors += status;
            }
            
        }
        liveNeighbors -= this.layout[x][y];
        return liveNeighbors;
    }
    
    Make2dArray(){
        let array = new Array(this.xSize);
        for (let i = 0; i < this.ySize; i++) {
            array[i] = new Array(this.xSize);
        }
        return array;
    }
}
function ChangeStatus(div, layout, x, y, status){
    layout[x][y] = status;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const cellSize = 10;
// Width
const screenWidth = document.getElementById('screen-wrapper').clientWidth;
const cols = Math.floor(screenWidth / cellSize);
console.log(cols)
// Height
const screenHeight = document.getElementById('screen').clientHeight; // %
const rows = Math.floor(screenHeight / cellSize);
console.log(rows)
//let board = new Board1(5,5, cellSize);
let board = new Board1(rows, cols, cellSize);
board.CreateEmptyBoard();
/*const createButton = document.getElementById('create-button');
createButton.addEventListener('click', function(){
    board.CreateEmptyBoard();
});*/

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', function(){
    board.isPlaying = true;
    PlayGame();
    //board.Start()
})
async function PlayGame(){
    while(board.isPlaying){
        board.Start();
        await delay(100);
    }
    
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    board.isPlaying = false;
    board.CreateEmptyBoard();
})







