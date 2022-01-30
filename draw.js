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

/* Event Listener */