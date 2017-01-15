$(document).ready(initializeEvents);

function initializeEvents() {
    $("#buscar").focus(clearValue);
    $("#buscar").blur(writeValue);
}

function clearValue() {
    $("#buscar").attr("value", "");
}

function writeValue() {
    $("#buscar").attr("value", "Buscar ...");
}