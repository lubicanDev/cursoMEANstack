var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Padre = (function () {
    function Padre() {
        this.propPrivada = 0;
        this.propPublica = 0;
        this.propProtegida = 0;
    }
    Padre.prototype.dameProPrivada = function () {
        return this.propPrivada;
    };
    Padre.prototype.toString = function () {
        return this.propPublica + " " + this.propPublica;
    };
    return Padre;
}());
var tuPadre = new Padre();
//tuPadre.propPrivada=34; // da error, porque es privada
tuPadre.dameProPrivada();
tuPadre.propPublica = 34; // como es pública, podemos cambiarla
var HijoDePadre = (function (_super) {
    __extends(HijoDePadre, _super);
    function HijoDePadre(otroValor) {
        var _this = _super.call(this) || this;
        //this.propPrivada=33;//no se puede usar porque es privada
        _this.propPublica = 55;
        _this.propProtegida = 66; //Aquí sí
        _this.propValor = otroValor;
        return _this;
    }
    HijoDePadre.prototype.toString = function () {
        return this.propPublica + " " + this.propValor;
    };
    return HijoDePadre;
}(Padre));
var tuHijoSiTienes = new HijoDePadre(89);
//tuHijoSiTienes.propProtegida=7; //no se puede usar
// Si creo un objeto de tipo Padre y le asigno un objeto e tipo hijo, ¿qué pasa si llamamos al método toString?
var otroHijo = new HijoDePadre(89);
console.log(otroHijo.toString());
