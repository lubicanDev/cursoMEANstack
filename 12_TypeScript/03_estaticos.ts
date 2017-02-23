class Persona2{
    nombre                   :string;
    apellido1                :string;
    apellido2                :string;
    static totalPersonas     :number=0;   //Propiedad estática de la clase. Hay que inicializarla
    static ultimaPersona     : Persona2=null;

    constructor(nombre:string="",
     apellido1:string="",
     apellido2:string="")
     {
        this.nombre     =nombre;
        this.apellido1  =apellido1;
        this.apellido1  =apellido2;

        Persona2.totalPersonas++;   //con esto vamos contando las personas que se crean
        Persona2.ultimaPersona=  this;// vamos a almacenar la última persona creada
    }

}

    Persona2.totalPersonas=5;
    let germanMiDoble=new Persona2("Germán", "Caballero", "Rodriguea");
    let germanMiDoble2=new Persona2("Germán", "Caballero", "Rodriguea");
    let germanMiDoble3=new Persona2("Germán", "Caballero", "Rodriguea");

//console.log(germanMiDoble.stringify());

germanMiDoble.nombre="Otro mini yo";

//germanMiDoble.totalPersonas=5 // no se puede usar

console.log(" TotalPersonas " + Persona2.totalPersonas);





