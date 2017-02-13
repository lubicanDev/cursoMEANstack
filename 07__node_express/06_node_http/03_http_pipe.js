var http = require("http");
var bl = require("bl");
// BL es una librería que hay que instalar desde la consola en local que gestiona los buffers
// npm init     para crear paquete json
// - npm install bl --save-dev

var fs = require("fs");
let streamEscritura = fs.createWriteStream("./google.asdf.html");


http.get("http://www.google.es", (res) => { // (res) significa funcion anonima con "res" como parametro
    res.pipe( // lo entubamos a una librería bl
        bl((error, datos) => {
            //console.log("Algo ha recibido");
            if (error) {
                return console.error("Error al procesar la petición", error);
            } else {
                let datosStr = datos.toString();
                console.log("Número de caracteres: " + datosStr.length);
                console.log("Datos: \n " + datosStr);

            }
        }).pipe(streamEscritura) // crea el nuevo fichero
    );
});

// OTRA FORMA que funciona

/*http.get("http://www.google.es", (res) => {
    res.pipe(streamEscritura)
});*/