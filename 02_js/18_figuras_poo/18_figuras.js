calculaAreaRectangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
    this.metodoCompartido("EEEEEAH!");
}
calculaAreaTriangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
    this.metodoCompartido("OOOOOH!");
}
calculaAreaElipse = function() {
    this.resultado.value = (parseInt(this.alto.value) / 2) *
        (parseInt(this.ancho.value) / 2) * Math.PI;
    this.metodoCompartido("OOOOOH!");
}

function callbackGenerica() {
    alert("ya esta");
}
// Rectangulo
var Rectangulo = Figura.Heredar(calculaAreaRectangulo, "Rectangulo", callbackGenerica);
// Triangulo
var Triangulo = Figura.Heredar(calculaAreaTriangulo, "Triangulo", callbackGenerica);

var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse", callbackGenerica);