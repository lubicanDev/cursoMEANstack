enum TipoDeVia {
    Calle= 5,
    Plaza= 3,
    Camino,     // vale 4. le suma 1 al elemento anterior
    Avenida     // vale 5
}

console.log("Calle " + TipoDeVia.Calle);
console.log("Avenida " + TipoDeVia.Avenida);
console.log("Camino " + TipoDeVia.Camino);
console.log("Avenida " + TipoDeVia.Avenida);

namespace TipoDeVia {       // usamos el mismo nombre, que segun contexto sabe a que se refiera
    export function esAvenida(texto: string): TipoDeVia{
        if(texto=="Avda"){
            return TipoDeVia.Avenida;
        }
    }
}

var miTipoVia: TipoDeVia = TipoDeVia.Calle;

console.log("Tipo de via: " + miTipoVia);
console.log("Tipo de via: " + TipoDeVia[miTipoVia]);

var avenida = TipoDeVia.esAvenida("Avda");

console.log("Tipo de via: " + avenida);