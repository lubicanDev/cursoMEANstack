var passport = require("passport");
var EstrategiaHTTP = require("passport-http").BasicStrategy;

var iniciarModulo = function(app) {

    // falta codigo
}

var agregarCabeceras = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.header.origin);
    res.header("Access-Control-Allow-Headers", "Authoritation");
    next();
}
var autenticar = function() {

    // falta codigo
}



var callbackAutorizar = function(nombreUsuario, password, done) {

    // falta codigo  
}

passport.use(new EstrategiaHTTP(callbackAutorizar));

module.exports = iniciarModulo;
module.exports.agregarCabeceras = agregarCabeceras;
module.exports.autenticar = autenticar;