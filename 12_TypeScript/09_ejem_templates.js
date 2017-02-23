var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Silla = (function () {
    function Silla(nom) {
        this.nombresilla = nom;
    }
    Silla.prototype.toString = function () {
        return this.nombresilla;
    };
    return Silla;
}());
var Sofa = (function () {
    function Sofa(nom) {
        this.nombreSofa = nom;
    }
    Sofa.prototype.toString = function () {
        return this.nombreSofa;
    };
    return Sofa;
}());
var DAOGenerico2 = (function () {
    function DAOGenerico2() {
    }
    DAOGenerico2.prototype.stringify = function (objeto) {
        return objeto + "";
    };
    return DAOGenerico2;
}());
var ArrayGenericDAO2 = (function (_super) {
    __extends(ArrayGenericDAO2, _super);
    function ArrayGenericDAO2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.almacen = [];
        return _this;
    }
    ArrayGenericDAO2.prototype.add = function (objeto) {
        this.almacen.push(objeto);
    };
    ArrayGenericDAO2.prototype.del = function (objeto) {
        // recorrer, buscar y eliminar! (Terminator)
    };
    ArrayGenericDAO2.prototype.find = function (indice) {
        return this.almacen[indice];
    };
    ;
    ArrayGenericDAO2.prototype.list = function () {
        return this.almacen;
    };
    return ArrayGenericDAO2;
}(DAOGenerico2));
var daoSilla = new ArrayGenericDAO2();
var daoSofa = new ArrayGenericDAO2();
daoSilla.add(new Silla("Silla 1"));
daoSilla.add(new Silla("Silla 2"));
daoSofa.add(new Sofa("Sofa 1"));
daoSofa.add(new Sofa("Sofa 1"));
console.log("daoSilla: " + daoSilla.list() + "\n" + daoSofa.list());
