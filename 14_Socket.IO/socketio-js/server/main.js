var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server); // se va a basar  en la aplicacion server que acabamos de crear

let userCont = 0;

var socketsUsuario = {
    // objeto (array asociativo) entre "usuario":objetoSocket
};

/*var messages = [{
    id: 1,
    text: "Primer mensaje del servidor",
    author: "Servidor"
}, {
    id: 1,
    text: "Coslada es como un mundo paralelo, con policías mafiosos...",
    author: "Germán"
}, {
    id: 1,
    text: "Sacado del blog del autor",
    author: "Carlos Azaustre"
}];*/
var messages = [{
    id: 1,
    text: "Primer mensaje del servidor",
    author: "Servidor"
}];

app.use(express.static('public'));

app.get('/hello', function(req, res) {
    res.status(200).send("Hello World!");
});

// creamos la conexión de socket.IO
io.on("connection", alConectarseAlguien);

// función callback alConectarseAlguien
function alConectarseAlguien(socket) {
    userCont++;
    mensajeServidor("Alguien se ha conectadon. (" + userCont + " usuarios).");
    console.log("Alguien se ha conectado: " + userCont + " usuarios conectados");

    // emitimos un mensaje sólo a la socket que se ha conectado
    // realmente al emitir un mensaje, lo que hacemoos es emitir un evento llamado "mensajes"
    socket.emit("mensajes", messages);

    socket.on("identificar", function(data) {
        socketsUsuario[data.author] = socket;
    });

    // queremos escuchar cada vez que alguien emita un mensaje
    socket.on("nuevo-mensaje", function(data) {
        messages.push(data);
        io.sockets.emit("mensajes", messages); // emitimos a todos los sockets
    })

    // queremos emitir un mensaje PRIVADO
    socket.on("nuevo-mensaje-privado", function(data) {
        var socketDestino = socketsUsuario[data.destinatario];
        if (socketDestino) {
            socketDestino.emit("mensaje-privado", data);
        }
    });



    socket.on("disconnect", function() {
        userCont--;
        mensajeServidor("Se ha desconectado alguien. (" + userCont + " usuarios).");
    });
}

function mensajeServidor(mensaje) {
    messages.push({
        author: "servidor",
        text: mensaje
    });
    io.sockets.emit("mensajes", messages);
}



server.listen(8080, function() {
    console.log("Servidor escuchando en http://localhost:8080");
})