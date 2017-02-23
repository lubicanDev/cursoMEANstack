var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 5] = "Calle";
    TipoDeVia[TipoDeVia["Plaza"] = 3] = "Plaza";
    TipoDeVia[TipoDeVia["Camino"] = 4] = "Camino";
    TipoDeVia[TipoDeVia["Avenida"] = 5] = "Avenida"; // vale 5
})(TipoDeVia || (TipoDeVia = {}));
console.log("Calle " + TipoDeVia.Calle);
console.log("Avenida " + TipoDeVia.Avenida);
console.log("Camino " + TipoDeVia.Camino);
console.log("Avenida " + TipoDeVia.Avenida);
(function (TipoDeVia) {
    function esAvenida(texto) {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
var miTipoVia = TipoDeVia.Calle;
console.log("Tipo de via: " + miTipoVia);
console.log("Tipo de via: " + TipoDeVia[miTipoVia]);
var avenida = TipoDeVia.esAvenida("Avda");
console.log("Tipo de via: " + avenida);
