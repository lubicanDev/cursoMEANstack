"use strict";

var moduloEventos = require("events");

var EmisorEventos = moduloEventos.EventEmitter;
var miEmisor = new EmisorEventos();

miEmisor.on("miEvento", funcionCallback); // creamos nuestro propio evento con su funcion callback

function funcionCallback(misDatos, unValor) {
    console.log("misDatos: " + misDatos.propiedad1 + ", " + misDatos.propiedad2 + ", unValor=" + unValor);
}
let contador = 0;

// una funcion para llamara al evento
function aCadaIntervalo() {
    var param1 = {
        propiedad1: Date.now(),
        propiedad2: contador
    };
    var param2 = "otro valor";

    miEmisor.emit("miEvento", param1, param2);
    contador++;
}
setInterval(aCadaIntervalo, 500);