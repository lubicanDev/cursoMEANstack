let funcionAnonimaClsica=function(uno,dos){
    return uno + dos;
}

console.log (funcionAnonimaClsica(4,6));


let funcionLambda=(uno:number, dos:number) =>{
    return uno+dos;
}

console.log (funcionLambda(4,6));

const PI =3.1415927;

//PI=333; // me da error, porque es una constante

let {variable1, variable2}={variable1: "valor 1", variable2:"valor 2"}; // asignacion múltiple. Son variables !

let obj = {variable3: "valor 3", variable4:"valor 4"};

let {variable3, variable4}=obj;

function dameLosCamposPorConsola(campo1: string, campo2: number, ...elRestodeCampo){
    console.log(campo1);
    console.log(campo2);
    console.log(elRestodeCampo);
    console.log("y ahora mostramos todos:" + campo1);
    for (let posicion in elRestodeCampo){
        console.log("El campo en la posición "+ posicion + "\n\t es" + elRestodeCampo[posicion]);
    }
}

dameLosCamposPorConsola("una cadena", 100, "aaa", 35, 88, true, "otra cadena", "eooo");