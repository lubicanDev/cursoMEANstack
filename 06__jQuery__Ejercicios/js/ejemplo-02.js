var newCSS = {
    titulo1: {
        "color": "#ff0000",
        "background-color": "#ffff00",
        "font-family": "Courier"
    },
    titulo2: {
        "color": "#ffff00",
        "background-color": "#ff0000",
        "font-family": "Arial"
    }
}

$(document).ready(inicializarEventos);

function inicializarEventos() {

    $("h1").click(presionTitulo);
}

function presionTitulo() {

    let mi_titulo_Id = event.target.id;
    //console.log(mi_titulo_Id);
    let mi_titulo = $(this);
    //console.log(mi_titulo);

    mi_titulo.css(newCSS[mi_titulo_Id]);



}