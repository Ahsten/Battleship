
export default class GameBoard {
    constructor(){
        this.board = createGameboard()
    }

    getBoardLength(){
        return this.board.length;
    }

    //Check to see whether a ship is already placed there
    //Must be vertical or horizontal
    //Take coordinates to place and length of ship
    placeShip(ship, isVertical, row, column){
        if(this.isPlaceOpen(ship, isVertical, row, column) == true){
            if(isVertical){
                for(let x = 0; x < ship.length; x++){
                    this.board[row + x][column] = ship;
                }
            } else {
                for(let x = 0; x < ship.length; x++){
                    this.board[row][column + x] = ship;
                }
            }
        }
    }

    //Recieve player attack and place the gameboard
    recieveAttack(row, column){
        //Make sure hit is within the board
        if(row < 0 || row > 9 || column < 0 || column > 9){
            return false;
        }

        if(this.board[row][column] === ""){
            this.board[row][column] = "M";
            return false;
        } else if(this.board[row][column] === "M") {
            return "Already been guessed";
        } else if(this.board[row][column]){
            let hitPosition = 0;
            
            if(column > 0 && this.board[row][column - 1]){
                let x = 1;
                while (column - x >= 0 && this.board[row][column - x]){
                  hitPosition++;
                  x++;
                }
            } else if (row > 0 && this.board[row - 1][column]){
                let x = 1;
                while (row - x >= 0 && this.board[row - x][column]){
                  hitPosition++;
                  x++;
                }
            }
            this.board[row][column].hit(hitPosition);
            return true;
        }
    }

    //Check if all ships have been sunk
    gameOver(ships){
        let sunkCounter = 0; 

        ships.forEach(ship => {
            if(ship.isSunk()){
                sunkCounter++;
            }
        });

        if(sunkCounter === ships.length){
            return true;
        }
    }

    //Check if it will fit on the gameboard
    //Check if it crosses any ships already placed on the board
    isPlaceOpen(ship, isVertical, row, column){

        //Check to see of ship tries to start off gameboard
        if(row < 0 || row > 9 || column < 0 || column > 9){
            return false;
        }

        //Check if it will fit on the gameboard
        if(isVertical){
            if(row + ship.length > 10){
                return false;
            }
        } else {
            if(column + ship.length > 10){
                return false;
            }
        }

        //Check to see if placement ship would cross another ship
        if(isVertical){
            for(let x = 0; x < ship.length; x++){
                if(this.board[row + x][column] != ""){
                    return false;
                }
            }
        } else {
            for(let x = 0; x < ship.length; x++){
                if(this.board[row][column + x] != ""){
                    return false;
                }
            }
        }
        //All conditions are met, so return true
        return true;
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