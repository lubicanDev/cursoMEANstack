"use strict";

let fs = require("fs"); // necesario para leer ficheros

// creamos los string de lectura y escritura
let streamLectura = fs.createReadStream("fichero.txt");
let streamEscritura = fs.createWriteStream("fich_write.txt");

streamLectura.setEncoding("utf8");

streamLectura.pipe(streamEscritura); // esto es equivalente al ejemplo 11_stream_write