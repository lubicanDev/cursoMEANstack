var mongoose = require("mongoose"); //Importamos mongoose

mongoose.connect("localhost:27017/db_hotels");

var Schema = mongoose.Schema;

//creamos la clase Customer para poder utilizarla
// fíjate que en angular también hemos creado esta misma clase
class Customer {
    // en ECMAC 6 hay constructor
    constructor(nom, em) {
        this.name = nom;
        this.email = em;
    }
}

// definimos el esquema
var CustomerSchema = new Schema({
    "name": String,
    "email": String
});

// como queremos que se vea fuera, lo exportamos
// la diferencia de las operaciones CRUD en mongo y en mongoose es: 
// en mongo insertas un documento. Lo conviertes a un objeto y lo insertas. 
// en mongoose actuas sobre el modelo, que es un objeto?? y mongoose se encarga de la gestión

// .export es un objeto{}
module.export = {
    CustomerModel: mongoose.model("Customer", CustomerSchema),
    Customer: Customer
}