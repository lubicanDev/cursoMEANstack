class Padre{
    private propPrivada: number=0;
    public propPublica: number =0;
    protected propProtegida: number=0;

    dameProPrivada(){
        return this.propPrivada;
    }
        toString(): string{
        return this.propPublica + " " + this.propPublica;
    }
}

let tuPadre: Padre=new Padre();
//tuPadre.propPrivada=34; // da error, porque es privada
tuPadre.dameProPrivada();

tuPadre.propPublica = 34; // como es pública, podemos cambiarla

class HijoDePadre extends Padre{
    propValor:number;
    constructor(otroValor:number){
        super();
        //this.propPrivada=33;//no se puede usar porque es privada
        this.propPublica=55;
        this.propProtegida=66; //Aquí sí
        this.propValor=otroValor;
    }
    toString(): string{
        return this.propPublica + " " + this.propValor;
    }
}
let tuHijoSiTienes: HijoDePadre= new HijoDePadre(89);
//tuHijoSiTienes.propProtegida=7; //no se puede usar

// Si creo un objeto de tipo Padre y le asigno un objeto e tipo hijo, ¿qué pasa si llamamos al método toString?

let otroHijo:Padre = new HijoDePadre (89);

console.log (otroHijo.toString());

