"use strict";

let fs2 = require("fs"); // necesario para leer ficheros
let streamLectura2 = fs2.createReadStream("fichero.txt");
// si usamos un fichero mas grande, veremos que los stream tienen un tamaño máximo de 65000.


let data2 = "";
let buffer;
streamLectura2.setEncoding("utf8");

streamLectura2.on("readable", alCrearseStreamLectura);


function alCrearseStreamLectura() {
    // invocamos la lectura nosotros
    while ((buffer = streamLectura2.read()) != null) {
        data2 += buffer;
    }
}
streamLectura2.on("end", function() {
    console.log(data2);
})