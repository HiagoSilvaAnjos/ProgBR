const playerElement = document.getElementById('player');
const playerElement2 = document.getElementById('player2');

let initialX = 0;
let initialY = 0;

let player1 = 0;
let player2 = 0;

function movePlayer(x, y) {

    let positionX = x + "px";
    playerElement.style.top = positionX; 
}

function movePlayer2(x, y) {

    let positionX = x + "px";
    playerElement2.style.top = positionX;  
}

setInterval(() => {
    initialX = Math.floor(Math.random() * 15);
    initialY = Math.floor(Math.random() * 15);

    player1 += initialX
    
}, 600);

setInterval(() => {
    initialX = Math.floor(Math.random() * 15);
    initialY = Math.floor(Math.random() * 15);

    player2 += initialX

}, 600);

setInterval(() => {

    movePlayer(player1);
    movePlayer2(player2);

}, 1000); 