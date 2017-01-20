if (typeof Modelo == "undefined") { // si indefinido
    var Modelo = {}; // inicializamos modelo
}

Modelo.Login = {
    userAdmin: "demo",
    passwordAdmin: "demo",
    usuarioActual: "",
    passwordActual: "",
    estaLogeado: false,

    logInLogOut: function(usuario, pass) { // Función para LogIn/LogOut
        if (!this.estaLogeado) { // Si no está logeado
            (usuario == Modelo.Login.userAdmin && pass == Modelo.Login.passwordAdmin) ? Modelo.Login.estaLogeado = true: Modelo.Login.estaLogeado = false; // Si coincide Usuario/pass entonces se logea
        } else {
            Modelo.Login.estaLogeado = false; // si estaba logeado, hace LogOut
        }
        Modelo.Login.usuarioActual = Modelo.Login.estaLogeado ? usuario : ""; // Almacena el usuarioActual sólo si ha hecho log In
        this.usuario = ""; // Borra el input
        this.pass = ""; // Borra el input
    }
};