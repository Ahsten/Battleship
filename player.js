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
        this.guessed.push([row, column]);
    }

    //Generate random coordinates
    //Check if it has been guessed
    //Attack if not
    computerAttack(){
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
        for(guess in this.guessed){
            if(guess === [row, column]){
                return true;
            }
        }
        return false;
    }
}