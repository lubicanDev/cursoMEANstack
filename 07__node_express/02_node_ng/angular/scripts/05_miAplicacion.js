function ControladorSimple($scope) {
    $scope.misClientes = [
        { nombre: 'Fran', ciudad: 'Cádiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Pedro', ciudad: 'Valencia' },
        { nombre: 'Angel', ciudad: 'Cuenca' },
        { nombre: 'Roberto', ciudad: 'Teruel' },
        { nombre: 'Casimiro', ciudad: 'Valencia' },
        { nombre: 'Luis', ciudad: 'Valencia' }
    ];

    $scope.cambiarCliente = function() {
            // a cada controlados, angular le instancia un modelo
            // el modelo es el $scope??
            // $rootscope es el modelo global

            $scope.nombreCliente = "Texto en logica de negocio";
        }
        // intentar hacer addCliente
}

function ControladorAnimales($scope) {
    $scope.misAnimales = [
        { nombre: 'Perro', ciudad: 'Perruno' },
        { nombre: 'Gato', ciudad: 'Canino' }
    ];
}


var moduloAplicacion = angular.module("miAplicacion", []);

moduloAplicacion.controller('ControladorMuySimple', ControladorSimple);

moduloAplicacion.controller('UnControlDeAnimales', ControladorAnimales);