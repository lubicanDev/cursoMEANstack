$(document).ready(inicializaEventosConJQuery);

function inicializaEventosConJQuery() {
    $inputButton = $('input');
    $inputButton.click(presionarBotonConJquery);

}

function presionarBotonConJquery() {
    alert("Botón jQuery pulsado " + this.id);
}