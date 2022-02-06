
export default class GameBoard {
    constructor(){
        this.board = createGameboard()
    }

    getBoardLength(){
        return this.board.length;
    }
}

//Create a 10x10 gameboard
function createGameboard(){
    let board = [];

    for(let x = 0; x < 10; x++){
        let row = new Array(10).fill("");
        board.push(row);
    }

    return board;
}