
class Game{
    hasStarted = false;
    hasWon = false;
    hasEnded = false;
    Play(){
        document.getElementById('result').style.display = 'none';
        const xRange = 10;
        const yRange = 10;
        const numOfMines = 10;
        board = new Board(this, xRange, yRange, numOfMines);
        board.Create();
        board.SetMines();
        placedFlagNumber = 0;
        SetFlagCounter(placedFlagNumber);
    }
    Lost(){
        board.RevealBombs();
        this.hasEnded = true;
        this.DisplayResult("LOST");
    }
    Won(){
        this.hasWon = true;
        board.RevealBombs();
        this.hasEnded = true;
        this.DisplayResult("WON");
    }
    DisplayResult(string){
        let result =  document.getElementById('result');
        result.innerHTML = string;
        result.style.display = 'block';
    }
}

class Board{
    constructor(game, xRange, yRange, numOfMines){
        this.game = game;
        this.xRange = xRange;
        this.yRange = yRange;
        this.numOfMines = numOfMines;
    }
    layout = [];
    mines = [];
    flags = [];
    Setup(){
        this.Create();
        this.SetMines();
    }
    Clear(){
        const boardWrapper = document.getElementById('board-wrapper')
        if(boardWrapper.firstChild){
            while(boardWrapper.firstChild){
                boardWrapper.removeChild(boardWrapper.firstChild);
            }
        }
    }
    Create(){
        this.Clear();
        let board = document.createElement('div');
        board.classList.add('board');
        
        let screenWidth = board.style.width;
        board.style.minWidth = `${screenWidth}px`;
        //board.style.minHeight = `${screenWidth}px`
        board.style.gridTemplateColumns = `repeat(${this.xRange}, ${100/this.xRange}%)`;
        board.style.gridTemplateRows = `repeat(${this.yRange}, ${100/this.yRange}%)`;
        board.setAttribute('id', 'board');
        document.getElementById('board-wrapper').appendChild(board);
        for (let x = 0; x < this.xRange; x++) {
            let row = [];
            for (let y = 0; y < this.yRange; y++) {
                let button = document.createElement('button');
                button.classList.add('cell');
                button.innerHTML = '';
                button.setAttribute('id', `cell-${x}-${y}`);
                let cell = new Cell(button, x, y, 0, false, false, this.layout);
                row.push(cell);
                button.addEventListener('click', function(){
                    if(game.hasEnded) return;
                    if(!game.hasStarted){
                        game.hasStarted = true;
                    }
                    if(isPlacingFlags === true){
                        cell.Flag();
                    }
                    else if(isPlacingFlags === false){
                        cell.Reveal();
                    }
                })
                document.getElementById('board').appendChild(button);
            }
            this.layout.push(row);
        }
        //console.log("CreatingBoard: done");
    }
    GetLayout(){
        console.log(this.layout);
        return this.layout;
    }
    GetMinesNumber(){
        return this.mines.length;
    }
    SetMines(){
        let possibleCells = [];
        for (let x = 0; x < this.xRange; x++) {
            for (let y = 0; y < this.yRange; y++) {
                let cell = this.layout[x][y];
                possibleCells.push(cell);
            }
        }
        for (let i = 0; i < this.numOfMines; i++) {
            let cellIndex = RandomIntFromInterval(0, possibleCells.length-1);
            let cell = possibleCells[cellIndex];
            cell.status = -1;
            possibleCells.splice(cellIndex, 1);
            this.mines.push(cell);
        }
        //console.log("SetMines: done")
        //console.log(this.mines);
        this.SetMineNeighbors();
    }
    SetMineNeighbors(){
        for (let i = 0; i < this.mines.length; i++) {
            const mine = this.mines[i];
            mine.SetNeighbors();
        }
        this.ColorMineNeighbors();
        //console.log("SetMineNeighbors: done")
    }
    ColorMineNeighbors(){
        for (let x = 0; x < this.xRange; x++) {
            for (let y = 0; y < this.yRange; y++) {
                let cell = this.layout[x][y];
                let status = cell.status;
                switch (status) {
                    case 1:
                        cell.button.style.color = 'blue';
                        break;
                    case 2:
                        cell.button.style.color = 'green';
                        break;
                    case 3:
                        cell.button.style.color = 'red';
                        break;
                    case 4:
                        cell.button.style.color = 'purple';
                        break;
                    case 5:
                        cell.button.style.color = 'maroon';
                        break;
                    case 6:
                        cell.button.style.color = 'turquoise';
                        break;
                    case 7:
                        cell.button.style.color = 'black';
                        break;
                    case 8:
                        cell.button.style.color = 'gray';
                        break;
                    default:
                        break;
                }
            }
        }
    }
    RevealBombs(){
        for (let i = 0; i < this.mines.length; i++) {
            const mine = this.mines[i];
            mine.Reveal();
        }
    }
    RevealAll(){
        for (let x = 0; x < this.xRange; x++) {
            for (let y = 0; y < this.yRange; y++) {
                let cell = this.layout[x][y];
                cell.Reveal();
            }
        }
    }
    CheckWon(){
        if(game.hasWon) return;
        let hasWon = false;
        //console.log(`${this.flags.length} ${this.numOfMines}`);
        if(this.flags.length === this.numOfMines){
            let sameSpot = 0;
            for (let f = 0; f < this.flags.length; f++) {
                const flag = this.flags[f];
                for (let m = 0; m < this.mines.length; m++) {
                    const mine = this.mines[m];
                    if(flag.x === mine.x && flag.y === mine.y){
                        sameSpot ++;
                    }
                    
                }
            }
            //console.log(`${sameSpot} ${this.mines.length}`);
            if(sameSpot == this.mines.length){
                hasWon = true;
                game.Won();
                //console.log(`HasWon: ${hasWon}`)
            }
        }
        else{
            let revealed = 0;
            for (let x = 0; x < this.xRange; x++) {
                for (let y = 0; y < this.yRange; y++) {
                    let cell = this.layout[x][y];
                    if(cell.status === -1){}
                    else if(cell.isRevealed){
                        revealed ++;
                    }
                }
            }
            if(revealed === (this.xRange*this.yRange)-this.numOfMines){
                hasWon = true;
                game.Won();
                //console.log(`HasWon: ${hasWon}`)
            }
        }
    }
    ///////
    Visible(){
        for (let x = 0; x < this.xRange; x++) {
            for (let y = 0; y < this.yRange; y++) {
                this.layout[x][y].Visible();
                
            }
            
        }
    }
}
function RandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
class Cell {
    constructor(button, x, y, status, isRevealed, isFlaged, board) {
        this.button = button;
        this.x = x;
        this.y = y;
        this.status = status;
        this.isRevealed = isRevealed;
        this.isFlaged = isFlaged;
        this.board = board;
    }
    Visible(){
        this.button.innerHTML = this.status;
    }
    Invisible(){
        this.button.innerHTML = '';
    }
    Flag(){
        if(this.isRevealed) return;
        if(!this.isFlaged && placedFlagNumber >= board.GetMinesNumber()) return;
        this.isFlaged = !this.isFlaged;
        if(this.isFlaged){
            let flagImg = document.createElement('img');
            flagImg.classList.add('cell-flag');
            flagImg.src = 'Icons/flag.svg';
            this.button.appendChild(flagImg);
            placedFlagNumber += 1;
            board.flags.push(this);
        }
        else if(!this.isFlaged){
            this.button.innerHTML = '';
            placedFlagNumber -= 1;
            let cellIndex = board.flags.indexOf(this);
            board.flags.splice(cellIndex, 1);
        }
        board.CheckWon();
        //console.log(board.flags)
        flagCounter.innerHTML = placedFlagNumber;
    }
    Reveal(){
        if(this.isRevealed === true) return;
        this.isRevealed = true;
        board.CheckWon();
        if(this.isFlaged === true) this.Flag();
        if(this.status === -1){
            game.hasEnded = true;
            game.Lost();
            let bombImg = document.createElement('img');
            bombImg.classList.add('cell-bomb');
            bombImg.src = 'Icons/bomb.svg';
            this.button.innerHTML = '';
            this.button.classList.add('button-bomb-revealed');
            this.button.appendChild(bombImg);
            return;
        }
        if(this.status != 0){
            this.button.innerHTML = this.status;
        }
        if(this.status === 0){
            this.FloodFill();
        }
        this.button.classList.add('cell-revealed');
    }
    FloodFill() {
        let neighbors = this.GetNeighbors();
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if(!neighbor.isRevealed){
                neighbor.Reveal();
            }
        }
    }
    GetNeighbors(){
        let neighbors = [];
        for (let i = this.x-1; i <= this.x+1; i++) {
            for (let j = this.y-1; j <= this.y+1; j++) {
                if(i === this.x && j === this.y) continue;
                if(i < 0 || i > this.board.length-1) continue;
                if(j < 0 || j > this.board[i].length-1) continue;
                let neighbor = this.board[i][j];
                neighbors.push(neighbor)
            }
        }
        //console.log(neighbors);
        //console.log("GetNeighbors: done");
        return neighbors;
    }
    SetNeighbors(){
        let neighbors = this.GetNeighbors();
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if(neighbor.status != -1){
                neighbor.status += 1;
            }
        }
        //console.log("SetNeighbors: done");
    }
    
}


let placedFlagNumber = 0;
const flagCounter = document.getElementById('flag-counter');
function SetFlagCounter(number){
    flagCounter.innerHTML = number;
}


let isPlacingFlags = false;
const flagToggleButton = document.getElementById('flag-toggle-button');
flagToggleButton.addEventListener('click',function(){
    isPlacingFlags = !isPlacingFlags;
    if(isPlacingFlags === true){
        flagToggleButton.innerHTML = 'Flag';
        flagToggleButton.classList.add('placing-flags-on')
    }
    else if(isPlacingFlags === false){
        flagToggleButton.innerHTML = 'Reveal';
        flagToggleButton.classList.remove('placing-flags-on')
    }
})
const revealAllButton = document.getElementById('reveal-all-button');
revealAllButton.addEventListener('click', function(){
    board.RevealAll();
})
const revealBombsButton = document.getElementById('reveal-bombs-button');
revealBombsButton.addEventListener('click', function(){
    board.RevealBombs();
})
document.getElementById('new-game-button').addEventListener('click', function(){
    game.hasStarted = false;
    game.hasWon = false;
    game.hasEnded = false;
    game.Play();
})
let board;
let game = new Game();
game.Play();

