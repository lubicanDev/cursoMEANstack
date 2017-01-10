// Donde dibujaremos en la vista
var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");

// Dibujamos en la vista (figura_vista)
var vistaRectangulo = new FiguraVista(padreCalcRectangulo, "Rectangulo");
var vistaTriangulo = new FiguraVista(padreCalcTriangulo, "Triangulo");
var vistaElipse = new FiguraVista(padreCalcElipse, "Elipse");

// Creamos los controladores??
var controlRectangulo = new FiguraControlador(vistaRectangulo, modeloRectangulo);
var controlTriangulo = new FiguraControlador(vistaTriangulo, modeloTrianguloIsosceles);
var controlElipse = new FiguraControlador(vistaElipse, modeloElipse);