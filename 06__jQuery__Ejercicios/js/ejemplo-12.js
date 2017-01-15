$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
    $("#descripcion div").click(hideDiv);

}

function hideBox() {
    $("#descripcion").hide("slow");

}

function hideDiv() {
    //$("#descripcion").hide("slow");
    $(this).hide("slow");
    return false;
}

function showBox() {
    $("#descripcion div").show("fast");
    $("#descripcion").show("fast");

}