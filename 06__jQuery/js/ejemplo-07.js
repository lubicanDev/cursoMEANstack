$(document).ready(initializeEvents);

function initializeEvents() {
    $(document).mousemove(moveDetected);
}



function moveDetected(event) {
    $("#coordx").text("Coordenada x=" + event.clientX);
    $("#coordy").text("Coordenada y=" + event.clientY);

    var estilosBox = {
        'background-color': '#000000',
        'height': '20px',
        'width': '20px',
        'position': 'absolute',
        'left': event.clientX + 'px',
        'top': event.clientY + 'px'
    };

    $("#box").css(estilosBox);
}