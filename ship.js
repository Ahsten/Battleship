//Returns a ship object 
function shipFactory(length, hits, sunk){
    return{
        length: length,
        hit: hits,
        sunk: sunk,
    }
}

//Returns an array of where the ship has been hit
function hit(hitLocaiton, array){
    array[hitLocaiton] = 'x';
    return array;
}

//Checks an array see whether a ship has been sunk
function isSunk(shipArray){
    let hitCount = 0;

    for(let x = 0; x < shipArray.length; x++){
        if(shipArray[x] === 'x'){
            count += 1;
        }
    }

    if(hitCount == shipArray.length){
        return true;
    } else {
        return false;
    }
}