// imporrtamos mucho
var miExpress = require("express");

// Instanciar
var app = miExpress();
/*MODULO*/
var reservas = {

    get: function() {
        return "{todas las reservas}";
    },
    post: function(reserva) {
        console.log("añadir reserva " + reserva.id + " reserva" + reserva.nombre);
    },
    delete: function(idReserva) {
        console.log("eliminar reserva " + reserva.id);
    }
}

/*FIN MODULO*/

var aResponder = (request, response) => {
    console.log("Acceso a la petición, ", request);
    //response.send("Respuesta Recibida!");
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);
}



app.all("/reservas", aResponder);
app.listen(9000);

console.log("Servidor express Lanzado");