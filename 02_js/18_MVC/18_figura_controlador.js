var FiguraControlador = function(vistaFigura, modeloCalculador) {
    var vista = vistaFigura;
    var modelo = modeloCalculador;
    //this.vista = vistaFigura;
    //this.modelo = modeloCalculador;
    // no hay por que guardar. Si se guarda, hay que cambiarlo debajo también


    // se puede hacer así, con una función intermedia
    this.paracalculaArea = function(ancho, alto) {
        var areaCalculada = modelo.calcularDeVerdadArea(ancho, alto);
        vista.mostrarArea(areaCalculada);
    }

    // otra forma, con una función intermedia

    // var paracalculaArea = function(ancho, alto) {
    //    var areaCalculada = modelo.calcularDeVerdadArea(ancho, alto);
    //    vista.mostrarArea(areaCalculada);
    // }   
    // vistaFigura.calculaArea = paracalculaArea; // observar que hemos quitado el .this



    // ... o así, en línea, como una funcion anónima
    vistaFigura.calculaPerimetro = function(ancho, alto) {
        var perimetroCalculado = modelo.calcularDeVerdadPerimetro(ancho, alto);
        vista.mostrarPerimetro(perimetroCalculado);
    }
}