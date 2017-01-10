// En el modelo es donde vamos a poner la lógica de la aplicación
// En este caso hablamos de las funciones que calculan las áreas y los perímetros.
var Modelo = {
    Rectangulo: {
        calcularDeVerdadArea: function(ancho, alto) { return ancho * alto; },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho * 2; }
    },
    Elipse: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * Math.PI;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
        }
    },
    Circulo: {
        calcularDeVerdadArea: function(ancho, alto) { /*result*/ return Math.PI * (ancho / 2) * (ancho / 2) },
        calcularDeVerdadPerimetro: function(ancho, alto) { /*result*/ return 2 * Math.Pi * (ancho / 2) }
    },
    calcularDeVerdadAreaTriangulo: function(ancho, alto) {
        return ancho * alto / 2;
    },
    TrianguloEquilatero: {
        calcularDeVerdadArea: function(ancho, alto) { // TODO: algo hay mal!!! 
            return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto)
        },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; }
    },
    TrianguloIsosceles: {
        calcularDeVerdadArea: this.calcularDeVerdadAreaTriangulo,
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; }
    }
};