import './style.css'

function displayGameboards(player){
    let boardDiv;

    if(player === "player"){
        boardDiv = document.getElementById("player");
    } else {
        boardDiv = document.getElementById("computer");
    }

    for(let x = 0; x < 100; x++){
        const space = document.createElement('div');

        boardDiv.appendChild(space);
    }
}

function gameloop(){
    displayGameboards("player");
    displayGameboards("computer");




}

gameloop();