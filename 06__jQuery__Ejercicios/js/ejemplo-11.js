$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(deleteAll);
    $("#boton2").click(restoreAll);
    $("#boton3").click(addLastElement);
    $("#boton4").click(addFirstElement);
    $("#boton5").click(deleteLastElement);
    $("#boton6").click(deleteFirstElement);
    $("#boton7").click(deleteFirstAndSecond);

    $("#listaOriginal").attr('contenteditable', 'true');
    $("#botonFiltro").click(buscar);

    $textoFiltro = $("#valorFiltro").val();
}

function deleteAll() {
    $("#listaOriginal").empty();
}

function restoreAll() {
    // dentro de <ul> me lo cargo y pongo lo que tenga dentro de html()
    $("#listaOriginal").html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>");
}

function addLastElement() {
    $("#listaOriginal").append("<li>Agrego un item al final</li>");
}

function addFirstElement() {
    $("#listaOriginal").prepend("<li>Agrego un item al principio</li>");
}

function deleteLastElement() {
    let position = $("#listaOriginal li").length - 1;
    let liToDelete = $("#listaOriginal li").eq(position);
    liToDelete.remove();
}

function deleteFirstElement() {
    $("#listaOriginal li").eq(0).remove();
}

function deleteFirstAndSecond() {
    $("#listaOriginal li:lt(2)").remove();
}

function deletePreAndLast() {
    let position = $("#listaOriginal li").length - 3;
    let liToDelete = $("#listaOriginal li:gt(" + position + ")");
    liToDelete.remove();
}

/*function filtraLista() {
    // leer valores de la lista y mostrar los que cumplen la cndición, sacándolos en modo lista en el ul "id=listaNueva"
    $listaOriginal = $("#listaOriginal li");
    $listaOriginal.each(comparaFiltro);
}*/

function buscar() {
    $("#listaNueva").empty(); // borro la lista

    $textoFiltro = $("#valorFiltro").val();

    $("#listaOriginal li:contains(" + $textoFiltro + ")").clone().appendTo($("#listaNueva")); // Usar clone en otra lista

}