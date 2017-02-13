// Ejemplo de Sevidor
var http = require("http");
var url = require("url");
var fs = require("fs");


//creamos el servidor
/*var clientes = [
    { nombre: "Pepito", pedidos: 12 },
    { nombre: "Juanito", pedidos: 13 },
    { nombre: "Felipito", pedidos: 85 },
    { nombre: "Otro", pedidos: 45 }
];*/
var clientes = JSON.parse(fs.readFileSync("clientes.json").toString());
var server = http.createServer(
    (request, response) => {
        var miUrl = url.parse(request.url, true);
        console.log("URL: ", miUrl.path);

        response.writeHead(200, { "content-type": "application/json" });

        if (/^\/clientes\/\d/.test(request.url)) {
            var numero = parseInt(request.url.split('/')[2]);
            response.end(JSON.stringify(clientes[numero]));
        } else if (/^\/clientes/.test(request.url)) {
            response.end(JSON.stringify(clientes));
        } else {
            response.writeHead(404);
            response.end("ERROR");
        }
    }
);
server.listen(8888);
console.log("Servidor Iniciado");