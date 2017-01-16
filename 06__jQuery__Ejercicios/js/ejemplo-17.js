$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("#peticion_ajax").click(dameFichero);
}

function dameFichero() {
    $("#contenido_de_ajax").html("ejemplo-17-fichero_alojado_en_servidor.txt");
}