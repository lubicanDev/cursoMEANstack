// NOTA: Para instalar el modulo express indicado en package.json, ejecutar npm install sobre el directorio actual

// imporrtamos mucho
var miExpress = require("express");

// Instanciar
var app = miExpress();

// Enrutamiento... 
//vincular dos rutas  a dos funciones callback
app.get("/", peticionPrincipal); // cuando alquien acceda/se haga una peticion (request) a la raiz...

app.get("/about", peticionAbout);

function peticionPrincipal(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/index.html"); // ... se le envía este fichero
}

function peticionAbout(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/about.html");
}

app.listen(9000);

console.log("Servidor Lanzado");