let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

function moverJogadorPara(x, y){
    let posX = x + "px";
    let posY = y + "px";

    jogador.style.top = posX;
    jogador.style.left = poxY;
}

setInterval(function(){

    moverJogadorPara(xInicial++, yInicial++)



}, 100)