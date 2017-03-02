var express = require("express");
var modPassport = require("./modPassport");

var app = express();

app.use(modPassport.agregarCabecera);
modPassport(app)

app.get(

    "/home",
    modPassport.autentication(),
    (request, response) => {
        console.log("Acceso Permitido");
        response.send("Acceso Concedido");
    }
);
console.log("Servidor iniciado");
app.listen(8080);