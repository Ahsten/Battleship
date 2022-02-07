
//Returns a ship object 
export default class Ship{
    constructor(length){
        this.length = length;
        this.hits = new Array(length).fill('');
        this.sunk = false;
    }

    getShipLength(){
        return this.hits.length;
    }
    //Sets the hit location of the ship
    hit(hitLocaiton){
        this.hits[hitLocaiton] = 'x';
    }

    getHits(){
        return this.hits;
    }

    //Checks whether the ship is sunk or not
    isSunk(){
        let hitCount = 0;
    
        for(let x = 0; x < this.hits.length; x++){
            if(this.hits[x] === 'x'){
                hitCount += 1;
            }
        }
    
        if(hitCount == this.hits.length){
            this.sunk = true;
            return this.sunk;
        } else {
            this.sunk = false;
            return this.sunk;
        }
    }  
}

//Carrier 5
//Battleship 4
//Cruiser 3
//Submarine 3
//Destroyer 2
