const drawBoard = function(gridNum){
    const body = document.querySelector('body')
    const board = document.createElement('div');
    board.classList.add("board");
    for(let i =0; i < gridNum; i ++){
        board.appendChild(drawRow(gridNum));
    }
    const oldBoard = document.querySelector('.board');
    if(oldBoard){
        body.removeChild(oldBoard);
    }
    body.appendChild(board); 
    initiateBoard();
}

const drawRow = function(gridNum){
    const newRow = document.createElement('div');
    newRow.classList.add('row')
    for(let i=0; i<gridNum ; i++){
        const newCell = document.createElement('div');
        newCell.classList.add('cell')
        newRow.appendChild(newCell);
    }
    return newRow;
}
drawBoard(4);

/* Event Listener of cells*/
function initiateBoard(){
    const cells = document.querySelectorAll(".cell")
    const etch = function(e){
        this.classList.add("hovered");
        this.removeEventListener('mouseover',etch);
        //setTimeout(function(){this.classList.remove('hovered')},500);
    }
    cells.forEach( cell => cell.addEventListener('mouseover', etch ) );
}
/* Event Listener of button */
const resetButton = document.querySelector(".reset");
const reset = function(e){
    const gridNum = Number( prompt("Please enter a number for grid:") );
    if( ( typeof(gridNum) !== 'number') ||
    gridNum>100 || gridNum <0 ){
        alert("ERROR! Used default grid number");
        drawBoard(4);
    }
    else{
        drawBoard(gridNum);
    }
}
resetButton.addEventListener('click',reset);