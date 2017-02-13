// Ejemplo de Sevidor
var http = require("http");
var url = require("url");
//creamos el servidor
var server = http.createServer(
    (request, response) => {
        var miUrl = url.parse(request.url);
        console.log("URL: ", miUrl.path);
        response.writeHead(200, { "content-type": "text/html" });

        response.end(`<html>
                        <head>
                        </head>
                        <body>
                            <h1>Hola qué pasa!</h1>
                        </body>
                    </html>`);
        //http://localhost/clientes/45
        //http://localhost?clientes=45
    }
);
server.listen(8888);
console.log("Servidor Iniciado");