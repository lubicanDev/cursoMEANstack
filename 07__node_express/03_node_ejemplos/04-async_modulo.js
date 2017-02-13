let fs = require('fs');

exports.saberLineas = function(fichero, callback) {
    var objetoconInfo = {
        "proFunCallback": callback
    }
    fs.readFile(fichero, miFuncionAsincrona.bind(objetoconInfo));
}

function miFuncionAsincrona(error, contenido) {
    if (error) {
        this.proFunCallback(error);
    } else {
        // let numFilas = contenido.toString().split('\n').length;
        let numFilas = contenido.toString().match(/\n/g).length;
        this.proFunCallback(null, numFilas);
    }
}