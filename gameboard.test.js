import GameBoard from "./gameboard";

describe('gameboard', ()=> {
    test("Test creation of gameboard", ()=>{
        const gameboard = new GameBoard();
        expect(gameboard.getBoardLength()).toBe(10);
    });
})