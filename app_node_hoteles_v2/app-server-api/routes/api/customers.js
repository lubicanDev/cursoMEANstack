var express = require('express');
var router = express.Router();
var model = require("../../models/customer.model") // impotamos el modelo de customers


/* GET customers listing. */
router.get('/name/:name', function(req, res, next) {
    let name = req.params.name; //recibimos el parámetro
    if (name == null) {
        res.statusCode = 404;
        res.send("No encontrado"); // 
    } else {
        // lamamos a la funcion leer

        var fnCallback = function(error, customer) {
            if (error) {
                //no hacemos nada
                console.log("no se ha leido de la DB")
            } else {
                res.json(customer);
            }
        };
        model.leer({ name: name }, fnCallback);

        /*        res.json(`{
                    "name": "nombre_por_defecto",
                    "email": "correo@email.com"
                }`);
        */


    }
});

/* POST Metod */
// el método post de http se suele vincular con guardar en la DB
router.post("/", function(req, res) {

    // aqui no usamos moongoose. Estamos en la parte de lógica de negocio y me da igual qué base estamos usando

    let customer = req.body;

    console.log(req.body);
    var fnCallback = function(error, customer) {
        if (error) {
            //no hacemos nada
            console.log("no se ha leido de la DB")
        } else {
            res.json(customer);
        }
    }
    model.grabar(customer, fnCallback)
})

module.exports = router;