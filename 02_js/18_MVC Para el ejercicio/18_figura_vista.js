var FiguraVista = function(padreDom, nombre) {
    if (padreDom) {
        // Añadimos el FORM al padreDom
        this.formCalc = document.createElement("form");
        padreDom.appendChild(this.formCalc);
        // Las cajas de texto de entrada
        this.ancho = CreadorDOM.addInput(this.formCalc, "Ancho", "ancho");
        this.alto = CreadorDOM.addInput(this.formCalc, "Alto", "alto");
        // La caja con el resultado
        this.resultado = CreadorDOM.addInput(this.formCalc, "Área", "resultado");
        this.perimetro = CreadorDOM.addInput(this.formCalc, "Perimetro", "perimetro");

        CreadorDOM.addButton(this, " Calcular Área " + nombre, this.pulsarCalcularArea);
        CreadorDOM.addButton(this, " Perímetro     " + nombre, this.pulsarCalcularPerimetro);
    }
}
FiguraVista.prototype.pulsarCalcularArea = function() {
    this.controlador.calculaArea(parseInt(this.alto.value), parseInt(this.ancho.value)); // es el controlador el que le dice a la vista que al pulsarCalcularArea utilice su función calculaArea (figura_controlador)
}
FiguraVista.prototype.pulsarCalcularPerimetro = function() {
    this.controlador.calculaPerimetro(parseInt(this.alto.value), parseInt(this.ancho.value));
}
FiguraVista.prototype.mostrarArea = function(area) {
    this.resultado.value = area;
}
FiguraVista.prototype.mostrarPerimetro = function(perimetro) {
    this.perimetro.value = perimetro;
}