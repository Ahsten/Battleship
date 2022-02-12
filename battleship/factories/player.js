import GameBoard from "./gameboard";

export default class Player{
    constructor(name){
        this.name = name;
        this.guessed = [];
    }

    //Check to see if coord has already been guessed
    //Send attack if not and add to guessed list
    attack(row, column, gameboard){
        if(this.alreadyGuessed(row, column)){
            return false;
        }

        gameboard.recieveAttack(row, column);

        let xCoordinate = row.toString();
        let yCoordinate = column.toString();
        this.guessed.push(xCoordinate + yCoordinate);
    }

    //Generate random coordinates
    //Check if it has been guessed
    //Attack if not
    computerAttack(gameboard){
        let row = Math.floor(Math.random() * 10);
        let column = Math.floor(Math.random() * 10);

        while(this.alreadyGuessed(row, column)){
            row = Math.floor(Math.random() * 10);
            column = Math.floor(Math.random() * 10);
        }

        gameboard.recieveAttack(row, column);
        this.guessed.push([row, column]);
    }

    //Check to see if player has already made this guess
    alreadyGuessed(row, column){
        let xCoordinate = row.toString();
        let yCoordinate = column.toString();
        let guess = xCoordinate + yCoordinate;

        for(let x = 0; x < this.guessed.length; x++){
            if(this.guessed[x] === guess){
                return true;
            }
        }
        return false;
    }
}