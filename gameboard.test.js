import GameBoard from "./gameboard";
import Ship from "./ship";

describe('gameboard', ()=> {
    test("Test creation of gameboard", ()=>{
        const gameboard = new GameBoard();
        expect(gameboard.getBoardLength()).toBe(10);
    });

    test("Test hit on ship", ()=>{
        const gameboard = new GameBoard();
        const ship = new Ship(2);
        gameboard.placeShip(ship, true, 0, 0);
        expect(gameboard.recieveAttack(0, 0)).toBe(true);
    });

    test("Test miss", ()=>{
        const gameboard = new GameBoard();
        const ship = new Ship(2);
        gameboard.placeShip(ship, true, 0, 0);
        expect(gameboard.recieveAttack(2, 0)).toBe(false);
    });

    test("Test attack on already missed space", ()=>{
        const gameboard = new GameBoard();
        const ship = new Ship(2);
        gameboard.placeShip(ship, true, 0, 0);
        gameboard.recieveAttack(2, 0);
        expect(gameboard.recieveAttack(2, 0)).toBe("Already been guessed");
    });
})