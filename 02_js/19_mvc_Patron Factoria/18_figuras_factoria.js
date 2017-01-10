// Vamos a crear la fatoría


function FactoriaFiguras() {
    // Aquí todo lo necesario para crear vista-controlado-modelo

    // Definimos los prototipos y la utilidades para esta "factoría"

    // Definimos que la clase por defecto sea rectángulo
    FactoriaFiguras.prototype.figuraClass = rectangulo;

    // Tenemos que definir el método para la creación de "new figura instances"

    FactoriaFiguras.prototype.crearFigura(options) {
        // Aquí todo lo necesario para Crear la figura
        // habrá partes comunes para todos los tipos de figura
        // habrá partes específicas para qcada tipo de figura


        // REVISAR QUE GERMAN LO HA HECHO DISTINTO


        // VISTA
        var newVistaFigura;
        switch (options.vista) {
            case "vista1":
                newVistaFigura = new FiguraVista(padreDom, type);
                break;

            case "vista2":
                newVistaFigura = new FiguraVista2(padreDom, type);
                break;
        }
        // CONTROLADOR
        var newFiguraControlador;
        switch (options.tipo) {
            case "rectangulo":
                figuraControlador = new FiguraControlador(newVistaFigura, Modelo.Rectangulo);
                break;
            case "triangulo":
                figuraControlador = new FiguraControlador(newVistaFigura, Modelo.Triangulo);
                break;
            case "elipse":
                figuraControlador = new FiguraControlador(newVistaFigura, Modelo.Elipse);
                break;
            case "huevo":
                figuraControlador = new FiguraControlador(newVistaFigura, Modelo.Huevo);
                break;
        }
    }
    return newFiguraControlador;
};