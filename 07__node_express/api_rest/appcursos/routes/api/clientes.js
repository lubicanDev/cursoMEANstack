// Modulo "clientes"
// la parte API REST de enrutamiento

// importamos Express
var express = require("express");
// importamos el modelo
var modelo = require("../../modelo/modelo");

// otra forma de enrutar usando Router
// Router es un objeto de express. No hace falta "require"
var router = express.Router();

// como estamos haciendo la aplicacion por componentes, hacemos los enrutamientos en cada módulo
// la petición get de la raiz de reservas. "clientes/" 
router.get("/", function(req, res, next) {
    // aqui tenemos  que acceder a los datos

});
// la petición get "clientes/id" que devuelve una reserva según el id
router.get("/id", function(req, res, next) {
    // aqui tenemos  que acceder a los datos

});



// como esto que hemos hecho es un módulo, tenemos que exportarlo e importarlo en app.js
module.exports = router;