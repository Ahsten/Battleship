import GameBoard from "../gameboard";
import Ship from "../ship";
import Player from "../player";

describe('player', ()=> {
    let gameboard;
    let ship;
    let player;
  
    beforeEach(() => {
      player = new Player('Player 1');
      gameboard = new GameBoard();
      ship = new Ship(2);
      gameboard.placeShip(ship, false, 0, 0);
    });

    test('test attack on ship', ()=>{
        player.attack(0, 0, gameboard);
        expect(player.guessed[0]).toStrictEqual('00');
    });

    test('test computer attack', ()=>{
        player.computerAttack(gameboard);
        expect(player.guessed.length).toBe(1);
    });

    test('test already attacked', ()=>{
        player.attack(0, 0, gameboard);
        expect(player.alreadyGuessed(0, 0)).toBe(true);
    })
});