var http = require("http");

var fs = require("fs");

function enviarImagen(request, response) {
    response.writeHead(200, { "content-type": "image/jpg" });
    fs.createReadStream("Penguins.jpg").pipe(response);
    console.log("Imagen servida");
}
var server = http.createServer(enviarImagen);
server.listen(9999);
console.log("Servidor Imagen Escuchando");