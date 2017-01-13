$(document).ready(inicializarEventos);

function inicializarEventos() {

    $("h1").click(presionTitulo);
}

function presionTitulo() {

    let tituloId = $(this).id

    if (tituloId = "titulo1") {
        var mi_titulo = $(this);
        mi_titulo.css("color", "#ff0000");
        mi_titulo.css("background-color", "#ffff00");
        mi_titulo.css("font-family", "Courier");

    } else if (tituloId = "titulo2") {
        var mi_titulo = $(this);
        mi_titulo.css("color", "#ffff00");
        mi_titulo.css("background-color", "#ff0000");
        mi_titulo.css("font-family", "Arial");

    }
}