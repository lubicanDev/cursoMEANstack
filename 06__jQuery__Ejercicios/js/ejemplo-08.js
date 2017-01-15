$(document).ready(initializeEvents);
var timeFirstDown;
var timeDown;
var timeUp;

var pulsado = false;
var cont = 0;

function initializeEvents() {
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);
    //$("td").mouseover(overEvent);
};

function downEvent() {
    pulsado = true;
    timeDown = event.timeStamp; // ya no lo voy a usar pero lo dejo para estudiar

    $(this).css("background-color", "#ff0");
    timeID = setInterval(timer, 100); // llama a la funcion cada decima de segundo
};

function upEvent() {
    $(this).css("background-color", "#fff");
    timeUp = event.timeStamp; // ya no lo voy a usar pero lo dejo para estudiar
    pulsado = false;
    clearTimeout(timeID);
    cont = 0;
};

function timer() {
    // la funcion es  llamada cada décima de segundo.
    // Despues de 20 llamadas, habrán pasado 2 segundos
    // utilizaremos un contador para controlar

    cont++;
    if (pulsado && cont > 20) {
        alert();
        clearTimeout(timeID);
        cont = 0;
    };
}