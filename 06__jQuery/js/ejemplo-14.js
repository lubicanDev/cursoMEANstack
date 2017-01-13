$(document).ready(initializeEvents);

function initializeEvents() {
    $numDiv = $("#description div").length;
    $("#boton1").click(toggleBox);
    $("#descripcion div:lt[" + $numDiv + "]").click(hideDivLento);
    $("#descripcion div:gt[" + $numDiv + "]").click(hideDivRapido);
}

function toggleBox() {
    $("#descripcion").toggle("slow");
};

function hideDivLento() {

    $(this).hide("slow");
    return false;
}

function hideDivRapido() {

    $(this).hide("fast");
    return false;
}