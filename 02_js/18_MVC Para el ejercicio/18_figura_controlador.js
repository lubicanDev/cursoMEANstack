// Se llama en "figuras_creacion". Se le pasa una figura (vista) y un modelo (modelo)
var FiguraControlador = function(vistaFigura, modeloCalculador) {
    vistaFigura.controlador = this; // esta linea?? Es la que le dice a la vista, oye! yo soy tu controlador??
    this.vista = vistaFigura; // 
    this.modelo = modeloCalculador;
}
FiguraControlador.prototype.calculaArea = function(ancho, alto) {
    var areaCalculada = this.modelo.calcularDeVerdadArea(ancho, alto);
    this.vista.mostrarArea(areaCalculada);
}
FiguraControlador.prototype.calculaPerimetro = function(ancho, alto) {
    var perimetroCalculado = this.modelo.calcularDeVerdadPerimetro(ancho, alto);
    this.vista.mostrarPerimetro(perimetroCalculado);
}