
class Ship{
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.cells = []
    }
}

class Cell{
    constructor(x, y, div){
        this.x = x;
        this.y = y;
        this.div = div;
        this.isRevealed = false;
        this.status = 0;
        this.ship = 'none';
    }
}
class Janez{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.CreateEmptyGrid();
        this.CreateEmptyShipMap();
        this.CreatePossibilities();
        this.won = false;
    }
    //#region Define
    patrolBoat = ['PatrolBoat', 2];
    patrolBoatHeatmap = [];
    patrolBoatPossibilities = [];
    submarine = ['Submarine', 3];
    submarineHeatmap = [];
    submarinePossibilities = [];
    destroyer = ['Destroyer', 3];
    destroyerHeatmap = [];
    destroyerPossibilities = [];
    battleship = ['Battleship', 4];
    battleshipHeatmap = [];
    battleshipPossibilities = [];
    carrier = ['Carrier', 5];
    carrierHeatmap = [];
    carrierPossibilities = [];

    combineHeatmap = [];

    grid = []; // undefined | sea | ship |

    shipsLeft = [this.patrolBoat, this.submarine, this.destroyer, this.battleship, this.carrier];
    shipMap = [];
    shots = [];
    lastShipHeatmap = [];
    shipsHeatmap = [];
    shipSpots = [];

    overlays = [];

    //#endregion
    CreateEmptyShipMap(){
        // Creates empty 2d array with 0s
        for (let row = 0; row < this.rows; row++) {
            let line = [];
            for (let col = 0; col < this.cols; col++) {
                let status = 0;
                line.push(status);
            }
            this.shipMap.push(line);
        }
    }
    CreateEmptyGrid(){
        // Creates empty grid with 'undefined'
        for (let row = 0; row < this.rows; row++) {
            let line = [];
            for (let col = 0; col < this.cols; col++) {
                let status = 'undefined';
                line.push(status);
            }
            this.grid.push(line);
        }
    }
    CreatePossibilities(){
        // Calls function to create all possibilities for all ships
        this.CreatePossibility(this.patrolBoat, this.patrolBoatPossibilities);
        this.CreatePossibility(this.submarine, this.submarinePossibilities);
        this.CreatePossibility(this.destroyer, this.destroyerPossibilities);
        this.CreatePossibility(this.battleship, this.battleshipPossibilities);
        this.CreatePossibility(this.carrier, this.carrierPossibilities);
    }
    CreatePossibility(ship, shipPossibilities){
        // Creates possibilities for ship
        let shipName = ship[0];
        let shipLength = ship[1];
        // Horizontal
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols-shipLength+1; col++) {
                let possibility = this.CreateEmptyPossibility();
                possibility[row][col] = 1;
                for (let i = 1; i < shipLength; i++) {
                    possibility[row][col+i] = 1;
                }
                shipPossibilities.push(possibility);
            }
        }
        // Vertical
        for (let row = 0; row < this.rows-shipLength+1; row++) {
            for (let col = 0; col < this.cols; col++) {
                let possibility = this.CreateEmptyPossibility();
                possibility[row][col] = 1;
                for (let i = 1; i < shipLength; i++) {
                    possibility[row+i][col] = 1;
                }
                shipPossibilities.push(possibility);
            }
        }
    }
    CreateEmptyPossibility(){
        // Creates 2d array with 0s
        let possibility = [];
        for (let row = 0; row < this.rows; row++) {
            let line = [];
            for (let col = 0; col < this.cols; col++) {
                let status = 0;
                line.push(status);
            }
            possibility.push(line);
        }
        return possibility;
    }
    EvaluatePossibilities(){
        // Calls functions to evaluate all ships possibilities
        //console.log("Evaluate possibilities")
        this.EvaluatePossibility(this.patrolBoatPossibilities);
        this.EvaluatePossibility(this.submarinePossibilities);
        this.EvaluatePossibility(this.destroyerPossibilities);
        this.EvaluatePossibility(this.battleshipPossibilities);
        this.EvaluatePossibility(this.carrierPossibilities);
    }
    EvaluatePossibility(shipPossibilities){
        // Evaluates possibility for ship
        if(this.shots.length == 0) return;
        let lastShot = this.shots[this.shots.length-1];
        let shotRow = lastShot[0];
        let shotCol = lastShot[1];
        let shotStatus = lastShot[2];
        let possibilitiesToRemove =[];
        // Loop through every possibility
        for (let i = 0; i < shipPossibilities.length ; i++) {
            let possibility = shipPossibilities[i];
            if(possibility[shotRow][shotCol] == 1 && shotStatus == 'sea'){
                // Removes possibility
                shipPossibilities.splice(i, 1);
                i--;
            }  
        }
    }
    SinkShip(){
        // If two spots are ships updates combine heatmap to sink entire ship
        let heatScore = 1000;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let element = this.grid[row][col];
                if(element == 'ship'){
                    // Horizontal
                    if(this.IsInBoard(row,col+1) && this.grid[row][col+1] == 'ship'){
                        if(this.IsInBoard(row,col-1) && this.grid[row][col-1] == 'undefined'){
                            this.combineHeatmap[row][col-1] += heatScore;
                        }
                        if(this.IsInBoard(row, col+2) && this.grid[row][col+2] == 'undefined'){
                            this.combineHeatmap[row][col+2] += heatScore;
                        }
                    }
                    // Vertical
                    if(this.IsInBoard(row+1,col) && this.grid[row+1][col] == 'ship'){
                        if(this.IsInBoard(row-1,col) && this.grid[row-1][col] == 'undefined'){
                            this.combineHeatmap[row-1][col] += heatScore;
                        }
                        if(this.IsInBoard(row+2, col) && this.grid[row+2][col] == 'undefined'){
                            this.combineHeatmap[row+2][col] += heatScore;
                        }
                    }
                }
            }
            
        }
        
    }
    CheckForSunkenShips(){
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if(this.grid[row][col] == 'ship' && (( this.IsInBoard(row,col-1) && this.grid[row][col-1] == 'sea') || !this.IsInBoard(row,col-1))){
                    let sunkenShip = [];
                    sunkenShip.push([row,col]);
                    let longestShipLeft = this.shipsLeft[this.shipsLeft.length-1];
                    for (let i = 1; i <= longestShipLeft[1]; i++) {
                        if(this.IsInBoard(row,col+i) && this.grid[row][col+i] == 'ship'){
                            sunkenShip.push([row,col+i]);
                        }
                        else{
                            if(!this.IsInBoard(row,col+sunkenShip.length) || this.grid[row][col+sunkenShip.length] == 'sea'){

                            }
                            else{
                                sunkenShip = [];
                            }
                            break;
                        }
                        
                    }
                    if(sunkenShip.length == 5){
                        //console.log('Carrier sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'Carrier'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    else if(sunkenShip.length == 4){
                        //console.log('Battleship sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'Battleship'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    else if(sunkenShip.length == 3){
                        //console.log('Destroyer sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'Destroyer'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    else if(sunkenShip.length == 3){
                        //console.log('Submarine sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'Submarine'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    else if(sunkenShip.length == 2){
                        //console.log('PatrolBoat sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'PatrolBoat'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    sunkenShip = [];
                }
                if(this.grid[row][col] == 'ship' && (( this.IsInBoard(row-1,col) && this.grid[row-1][col] == 'sea') || !this.IsInBoard(row-1,col))){
                    let sunkenShip = [];
                    sunkenShip.push([row,col]);
                    let longestShipLeft = this.shipsLeft[this.shipsLeft.length-1];
                    for (let i = 1; i <= longestShipLeft[1]; i++) {
                        if(this.IsInBoard(row+i,col) && this.grid[row+i][col] == 'ship'){
                            sunkenShip.push([row+i,col]);
                        }
                        else{
                            if(!this.IsInBoard(row+sunkenShip.length,col) || this.grid[row+sunkenShip.length][col] == 'sea'){

                            }
                            else{
                                sunkenShip = [];
                            }
                            break;
                        }
                        
                    }
                    if(sunkenShip.length == 5){
                        //console.log('Carrier sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'Carrier'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    else if(sunkenShip.length == 4){
                        //console.log('Battleship sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'Battleship'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    else if(sunkenShip.length == 3){
                        //console.log('Destroyer sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'Destroyer'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    else if(sunkenShip.length == 3){
                        //console.log('Submarine sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'Submarine'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    else if(sunkenShip.length == 2){
                        //console.log('PatrolBoat sunk');
                        for (let j = 0; j < this.shipsLeft.length; j++) {
                            const ship = this.shipsLeft[j];
                            if(ship[0] == 'PatrolBoat'){
                                this.shipsLeft.splice(j,1);
                            }
                        }
                    }
                    sunkenShip = [];
                }
                
            }
            
        }
        //console.log(this.shipsLeft)
    }
    DoTurn(){
        // Removes possibilities for each ship that can't happen
        this.EvaluatePossibilities();
        // Creates heatmaps for each ship and for combined based on possibilities
        this.NewHeatmaps();
        // If last shot hit ship creates overlay that is added to combine heatmap
        if(this.shots.length > 0){
            let lastShot = this.shots[this.shots.length-1];
            if(lastShot[2] != 'sea'){
                this.CreateOverlayOnShipHit(lastShot[0],lastShot[1]);
            }
        }
        // Removes overlay if spot has neighbor ship spot
        this.RemoveOverlayIfHasNeighbor();
        // Adds overlay heatmap to combine heatmap
        this.AddOverlaysOnHeatmap();
        // Sets 'ship' spots to -100000 on combine heatmap
        this.SetShipHeatmap();
        // Sets 'sea' spots to 0 on combined heatmap
        this.SetSeaHeatmap();
        // Adds to combined heatmap if two ship spots are next to each other
        /*if(this.shots.length > 1){
            let lastShot = this.shots[this.shots.length-1];
            let previousShot = this.shots[this.shots.length-2];
            this.lastShipHeatmap = this.CreateEmptyHeatmap();
            let shotHeatScore = 1000;
            if(lastShot[2] == 'sea' && previousShot[2] == 'ship' && ((previousShot[0] == lastShot[0])||(previousShot[1] == lastShot[1]))){
                if(lastShot[0] == previousShot[0]){
                    // Hor
                    let shotRow = lastShot[0];
                    let lastCol = lastShot[1];
                    let prevCol = previousShot[1];
                    if(lastCol < prevCol && this.IsInBoard(shotRow,prevCol+1) && this.grid[shotRow][prevCol+1] != 'sea'){
                        this.lastShipHeatmap[shotRow][prevCol+1] += shotHeatScore;
                    }
                    if(lastCol > prevCol && this.IsInBoard(shotRow,prevCol-1) && this.grid[shotRow][prevCol-1] != 'sea'){
                        this.lastShipHeatmap[shotRow][prevCol-1] += shotHeatScore;
                    }
                }
                if(lastShot[1] == previousShot[1]){
                    // Ver
                    let shotCol = lastShot[1];
                    let lastRow = lastShot[0];
                    let prevRow = previousShot[0];
                    if(lastRow < prevRow && this.IsInBoard(prevRow+1, shotCol) && this.grid[prevRow+1][shotCol] != 'sea'){
                        this.lastShipHeatmap[prevRow+1][shotCol] += shotHeatScore;
                    }
                    if(lastRow > prevRow && this.IsInBoard(prevRow-1,shotCol) && this.grid[prevRow-1][shotCol] != 'sea'){
                        this.lastShipHeatmap[prevRow-1][shotCol] += shotHeatScore;
                    }
                }
                for (let row = 0; row < this.rows; row++) {
                    for (let col = 0; col < this.cols; col++) {
                        this.combineHeatmap[row][col] += this.lastShipHeatmap[row][col];
                    }
                }
            }
        }*/
        this.SinkShip();
        // Checks if ships are sunken
        //this.CheckForSunkenShips();
        // Displays heatmap on page
        this.DisplayHeatmap(this.combineHeatmap);
        // If we hit 17 ship spots it is over
        if(this.shipSpots.length == 17) this.won = true;
        // return spot with biggest possibility from combined heatmap
        return this.ChooseTarget();
    }
    SetShipHeatmap(){
        // Sets spots that are 'ship' to -100000
        this.shipsHeatmap = this.CreateEmptyHeatmap();
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let status = this.grid[row][col];
                if(status == 'ship'){
                    this.shipsHeatmap[row][col] = -100000;
                    this.combineHeatmap[row][col] = this.shipsHeatmap[row][col];
                }
            }
        }
    }
    SetSeaHeatmap(){
        // Sets spots that are 'sea' to 0
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if(this.grid[row][col] == 'sea'){
                    this.combineHeatmap[row][col] = 0;
                }
            }
            
        }
    }
    AddOverlaysOnHeatmap(){
        // Adds all overlays on combine heatmap
        for (let i = 0; i < this.overlays.length; i++) {
            let overlayInfo = this.overlays[i];
            let overlay = overlayInfo[1];
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.cols; col++) {
                    this.combineHeatmap[row][col] += overlay[row][col];
                }
                
            }
        }
    }
    CreateOverlayOnShipHit(row,col){
        // Creates overlay if ship is hit (overlay in all directions)
        let heatScore = 1000;
        let overlayInfo = [];
        overlayInfo.push([row,col]);
        let overlay = this.CreateEmptyHeatmap();
        
        if(this.IsInBoard(row-1,col)){
            overlay[row-1][col] += heatScore;
        }
        if(this.IsInBoard(row,col+1)){
            overlay[row][col+1] += heatScore;
        }
        if(this.IsInBoard(row+1,col)){
            overlay[row+1][col] += heatScore;
        }
        if(this.IsInBoard(row,col-1)){
            overlay[row][col-1] += heatScore;
        }
        overlayInfo.push(overlay);
        this.overlays.push(overlayInfo);
    }
    CreateEmptyHeatmap(){
        let heatmap = [];
        for (let row = 0; row < this.rows; row++) {
            let heatmapLine = [];
            for (let col = 0; col < this.cols; col++) {
                heatmapLine.push(0);
            }
            heatmap.push(heatmapLine);
        }
        return heatmap;
    }
    RemoveOverlayIfHasNeighbor(){
        // Removes overlay if spot has neighboring ship (2 spots both ship)
        for (let i = 0; i < this.overlays.length; i++) {
            let overlayInfo = this.overlays[i];
            let rowCol = overlayInfo[0];
            let row = rowCol[0];
            let col = rowCol[1];
            let hasNeighborShip = false;
            if(this.IsInBoard(row-1,col) && this.grid[row-1][col] == 'ship'){
                hasNeighborShip = true;
            }
            if(this.IsInBoard(row,col+1) && this.grid[row][col+1] == 'ship'){
                hasNeighborShip = true;
            }
            if(this.IsInBoard(row+1,col) && this.grid[row+1][col] == 'ship'){
                hasNeighborShip = true;
            }
            if(this.IsInBoard(row,col-1) && this.grid[row][col-1] == 'ship'){
                hasNeighborShip = true;
            }

            if(hasNeighborShip){
                this.overlays.splice(i,1);
                i--;
            }
        }
    }

    NewHeatmaps(){
        //console.log("new heatmap");
        //PatrolBoat
        this.patrolBoatHeatmap = this.CreateEmptyHeatmap();
        //console.log(`PatrolBoat poss: ${this.patrolBoatPossibilities.length}`);
        for (let i = 0; i < this.patrolBoatPossibilities.length; i++) {
            let possibility = this.patrolBoatPossibilities[i];
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.cols;col++) {
                    this.patrolBoatHeatmap[row][col] += possibility[row][col];
                }
            }
        }
        //Submarine
        this.submarineHeatmap = this.CreateEmptyHeatmap();
        //console.log(`Submarine poss: ${this.submarinePossibilities.length}`);
        for (let i = 0; i < this.submarinePossibilities.length; i++) {
            let possibility = this.submarinePossibilities[i];
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.cols;col++) {
                    this.submarineHeatmap[row][col] += possibility[row][col];
                }
            }
        }
        //Destroyer
        this.destroyerHeatmap = this.CreateEmptyHeatmap();
        //console.log(`Destroyer poss: ${this.destroyerPossibilities.length}`);
        for (let i = 0; i < this.destroyerPossibilities.length; i++) {
            let possibility = this.destroyerPossibilities[i];
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.cols;col++) {
                    this.destroyerHeatmap[row][col] += possibility[row][col];
                }
            }
        }
        //Battleship
        this.battleshipHeatmap = this.CreateEmptyHeatmap();
        //console.log(`Battleship poss: ${this.battleshipPossibilities.length}`);
        for (let i = 0; i < this.battleshipPossibilities.length; i++) {
            let possibility = this.battleshipPossibilities[i];
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.cols;col++) {
                    this.battleshipHeatmap[row][col] += possibility[row][col];
                }
            }
        }
        //Carrier
        this.carrierHeatmap = this.CreateEmptyHeatmap();
        //console.log(`Carrier poss: ${this.carrierPossibilities.length}`);
        for (let i = 0; i < this.carrierPossibilities.length; i++) {
            let possibility = this.carrierPossibilities[i];
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.cols;col++) {
                    this.carrierHeatmap[row][col] += possibility[row][col];
                }
            }
        }
        this.combineHeatmap = this.CreateEmptyHeatmap();
        for (let i = 0; i < this.shipsLeft.length; i++) {
            const ship = this.shipsLeft[i];
            if(ship[0] == 'PatrolBoat'){
                for (let row = 0; row < this.rows; row++) {
                    for (let col = 0; col < this.cols; col++) {
                        this.combineHeatmap[row][col] += this.patrolBoatHeatmap[row][col];
                    }
                }
            }
            if(ship[0] == 'Submarine'){
                for (let row = 0; row < this.rows; row++) {
                    for (let col = 0; col < this.cols; col++) {
                        this.combineHeatmap[row][col] += this.submarineHeatmap[row][col];
                    }
                }
            }
            if(ship[0] == 'Destroyer'){
                for (let row = 0; row < this.rows; row++) {
                    for (let col = 0; col < this.cols; col++) {
                        this.combineHeatmap[row][col] += this.destroyerHeatmap[row][col];
                    }
                }
            }
            if(ship[0] == 'Battleship'){
                for (let row = 0; row < this.rows; row++) {
                    for (let col = 0; col < this.cols; col++) {
                        this.combineHeatmap[row][col] += this.battleshipHeatmap[row][col];
                    }
                }
            }
            if(ship[0] == 'Carrier'){
                for (let row = 0; row < this.rows; row++) {
                    for (let col = 0; col < this.cols; col++) {
                        this.combineHeatmap[row][col] += this.carrierHeatmap[row][col];
                    }
                }
            }
        }
        
    }

    ChooseTarget(){
        //let shuffled = this.combineHeatmap;
        let shuffled = this.Shuffle2dto1d(this.combineHeatmap);
        /*let max = shuffled[0][0];
        let maxRow = 0;
        let maxCol = 0;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let heatValue = shuffled[row][col];
                if(heatValue > max){
                    max = heatValue;
                    maxRow = row;
                    maxCol = col;
                }
            }
        }*/
        let valueData = shuffled[0];
        let max = valueData[0];
        let maxRow = valueData[1];
        let maxCol = valueData[2];
        for (let i = 0; i < shuffled.length; i++) {
            const element = shuffled[i];
            if(element[0] > max){
                max = element[0];
                maxRow = element[1];
                maxCol = element[2];
            }
            
        }

        return [maxRow, maxCol]
    }
    Shuffle2dto1d(array2d){
        let new2dArray = [];
        let array = [];
        for (let row = 0; row < array2d.length; row++) {
            for (let col = 0; col < array2d[row].length; col++) {
                let element = array2d[row][col];
                array.push([element,row,col]);
            }
        }
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            const j = Math.floor(Math.random() * (i + 1));
        
            // Swap array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }

        
        return array;
    }
    IsInBoard(row, col){
        if(0 <= row && row < this.rows && 0 <= col && col < this.cols){
            return true;
        }
        return false;
    }
    GetFeedback(row, col, status){
        this.shots.push([row, col, status]);
        if(status == 'sea'){
            this.grid[row][col] = status;
        }
        else{
            this.grid[row][col] = 'ship';
            this.shipSpots.push([row,col]);
        }
        //console.table(this.grid);
        //if(this.shipSpots.length == 17) this.won = true;
    }
    DisplayHeatmap(heatmap){
        let min = 0;
        let max = 0;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if(heatmap[row][col] > max){
                    max = heatmap[row][col];
                }
            }
        }
        let heatmapBoard = document.createElement('div');
        heatmapBoard.classList.add('heatmap-board');
        heatmapBoard.style.gridTemplateRows = `repeat(${this.rows},${100/this.rows}%)`;
        heatmapBoard.style.gridTemplateColumns = `repeat(${this.cols},${100/this.cols}%)`;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                // Create div
                let div = document.createElement('div');
                div.classList.add('heatmap-cell');
                let weight = ((heatmap[row][col])/(max-min)) * 100;
                let bgColor = getGradientColor(weight);
                div.style.backgroundColor = bgColor;
                //let bgColor = interpolateRGBColor([0,255,0],[255,0,0],weight);
                //div.style.backgroundColor = `rgb(${bgColor[0]},${bgColor[1]},${bgColor[2]})`;
                if(heatmap[row][col] == 0){
                    div.style.backgroundColor = "white";
                    //div.innerHTML = heatmap[row][col];

                }
                if(heatmap[row][col] < 0){
                    div.style.backgroundColor = "black";

                }
                else{
                    div.innerHTML = heatmap[row][col];
                }
                heatmapBoard.appendChild(div);
            }
        }
        let heatmapsDiv = document.getElementById('heatmaps');
        heatmapsDiv.innerHTML = '';
        heatmapsDiv.appendChild(heatmapBoard);
    }
}
function interpolateRGBColor(startColor, endColor, weight) {
    const r1 = startColor[0];
    const g1 = startColor[1];
    const b1 = startColor[2];
    
    const r2 = endColor[0];
    const g2 = endColor[1];
    const b2 = endColor[2];
    
    const r = Math.round(r1 + (r2 - r1) * (weight / 100));
    const g = Math.round(g1 + (g2 - g1) * (weight / 100));
    const b = Math.round(b1 + (b2 - b1) * (weight / 100));
    
    return [r, g, b];
}
function getGradientColor(number) {
    // Ensure the number is within the 0-100 range
    number = Math.min(100, Math.max(0, number));
    
    // Define the three gradient colors
    const greenColor = [0, 255, 0];
    const yellowColor = [255, 255, 0];
    const redColor = [255, 0, 0];
  
    // Calculate the intermediate color based on the number
    let color;
    if (number <= 50) {
      const ratio = number / 50;
      color = [
        Math.round((1 - ratio) * greenColor[0] + ratio * yellowColor[0]),
        Math.round((1 - ratio) * greenColor[1] + ratio * yellowColor[1]),
        Math.round((1 - ratio) * greenColor[2] + ratio * yellowColor[2])
      ];
    } else {
      const ratio = (number - 50) / 50;
      color = [
        Math.round((1 - ratio) * yellowColor[0] + ratio * redColor[0]),
        Math.round((1 - ratio) * yellowColor[1] + ratio * redColor[1]),
        Math.round((1 - ratio) * yellowColor[2] + ratio * redColor[2])
      ];
    }
  
    // Format the color as an RGB string
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }
  
  /*// Example usage:
  const number = 75; // Any number between 0 and 100
  const color = getGradientColor(number);
  console.log(color);*/
  
