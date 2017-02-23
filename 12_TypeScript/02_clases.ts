class Persona{
    nombre:string;
    apellido1:string;
    apellido2:string;

    constructor(nombre:string, ape1:string, ape2:string){
        this.nombre=nombre;
        this.apellido1=apellido1;
        this.apellido1=apellido2;
    }

    stringify():string{
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}







class Ciudadano extends Persona{
    identidad:string;

/*    constructor(nombre:string, ape1:string, ape2:string, identidad:string){
        super(nombre,ape1,ape2); // ¿Qué coño es el super???
        this.identidad=identidad;*/

    //Otro constructor que reciba sólo identidad, y el resto lo asigne a nulo
     
     constructor(nombre:string="", ape1:string="", ape2:string="", identidad:string="ninguna"){
        super(nombre,ape1,ape2); // ¿Qué coño es el super???
        this.identidad=identidad;       
    }



// sobreescribir la función stringify que imprima lo mismo, usando la función àdre y la identidad
stringify():string{
    return super.stringify() + this.identidad; // estamos sobreescribiendo stringify de la clase padre?
}
}



// crear dos objetos tipo Ciudadano y mostrar con stringify
let alguien=new Ciudadano("Nombre", "ape1"); // de esta manera, alguien infiere el tipo
let alguien2:Persona=new Ciudadano("Nombre", "ape1"); // de esta otra , alguien2 debe ser Ciudadano
//no puede ser lo siguiente
// let alguien3:Ciudadano=new Persona ("Nombre", "ape1");