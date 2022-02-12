import Ship from "../ship";
import GameBoard from "../gameboard";


describe('ship', () => {
     test('Tests the ship length', ()=> {
        const ship = new Ship(3); 
        expect(ship.getShipLength()).toBe(3);
    });

    test('Test if the ship hit location is correct', ()=> {
        const ship = new Ship(2);
        ship.hit(1);
        expect(ship.getHits()).toStrictEqual(['', 'x']);
    })

    test('Test if the ship is sunk', ()=> {
        const ship = new Ship(2);
        ship.hit(0);
        ship.hit(1);
        expect(ship.isSunk()).toBe(true);
    });

    test('Test if the ship is sunk', ()=> {
        const ship = new Ship(3);
        ship.hit(0);
        ship.hit(1);
        expect(ship.isSunk()).toBe(false);
    });

    test('Test hits on a ship', ()=> {
        const gameboard = new GameBoard();
        const ship = new Ship(2);
        gameboard.placeShip(ship, true, 0, 0);
        gameboard.recieveAttack(1, 0);
        expect(ship.getHits()).toStrictEqual(["", "x"]);
    });

    test('Test a sunk ship', ()=> {
        const gameboard = new GameBoard();
        const ship = new Ship(2);
        gameboard.placeShip(ship, true, 0, 0);
        gameboard.recieveAttack(1, 0);
        gameboard.recieveAttack(0, 0);
        expect(ship.isSunk()).toBe(true);
    });
})
