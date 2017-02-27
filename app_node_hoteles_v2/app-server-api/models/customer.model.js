var mongoos = require("mongoose"); // importamos mongoose

var Schemas = require("./schema"); // importamos shema.js

// Grabar
function grabar(customer, callback) {
    // le pasamos un objeto, que hemos definido en schema y un calback
    // creamos nuestro modelo
    let customerModel = new Schemas.CustomerModel(customer);

    // SAVE
    customerModel.save((error, customer) => {
        if (error) {
            console.log("Error al Guardar");
        } else {
            console.log("Cliente Guardado");
        }
        if (typeof callback != "undefined") {
            callback(error, customer);
        }
    })
}

// LEER

function leer(customer, callback) {
    //le pasamos el objeto y de ahí sacamos el nomrbre
    let name = customer.name;
    // mongoose
    Schemas.CustomerModel.find({ "name": name }, { "__v": 0 }, (error, customers) => {
        if (error) {
            console.log("Error al Guardar");
        } else {
            console.log("Cliente Guardado");
        }
        if (typeof callback != "undefined") {
            callback(error, customers);
        }
    })
}

module.exports.grabar = grabar;
module.exports.leer = leer;