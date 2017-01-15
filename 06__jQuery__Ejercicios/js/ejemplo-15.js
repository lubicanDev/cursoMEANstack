$(document).ready(initializeEvents);

//desactivamos menu contextual del navegador

/*
$(document).ready(function() {
    $(document).bind("contextmenu", function(e) {

        // Avoid the real one
        event.preventDefault();
        alert("Hello World!");
    });
});

*/

function initializeEvents() {
    $("#parrafos p").each(markBySize);
}

function markBySize() {
    if ($(this).text().length < 100) {
        $(this).css("background-color", "#ff0");
        $(this).addClass("contex-menu");
        $(this).bind("contextmenu", function(e) {
            // Avoid the real one
            event.preventDefault();
            //alert(this.text());
            alert($(this).text());
        });
    }
}