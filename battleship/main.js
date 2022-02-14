import './style.css'
import Player from '../battleship/factories/player'
import GameBoard from './factories/gameboard'
import Ship from './factories/ship'

function displayGameboards(player, gameboard){
    let boardDiv;
    console.log(gameboard);

    if(player === "player"){
        boardDiv = document.getElementById("player");
    } else {
        boardDiv = document.getElementById("computer");
    }

    //When click check for hit or miss
    //Mark hit or miss
    for(let row = 0; row < gameboard.getBoardLength(); row++){
        for(let column = 0; column < 10; column++){
            let div = document.createElement('div');
            boardDiv.appendChild(div);
        }
    }
}

//Make gameboards
//Make players
//Create and set ships
//Player and Comp take turns
//Check for win conditions

function gameloop(){

    //Create players and boards
    let playerBoard = new GameBoard();
    let computerBoard = new GameBoard();  
    let player = new Player('Player1');
    let computer = new Player('Computer');

    //Create ships
    let pCarrier = new Ship(5);
    let pBattleship = new Ship(4);
    let pCruiser = new Ship(3);
    let pSubmarine = new Ship(3);
    let pDestroyer = new Ship(2);

    let cCarrier = new Ship(5);
    let cBattleship = new Ship(4);
    let cCruiser = new Ship(3);
    let cSubmarine = new Ship(3);
    let cDestroyer = new Ship(2);

    //Place ships
    playerBoard.placeShip(pCarrier, false, 0, 0);
    playerBoard.placeShip(pBattleship, true, 3, 0);
    playerBoard.placeShip(pCruiser, false, 5, 6);
    playerBoard.placeShip(pSubmarine, true, 6, 2);
    playerBoard.placeShip(pDestroyer, false, 9, 6);

    computerBoard.placeShip(cCarrier, false, 0, 3);
    computerBoard.placeShip(cBattleship, true, 3, 0);
    computerBoard.placeShip(cCruiser, false, 5, 6);
    computerBoard.placeShip(cSubmarine, true, 6, 2);
    computerBoard.placeShip(cDestroyer, false, 9, 6);

    displayGameboards("player", playerBoard);
    displayGameboards("computer", computerBoard);
}

gameloop();