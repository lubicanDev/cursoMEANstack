$(document).ready(initializeEvents);

var estilosIn = {
    'background-color': '#ff0',
    'border': '1px solid red',
    'box-shadow': '5px 5px 5px #888888'

}
var estilosOut = {
    'background-color': '#fff',
    'border': '0px',
    'box-shadow': '0px 0px 0px #888888'

}

function initializeEvents() {
    /* $("a").mouseover(inMouseEvent);
     $("a").mouseout(outMouseEvent);*/
    $("a").hover(inMouseEvent, outMouseEvent);
}

function inMouseEvent() {
    $(this).css(estilosIn);
}

function outMouseEvent() {
    $(this).css(estilosOut);
}