// the .attr() METHOD

// An element's attributes can contain useful information for your application, so it's important to be able to get and set them.

// The .attr() puede actuar tanto como getter como setter

// .attr() como SETTER
// .attr() como setter puede aceptar bien una clave y un valor, o un objeto que contiene uno o más pares de clave/valor 

$(a).attr("href", "pagina.html"); // par (clave,valor). ahora todas las etiquetas "a" tienen el mismo atributo href

$(a).attr({
    // como objeto que contiene uno o más pares de clave/valor
    href: "otraPagina.html",
    title: "unTituloParaTodos"
});


// .attr() como GETTER
// Get the value of an attribute for the first element in the set of matched elements.  

$(a).attr("href"); // devuelve el valor del atributo href del PRIMER elemento "a"