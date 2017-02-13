$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("#peticion_ajax").click(peticionAjaxGenerica);
}

function peticionAjaxGenerica() {
    var opcionesAjax = {
        data: {
            nombre: "Ruben",
            nivel: "medio"
        },
        type: "GET",
        dataType: "json",
        url: "http://jsonplaceholder.typicode.com/users"
    };
    $.ajax(opcionesAjax)
        .done(peticionCompletada)
        .fail(peticionFallida);
}

function peticionCompletada(datos, status, jqXHR) {
    alert("Petición Completada. Estado: " + status + ":" + datos);
    //alert("jqXHR: " + jqXHR);

    $("#contenido_de_ajax").html(datos[1].username);
}

function peticionFallida(jqXHR, status, error) {
    alert("error al procesar");
    console.log("Estado: " + status);
    console("ERROR!: " + error);



}