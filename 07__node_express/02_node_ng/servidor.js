// NOTA: Para instalar el modulo express indicado en package.json, ejecutar npm install sobre el directorio actual

// imporrtamos mucho
var miExpress = require("express");

// Instanciar
var app = miExpress();

// Enrutamiento
app.get("/", peticionPrincipal); // cuando alquien acceda/se haga una peticion (request) a la raiz...

app.get("/about", peticionAbout);
app.get("/expresiones", peticionExpresiones); // "/expresiones" es lo que escribimos en el navegador
// observar que no se tiene que llamar igual que el docmento .html
app.get("/directivas", peticionDirectivas);
app.get("/filtros", peticionFiltros);
app.get("/ordenamiento", peticionOrdenamiento);
app.get("/controlador", peticionControlador);

function peticionPrincipal(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/index.html"); // ... se le envía este fichero
}

function peticionAbout(peticion, respuesta) {

    respuesta.sendfile(__dirname + "/angular/about.html");
}

function peticionExpresiones(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/01_NG1_expresiones.html");
}

function peticionDirectivas(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/02_NG1_directivas.html");
}

function peticionFiltros(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/03_NG1_filtros.html");
}

function peticionOrdenamiento(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/04_NG1_ordenamiento.html");
}

function peticionControlador(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/05_NG1_controlador.html");
}

app.listen(9000);

console.log("Servidor Lanzado");