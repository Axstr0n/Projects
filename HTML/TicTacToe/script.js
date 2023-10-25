
//#region DEFINE, SET EVENTS
const boardButton1 = document.getElementById('board-button-1')
const boardButton2 = document.getElementById('board-button-2')
const boardButton3 = document.getElementById('board-button-3')
const boardButton4 = document.getElementById('board-button-4')
const boardButton5 = document.getElementById('board-button-5')
const boardButton6 = document.getElementById('board-button-6')
const boardButton7 = document.getElementById('board-button-7')
const boardButton8 = document.getElementById('board-button-8')
const boardButton9 = document.getElementById('board-button-9')
const boardButtons = [boardButton1, boardButton2, boardButton3, boardButton4, boardButton5, boardButton6, boardButton7, boardButton8, boardButton9]

boardButtons.forEach(boardButton => {
    boardButton.addEventListener('mouseover', function(){
        if(boardButton.disabled) return
        boardButton.innerHTML = currentPlayer
        boardButton.style.color = 'grey'
    })
    boardButton.addEventListener('mouseleave', function(){
        if(boardButton.disabled) return
        boardButton.innerHTML = ''
        boardButton.style.color = 'white'
    })
    boardButton.addEventListener('click', function(){
        board = SetOccupied(boardButton, currentPlayer)
        let [hasWon, winner] = CheckWin(board)
        let isTie = CheckTie(board)
        DisplayResult(isTie, hasWon, winner)
        SwitchPlayer(currentPlayer)
    })
});

const textDisplay = document.getElementById('text-display')
//#endregion

let hasWon = false
let isTie = false
let board
const players = ['X', 'O']
let currentPlayer = players[0]

function SetOccupied(button, player){
    button.innerHTML = player
    button.style.color = 'whitesmoke'
    button.disabled = true
    board = [[boardButton1.innerHTML, boardButton2.innerHTML, boardButton3.innerHTML],[boardButton4.innerHTML, boardButton5.innerHTML, boardButton6.innerHTML],[boardButton7.innerHTML, boardButton8.innerHTML, boardButton9.innerHTML]]
    return board
}
function ResetBoard(){
    boardButtons.forEach(boardButton => {
        boardButton.innerHTML = ''
        boardButton.classList.remove('win-spot')
        boardButton.disabled = false
    });
    board = [[boardButton1.innerHTML, boardButton2.innerHTML, boardButton3.innerHTML],[boardButton4.innerHTML, boardButton5.innerHTML, boardButton6.innerHTML],[boardButton7.innerHTML, boardButton8.innerHTML, boardButton9.innerHTML]]
    textDisplay.innerHTML = ''
    currentPlayer = players[0]
}
function SwitchPlayer(previousPlayer){
    if(previousPlayer == players[0]){
        currentPlayer = players[1]
    }
    else{
        currentPlayer = players[0]
    }
}
function CheckWin(board){
    //#region Define spots
    let b1 = board[0][0]
    let b2 = board[0][1]
    let b3 = board[0][2]
    let b4 = board[1][0]
    let b5 = board[1][1]
    let b6 = board[1][2]
    let b7 = board[2][0]
    let b8 = board[2][1]
    let b9 = board[2][2]
    //#endregion
    let hasWon = false
    let winner = ''
    //#region Define win condition
    if(b1 == b2 && b2 == b3 && b1 != ''){
        ShowWinRow('row1')
        hasWon = true
        winner = b1
    }
    if(b4 == b5 && b5 == b6 && b4 != ''){
        ShowWinRow('row2')
        hasWon = true
        winner = b4
    }
    if(b7 == b8 && b8 == b9 && b7 != ''){
        ShowWinRow('row3')
        hasWon = true
        winner = b7
    }
    if(b1 == b4 && b4 == b7 && b1 != ''){
        ShowWinRow('col1')
        hasWon = true
        winner = b1
    }
    if(b2 == b5 && b5 == b8 && b2 != ''){
        ShowWinRow('col2')
        hasWon = true
        winner = b2
    }
    if(b3 == b6 && b6 == b9 && b3 != ''){
        ShowWinRow('col3')
        hasWon = true
        winner = b3
    }
    if(b1 == b5 && b5 == b9 && b1 != ''){
        ShowWinRow('dia1')
        hasWon = true
        winner = b1
    }
    if(b3 == b5 && b5 == b7 && b3 != ''){
        ShowWinRow('dia2')
        hasWon = true
        winner = b3
    }
    //#endregion
    if(hasWon && winner != ''){
        boardButtons.forEach(boardButton => {
            boardButton.disabled = true
        });
    }
    return [hasWon, winner]
    /*
    if((b1 == b2 == b3) ||(b1 == b4 == b7) ||(b1 == b5 == b9)){
        hasWon = true
        return b1
    }
    if((b4 == b5 == b6) ||(b2 == b5 == b8) || (b3 == b5 == b7)){
        hasWon = true
        return b5
    }
    if((b3 == b6 == b9) ||(b7 == b8 == b9)){
        hasWon = true
        return b9
    }
    */
}
function ShowWinRow(line){
    let buttonLine
    switch (line) {
        case 'row1':
            buttonLine = [boardButtons[0], boardButtons[1], boardButtons[2]]
            break;
        case 'row2':
            buttonLine = [boardButtons[3], boardButtons[4], boardButtons[5]]
            break;
        case 'row3':
            buttonLine = [boardButtons[6], boardButtons[7], boardButtons[8]]
            break;
        case 'col1':
            buttonLine = [boardButtons[0], boardButtons[3], boardButtons[6]]
            break;
        case 'col2':
            buttonLine = [boardButtons[1], boardButtons[4], boardButtons[7]]
            break;
        case 'col3':
            buttonLine = [boardButtons[2], boardButtons[5], boardButtons[8]]
            break;
        case 'dia1':
            buttonLine = [boardButtons[0], boardButtons[4], boardButtons[8]]
            break;
        case 'dia2':
            buttonLine = [boardButtons[2], boardButtons[4], boardButtons[6]]
            break;
    
        default:
            console.log("Not valid winning line")
            break;
    }
    buttonLine.forEach(buttonL => {
        buttonL.classList.add('win-spot')
    });
}
function CheckTie(board){
    let isFull = true
    board.forEach(row => {
        row.forEach(spot => {
            if(spot == ''){
                isFull = false
            }
        });
    });
    return isFull
}
function DisplayResult(isTie, hasWon, winner){
    if(hasWon && winner != ''){
        textDisplay.innerHTML = `${winner} won`
    }
    else if(isTie){
        textDisplay.innerHTML = `TIE`
    }
}