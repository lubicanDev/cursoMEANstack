class Silla {
    nombresilla:string;
    constructor (nom:string){
        this.nombresilla=nom;
    }
    toString() : string {
        return this.nombresilla;
    }
}
class Sofa {
    nombreSofa:string;
    constructor (nom:string){
        this.nombreSofa=nom;
    }
    toString() : string {
        return this.nombreSofa;
    }
}

abstract class DAOGenerico2 <T> {

    abstract add(objeto :T);     // para poder invocar los métodos, hay que definirlos, aunque no se implementen
    abstract del(objeto :T);     // para poder invocar los métodos, hay que definirlos, aunque no se implementen
    abstract list():T[];    // para poder invocar los métodos, hay que definirlos, aunque no se implementen
    stringify(objeto :T){
        return objeto+"";    
    }
}

class ArrayGenericDAO2 <T> extends DAOGenerico2<T>{
    private almacen :T[] = [];
    add(objeto: T){
        this.almacen.push(objeto);
    }
    del(objeto: T){
        // recorrer, buscar y eliminar! (Terminator)
    }
    find(indice:number) :T {
        return this.almacen[indice];
    };
    list():T[] {
        return this.almacen;
    }
}

var daoSilla: DAOGenerico2<Silla> = new ArrayGenericDAO2<Silla>();
var daoSofa: DAOGenerico2<Sofa> = new ArrayGenericDAO2<Sofa>();


daoSilla.add(new Silla("Silla 1"));
daoSilla.add(new Silla("Silla 2"));
daoSofa.add(new Sofa("Sofa 1"));
daoSofa.add(new Sofa("Sofa 1"));

console.log("daoSilla: " + daoSilla.list() + "\n" + daoSofa.list());



