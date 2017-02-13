"use strict";

let fs = require("fs"); // necesario para leer ficheros
let streamLectura = fs.createReadStream("fichero.txt");
// si usamos un fichero mas grande, veremos que los stream tienen un tamaño máximo de 65000.


let data = "";

streamLectura.on("data", cuandoLee);
streamLectura.on("end", cuandoAcaba);

function cuandoLee(chunk) {
    data += chunk;
    console.log("Longitud de buffer: " + chunk.length);
}

function cuandoAcaba() {
    console.log(data);
}