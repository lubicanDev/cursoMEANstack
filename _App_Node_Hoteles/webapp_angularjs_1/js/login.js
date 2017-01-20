function ControladorLogin() {
    // ESTA TODO MAL, LA LOGICA/PROCESOS DEBERÍAN ESTAR EN EL MODELO
    // AQUÍ SOLO CONSULTAMOS/CAMBIAMOS EL MODELO

    this.logInLogOut = function(usuario, pass) { // Función para LogIn/LogOut
        if (!Modelo.Login.estaLogeado) { // Si no está logeado
            (usuario == Modelo.Login.userAdmin && pass == Modelo.Login.passwordAdmin) ? Modelo.Login.estaLogeado = true: Modelo.Login.estaLogeado = false; // Si coincide Usuario/pass entonces se logea
        } else {
            Modelo.Login.estaLogeado = false; // si estaba logeado, hace LogOut
        }
        Modelo.Login.usuarioActual = Modelo.Login.estaLogeado ? usuario : ""; // Almacena el usuarioActual sólo si ha hecho log In
        this.usuario = ""; // Borra el input
        this.pass = ""; // Borra el input
    };
    this.siEstaLogeado = function() { // Devuelve True si está logeado
        return Modelo.Login.estaLogeado;
    };
    this.usuarioActual = function() { // Devuelve usuario actual
        return Modelo.Login.usuarioActual;
    };
    this.ButtonValue = function() { return Modelo.Login.estaLogeado ? "Log Out" : "Log In"; }
};


var moduloAplicacion = angular.module("appNodeHotel", []);

moduloAplicacion.controller("LoginController", ControladorLogin);