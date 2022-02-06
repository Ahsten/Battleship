import Ship from "./ship";


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
})
