// Para crear las figuras.
// Crea la vista (formulario) de cada figuras
// y crea el controlador para cada figuras

var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");
var padreCalcCirculo = document.getElementById("padre-Calc-Circulo");

var vistaRectangulo = new FiguraVistaV2(padreCalcRectangulo, "Rectangulo");
var vistaTriangulo = new FiguraVistaV2(padreCalcTriangulo, "Triangulo");
var vistaElipse = new FiguraVistaV2(padreCalcElipse, "Elipse");
var vistaCirculo = new FiguraVistaV2(padreCalcCirculo, "Circulo");

var controlRectangulo = new FiguraControlador(vistaRectangulo, Modelo.Rectangulo); // En figuras_controlador
var controlTriangulo = new FiguraControlador(vistaTriangulo, Modelo.TrianguloEquilatero);
var controlElipse = new FiguraControlador(vistaElipse, Modelo.Elipse);
var controlCirculo = new FiguraControlador(vistaCirculo, Modelo.Circulo);