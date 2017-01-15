$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
    $("#descripcion div:odd").click(hideDiv);
}

function hideBox() {
    $("#descripcion").fadeOut("slow");
}

function showBox() {
    $("#descripcion div").show("fast");
    $("#descripcion").show("fast");

}

function hideDiv() {
    //$("#descripcion").hide("slow");
    $(this).hide("slow");
    return false;
}