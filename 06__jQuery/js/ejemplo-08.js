$(document).ready(initializeEvents);
var timeFirstDown;
var timeDown;
var timeUp;
var pulsado = 0;

function initializeEvents() {
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);
    $("td").mouseover(overEvent);
}

function downEvent() {

    if (pulsado == 0) {
        timeFirstDown = event.timeStamp;
    };
    pulsado = 1;


    timeDown = event.timeStamp;

    $(this).css("background-color", "#ff0");
    if (timeDown > (timeFirstDown + 2000)) {
        alert();
    };

    $("td").mouseover(downEvent);
    $("td").mouseup(upEvent);





}

function upEvent() {
    $(this).css("background-color", "#fff");
    timeUp = event.timeStamp;

}

function overEvent() {

    timeUp = event.timeStamp;

}