class Board{
    constructor(xSize, ySize){
        this.xSize = xSize;
        this.ySize = ySize;
        this.layout = [];
        this.ships = [];
        this.grid = [];
    }
    CreateEmptyBoard(){
        let boardWrapper = document.getElementById('board-wrapper');
        boardWrapper.innerHTML = '';
        let board = document.createElement('div');
        board.classList.add('board');
        board.setAttribute('id', 'board');
        //board.innerHTML = '';
        this.grid = [];
        this.layout = [];
        
        board.style.gridTemplateRows = `repeat(${this.ySize},${100/this.ySize}%)`;
        board.style.gridTemplateColumns = `repeat(${this.xSize},${100/this.xSize}%)`;
        for (let x = 0; x < this.ySize; x++) {
            let row = [];
            let line = [];
            for (let y = 0; y < this.xSize; y++) {
                // Create div
                let div = document.createElement('div');
                div.classList.add('cell');
                board.appendChild(div);
                // Create cell
                let cell = new Cell(x,y,div);
                row.push(cell);
                line.push('sea');
            }
            this.layout.push(row);
            this.grid.push(line);
        }
        boardWrapper.appendChild(board);
    }
    AutoPlaceShips(){
        let cells = document.querySelectorAll('.cell-ship');
        cells.forEach(element => {
            element.classList.remove('cell-ship');
            
        });

        const numOfShips = 5;
        let patrolBoat = new Ship('PatrolBoat', 2);
        let submarine = new Ship('Submarine', 3);
        let destroyer = new Ship('Destroyer', 3);
        let battleship = new Ship('Battleship', 4);
        let carrier = new Ship('Carrier', 5);
        let shipsToPlace = [carrier, battleship, destroyer, submarine, patrolBoat];
        let possibleCells = []; // 0-empty | 1-near ship | 2-ship
        this.ships = [];
        for (let x = 0; x < this.ySize; x++) {
            let row = [];
            for (let y = 0; y < this.xSize; y++) {
                row.push(0);
            }
            possibleCells.push(row);
        }

        while(this.ships.length < numOfShips){
            // While all ships are not placed
            let ship = shipsToPlace[0];
            let length = ship.length;
            //console.log(`${ship.name}: ${length}`);

            let selectedCells = []; // Ship is going to be placed
            //selectedCells.push([randX, randY]);
            // Direction of ship
            while (selectedCells.length != length) {
                let randCol = RandomIntFromInterval(0, this.xSize-1);
                let randRow = RandomIntFromInterval(0, this.ySize-1);
                if(this.layout[randRow][randCol].status != 0){
                    //console.log(`Cell ${randCol}-${randRow} is not possible | status: ${this.layout[randRow][randCol].status}`)
                    continue;
                }
                let randCell = this.layout[randRow][randCol];
                // Find all directions
                let upCells = [];
                let rightCells = [];
                let downCells = [];
                let leftCells = [];
                // Get directions
                for (let i = 1; i < length; i++) {
                    // Loop to ship length in all directions
                    // If direction is blocked stop
                    if(upCells.length == i-1){
                        let up = randRow - i;
                        if(this.IsInBoard(up, randCol) && this.layout[up][randCol].status == 0){
                            upCells.push(this.layout[up][randCol]);
                        }
                    }
                    if(rightCells.length == i-1){
                        let right = randCol + i;
                        if(this.IsInBoard(randRow, right) && this.layout[randRow][right].status == 0){
                            rightCells.push(this.layout[randRow][right]);
                        }
                    }
                    if(downCells.length == i-1){
                        let down = randRow - i;
                        if(this.IsInBoard(down, randCol) && this.layout[down][randCol].status == 0){
                            downCells.push(this.layout[down][randCol]);
                        }
                    }
                    if(leftCells.length == i-1){
                        let left = randCol - i;
                        if(this.IsInBoard(randRow, left) && this.layout[randRow][left].status == 0){
                            leftCells.push(this.layout[randRow][left]);
                        }
                    }
                }

                // Randomly choose direction
                let randDir = RandomIntFromInterval(0,3);
                switch (randDir) {
                    case 0:
                        // Up
                        if(upCells.length == length-1){
                            selectedCells.push(randCell);
                            for (let i = 0; i < upCells.length; i++) {
                                selectedCells.push(upCells[i]);
                            }
                            break;
                        }

                    case 1:
                        // Right
                        if(rightCells.length == length-1){
                            selectedCells.push(randCell);
                            for (let i = 0; i < rightCells.length; i++) {
                                selectedCells.push(rightCells[i]);
                            }
                            break;
                        }

                    case 2:
                        // Down
                        if(downCells.length == length-1){
                            selectedCells.push(randCell);
                            for (let i = 0; i < downCells.length; i++) {
                                selectedCells.push(downCells[i]);
                            }
                            break;
                        }
                    case 3:
                        // Left
                        if(leftCells.length == length-1){
                            selectedCells.push(randCell);
                            for (let i = 0; i < leftCells.length; i++) {
                                selectedCells.push(leftCells[i]);
                            }
                            break;
                        }
                    default:
                        break;
                }
            }
            for (let i = 0; i < selectedCells.length; i++) {
                const cell = selectedCells[i];
                possibleCells[cell.x][cell.y] = 2;
                this.layout[cell.x][cell.y].status = 2;
                this.layout[cell.x][cell.y].ship = ship.name;
                this.grid[cell.x][cell.y] = ship.name;
            }
            this.SetCellsNearShip(selectedCells);
            selectedCells.forEach(cell => {
                ship.cells.push(cell);
                
            });
            this.ships.push(ship); // Adds ship cells
            shipsToPlace.splice(0, 1); // Remove ship from to be placed array
            //this.ShowStatusLayout();
        }
        this.ShowShips();
    }
    ShowShips(){
        // For every ship
        for (let i = 0; i < this.ships.length; i++) {
            const cellsShip = this.ships[i].cells;
            
            const cell = cellsShip[0];
            const nextCell = cellsShip[1];
            let dir;
            if(cell.x == nextCell.x){
                if(cell.y < nextCell.y){
                    dir = 'right';
                }
                else{
                    dir = 'left';
                }
            }
            else{
                if(cell.x < nextCell.x){
                    dir = 'down';
                }
                else{
                    dir = 'up';
                }
            }
            // For every cell
            for (let j = 0; j < cellsShip.length; j++) {
                let cell = cellsShip[j];
                let div = cell.div;
                div.classList.add('cell-ship');
                /*
                if(dir == 'up'){
                    if(j == 0){
                        div.style.borderBottomRightRadius = `50%`;
                        div.style.borderBottomLeftRadius = `50%`;
                    }
                    else if(j == cellsShip.length-1){
                        div.style.borderTopRightRadius = `50%`;
                        div.style.borderTopLeftRadius = `50%`;
                    }

                    //cell.div.style.borderBottom = `solid 1px black`;
                }
                else if(dir == 'down'){
                    if(j == cellsShip.length-1){
                        div.style.borderBottomRightRadius = `50%`;
                        div.style.borderBottomLeftRadius = `50%`;
                    }
                    else if(j == 0){
                        div.style.borderTopRightRadius = `50%`;
                        div.style.borderTopLeftRadius = `50%`;
                    }

                    //cell.div.style.borderBottom = `solid 1px black`;
                }
                else if(dir == 'left'){
                    if(j == 0){
                        div.style.borderTopRightRadius = `50%`;
                        div.style.borderBottomRightRadius = `50%`;
                    }
                    else if(j == cellsShip.length-1){
                        div.style.borderTopLeftRadius = `50%`;
                        div.style.borderBottomLeftRadius = `50%`;
                    }

                    //cell.div.style.borderBottom = `solid 1px black`;
                }
                else if(dir == 'right'){
                    if(j == cellsShip.length-1){
                        div.style.borderTopRightRadius = `50%`;
                        div.style.borderBottomRightRadius = `50%`;
                    }
                    else if(j == 0){
                        div.style.borderTopLeftRadius = `50%`;
                        div.style.borderBottomLeftRadius = `50%`;
                    }

                    //cell.div.style.borderBottom = `solid 1px black`;
                }
                */
            }

        }

        /*
        for (let row = 0; row < this.ySize; row++) {
            for (let col = 0; col < this.xSize; col++) {
                const cell = this.layout[row][col];
                const status = cell.status;
                let div = cell.div;
                if(status == 0){

                }
                else if(status == 1){
                    //div.style.backgroundColor = 'red';
                }
                else if(status == 2){
                    //div.style.backgroundColor = 'black';
                    div.classList.add('container1');
                }
            }
            
        }*/
    }
    IsInBoard(row, col){
        if(0 <= col && col < this.xSize && 0 <= row && row < this.ySize){
            return true;
        }
        return false;
    }
    SetCellsNearShip(shipCells){
        for (let i = 0; i < shipCells.length; i++) {
            // For every ship
            const cell = shipCells[i];
            let neighbors = this.GetNeighbors(cell);
            for (let j = 0; j < neighbors.length; j++) {
                const neighbor = neighbors[j];
                const row = neighbor.x;
                const col = neighbor.y;
                if(this.layout[row][col].status == 0){
                    this.layout[row][col].status = 1;
                }
            }
        }
    }
    GetNeighbors(cell){
        const row = cell.x;
        const col = cell.y;
        let neighbors = [];
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if(i == 0 && j == 0){
                }
                else{
                    if(this.IsInBoard(row+i, col+j)){
                        //neighbors.push([row+i, col+j]);
                        neighbors.push(this.layout[row+i][col+j])
                    }
                }
            }
        }
        return neighbors;
        //return ArrayRemove(neighbors, [row, col]);
    }
    ShowStatusLayout(){
        let statusLayout = [];
        for (let x = 0; x < this.layout.length; x++) {
            let row = [];
            for (let y = 0; y < this.layout[x].length; y++) {
                const status = this.layout[x][y].status;
                row.push(status);
            }
            statusLayout.push(row);
        }
        console.table(statusLayout)
    }
    
    GiveHitFeedback(row, col){
        let status = this.grid[row][col];
        return [row, col, status];
    }

}


