// aquí es donde vamos a acceder a mongoDB

var ClienteMongo = require("mongodb").MongoClient; // cargar las dependencias de MongoDB
var assert = require("assert");

var url = "mongodb://localhost:27017/bd_hotel"; // en la ruta donde hemos creado la db con "mongod --dbpath bd_hotel"

var modelo = {
    // Accion es insertarBase/leerReservas como cadena
    acceder: function(accion, datos, miCallback) { // la callback que la apiRest le pasa ala modulo de persistencia
        ClienteMongo.connect(url, function(err, db) {
            assert.equal(null, err); // comprobamos que no haya errores
            console.log("Conexión a la DB correcta");

            modelo.reservas[accion](db, function(resultado) {
                console.log("Cerrar DB");
                db.close;
                if (typeof miCallback == "function") {
                    miCallback(resultados);
                }
            })
        })
    },
    reservas: {
        insertarBase: function(db, datosReserva, callback) {
            var coleccion = db.collection("reservas");
            coleccion.insert(datosReserva, function(err, documentos) {
                assert.equal(err, null);
                assert.equal(3, documentos.result.n);
                assert.equal(3, documentos.ops.length);
                console.log("Insertada Reservas");
                callback(documentos);
            });
        },
        leerReservas: function(db, datosReserva, callback) {

        }
    }

}

// no es obligatorio pasarle la función callBack
modelo.acceder("insertarBase", [
        { "cliente": "Pedro", "habitacion": 1 },
        { "cliente": "Perico", "habitacion": 2 },
        { "cliente": "Fulanito", "habitacion": 3 }
    ],
    (datosInsertados) => {
        console.log("Se han insertado Datos");
    });
// podríamos haberlo escrito así
// modelo.acceder("insertarBase");



module.export = modelo // exporta el objeto entero
    // lo exportamos a la API
    // export = modelo          // es otra forma de acerlo utilizando Ecma6