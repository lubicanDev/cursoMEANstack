$(document).ready(initializeEvents);

function initializeEvents() {
    let $numDiv = $("#descripcion div").length;
    let mitadDiv = Math.round($numDiv / 2);
    $("#boton1").click(toggleBox);
    $("#descripcion div:lt(" + mitadDiv + ")").click(hideDivLento);
    $("#descripcion div:gt(" + (mitadDiv - 1) + ")").click(hideDivRapido);
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