//////////////////////////////////////////

let board = new Board(10, 10);
board.CreateEmptyBoard();
board.AutoPlaceShips();
//let janez = new Janez(10, 10);

async function PlayJanezDelay(){
    document.getElementById('tries-number').innerHTML = '';
    document.getElementById('average-tries-number').innerHTML = '';
    let janez = new Janez(10, 10);
    let tries = 0;
    while (janez.won == false) {
        tries ++;
        await sleep(50); ///////////////// SLEEP //////////////
        let [row, col] = janez.DoTurn();
        let [row1, col1, status] = board.GiveHitFeedback(row, col);
        janez.GetFeedback(row1, col1, status);
    }
    document.getElementById('tries-number').innerHTML = tries;
    //console.log(`Tries: ${tries}`);
    return tries;
}
async function PlayJanez(){
    document.getElementById('tries-number').innerHTML = '';
    let janez = new Janez(10, 10);
    let tries = 0;
    while (janez.won == false) {
        tries ++;
        //await sleep(1); ///////////////// SLEEP //////////////
        let [row, col] = janez.DoTurn();
        let [row1, col1, status] = board.GiveHitFeedback(row, col);
        janez.GetFeedback(row1, col1, status);
    }
    document.getElementById('tries-number').innerHTML = tries;
    //console.log(`Tries: ${tries}`);
    return tries;
}
let matches = 50;
const autoPlayButton = document.getElementById('auto-play');
autoPlayButton.innerHTML = `Auto Play ${matches} matches`;
autoPlayButton.addEventListener('click', async () => {
    document.getElementById('average-tries-number').innerHTML = '';
    let tries = 0;
    for (let i = 0; i < matches; i++) {
        tries += await PlayJanez();
        await sleep(1); ///////////////// SLEEP //////////////
    }
    document.getElementById('average-tries-number').innerHTML = tries/matches;
});
const stepButton = document.getElementById('step-button');
let janez = new Janez(10,10);
stepButton.addEventListener('click', () => {
    let [row, col] = janez.DoTurn();
    let [row1, col1, status] = board.GiveHitFeedback(row, col);
    janez.GetFeedback(row1, col1, status);
    if(janez.won) console.log("Complete");
});
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', () => {
    PlayJanezDelay();
});
const placeShipsButton = document.getElementById('auto-place-ships-button');
placeShipsButton.addEventListener('click', () => {
    board.CreateEmptyBoard();
    board.AutoPlaceShips();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function RandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let arr = [[2,4,9],[1,8,3],[2,9,7]];
//Shuffle2d(arr);
function Shuffle2d(array2d){
    console.table(array2d);
    let new2dArray = [];
    let array = [];
    for (let row = 0; row < array2d.length; row++) {
        for (let col = 0; col < array2d[row].length; col++) {
            let element = array2d[row][col];
            array.push(element);
        }
    }
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
    
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    let i=0;
    for (let row = 0; row < array2d.length; row++) {
        let line = [];
        for (let col = 0; col < array2d[0].length; col++) {
            let element = array[i];
            line.push(element);
            i++;
        }
        new2dArray.push(line);
    }
    console.table(new2dArray);
}