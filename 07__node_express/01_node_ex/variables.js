// imporrtamos mucho
var miExpress = require("express");

// Instanciar
var app = miExpress();

// utilizamos expresion regular. en express las barras y los puntos no se escapan
app.get("/reservas/:idCliente?/facturas/:idFactura", (request, response) => {
    var idCliente = request.params.idCliente;
    var idFactura = request.params.idFactura;

    console.log("Visto " + request.originalUrl + " Reserva pedida de : " + idCliente);
    response.send("Resultados : \n\t Cliente: " +
        request.params.idCliente + " \n\t Factura: " +
        request.params.idFactura + "\n " +
        JSON.stringify(request.params));
});

var clientes = JSON.parse(fs.readFileSync("clientes.json").toString());

app.get("/clientes/:idClientes", (request, response) => {
    var idCliente = request.params.idCliente;
    response.send( /*falta*/ );
});

app.get("/save/:fichero.:extension", (request, response) => {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension);
});


app.get("/reservas/*", (request, response) => {
    console.log("Visto " + request.originalUrl + " Verbo: " + request.method);
    response.send("Visto " + request.originalUrl + " Verbo: " + request.method);
});

app.listen(9900);

console.log("Servidor express RESERVAS Lanzado");