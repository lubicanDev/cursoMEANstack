"use strict";
let fs = require("fs");
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);
console.log("Numero de lineas del fichero:\n" +
    contenido.toString().split('\n').length);

var miLocalStorage;

if (typeof localstorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('/scratch');
} else {
    miLocalStorage = localstorage;
}

let contenidoPrevio = miLocalStorage.getItem("contenidoPrevio");
if (contenidoPrevio) {
    console.log("Fichero Anterioro:\n" + contenidoPrevio);
}

milocalStorage.setItem("contenidoPrevio", fichero);