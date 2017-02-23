var funcionAnonimaClsica = function(uno, dos) {
    return uno + dos;
};
console.log(funcionAnonimaClsica(4, 6));
var funcionLambda = function(uno, dos) {
    return uno + dos;
};
console.log(funcionLambda(4, 6));
var PI = 3.1415927;
//PI=333; // me da error, porque es una constante
var _a = { variable1: "valor 1", variable2: "valor 2" },
    variable1 = _a.variable1,
    variable2 = _a.variable2; // asignacion múltiple. Son variables !
var obj = { variable3: "valor 3", variable4: "valor 4" };
var variable3 = obj.variable3,
    variable4 = obj.variable4;

function dameLosCamposPorConsola(campo1, campo2) {
    var elRestodeCampo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elRestodeCampo[_i - 2] = arguments[_i];
    }
    console.log(campo1);
    console.log(campo2);
    console.log(elRestodeCampo);
    console.log("y ahora mostramos todos:");
    for (let posicion in elRestodeCampo) {
        console.log("El campo en la posición " + posicion + "\n\t es" + elRestodeCampo[posicion]);
    }
}
dameLosCamposPorConsola("una cadena", 100, "aaa", 35, 88, true, "otra cadena", "eooo");