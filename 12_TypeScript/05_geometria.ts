// -----------------------------
// SE PUEDE HACER CON UNA CLASE
// -----------------------------

/*// hacemos una clase abstracta que no se puede instanciar
abstract class Geometria{
    static totalGeometrias: number=0;
    private base: number=0;
    private altura: number =0;

    constructor(b:number, a:number){
        this.base=b;
        this.altura=a;
        Geometria.totalGeometrias++; // lo definimos en el constructor para que se actualice siempre que se crea una geometria
    }   


class Rectangulo extends Geometria{
    
    calcularArea(): number{
        return this.base*this.altura;
    }
}
class Triangulo extends Geometria{
    
    calcularArea(): number{
        return this.base*this.altura/2;
    }
}
*/

// -----------------------------
// SE PUEDE HACER CON UNA INTERFACE
// -----------------------------

interface Geometria{
     base: number,
     altura: number
}



class Rectangulo implements Geometria{
     base: number=0;
     altura: number =0;
    constructor(b:number, a:number){
        this.base=b;
        this.altura=a;
    }      
    calcularArea(): number{
        return this.base*this.altura;
    }
}
class Triangulo implements Geometria{
         base: number=0;
     altura: number =0;
    constructor(b:number, a:number){
        this.base=b;
        this.altura=a;
    }       calcularArea(): number{
        return this.base*this.altura/2;
    }
}

let rect: Rectangulo =new Rectangulo(10,20);
let tri: Triangulo =new Triangulo(10,20);

//let geo: Geometria =new Geometria(10,20)  //No tiene sentido crear una instancia de geometría. Por  eso hemos hecho Geometria una clase abstacta. Por eso la linea da error

console.log("Area Rectángulo " + rect.calcularArea());
console.log("Area Triángulo " + tri.calcularArea());


