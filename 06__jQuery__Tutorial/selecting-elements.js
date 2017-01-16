// SELECCIONANDO OBJETOS
// http://api.jquery.com/category/selectors/

// El principal concepto de jQuery es poder seleccionar un objeto y poder hacer algo con ello
// jQuery utiliza todos los selectores de CSS3 y alguno más

// Selecting Elements by ID
$("#myId"); // id tiene que ser único en la página
// Selecting Elements by Class Name
$(".myClass");
// Selecting Elements by Attribute
$("p[name='first_name']");
//Selecting Elements by Compound CSS Selector
$("#content ul.people li");
// Selecting Elements with a Comma-separated List of Selectors
$("div.myClass , ul.people");

// Pseudo-Selectors
// http://api.jquery.com/category/selectors/

$("a.external:first");
$("tr:odd");

// Select all input-like elements in a form (more on this below).
$("#myForm :input");
$("div:visible"); // los que están vivsibles en ese momento, no los que tienen esa plpiedad en el CSS

// All except the first three divs.
$("div:gt(2)");

// All currently animated divs.
$("div:animated");

// ***************************************
// ¿CONTIENE MI SELECCIÓN ALGÚN ELEMENTO?
// ***************************************

// UN ERROR COMÚN ES HACERLO DE ESTA FORMA
if ($("div.myClass")) { // ESTO ESTÁ MAL HECHO!!
    //...
}
// Doesn't work!
// When a selection is made using $(), an object is always returned, 
// and objects always evaluate to true. 
// Even if the selection doesn't contain any elements 

// LA FORMA CORRECTA
if ($("div.myclass").length) { // si es 0 devuelve false
    //...
}

// **********************
// GUARDANDO SELECCIONES
// **********************
var divs = $("div");
// Once the selection is stored in a variable, you can call jQuery methods on the variable just like you would have called them on the original selection.
// A selection only fetches the elements that are on the page at the time the selection is made.
// If elements are added to the page later, you'll have to repeat the selection or otherwise add them to the selection stored in the variable. 
// Stored selections don't magically update when the DOM changes.

// *************************************
// REFINANDO & FILTRANDO LAS SELECCIONES
// *************************************

$("div.foo").has("p"); // div.foo que contienen etiquetas "p"
$("h1").not(".bar"); // h1 elements that don't have a class of bar
$("ul li").filter(".current"); // unordered list items with class of current
$("ul li").first(); //just the first unordered list item
$("ul li ").eq(5); // the sixth

// ***************************************
// SELECCIONANDO ELEMENTOS DE FORMULARIO
// ***************************************

// :checked -> checked checkboxes AND checked radiobuttons
$("form: checked");

// :disabled
// :enabled
// :input
// :selected

// Selecting by type
// jQuery provides pseudo selectors to select form-specific elements according to their type:

// :password
// :reset
// :radio
// :text
// :submit
// :checkbox
// :button
// :image
// :file