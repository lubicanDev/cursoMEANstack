$(document).ready(initializeEvents);

/*var blur = {
    'color': '#f00'
};*/

function initializeEvents() {
    //    $("#text1").focus(setfocus);
    //    $("#text1").blur(setBlur);
    //    $("#text2").focus(setfocus);
    //    $("#text2").blur(setBlur);
    $("input").focus(setfocus);
    $("input").blur(setBlur);


};

function setfocus() {
    //$(this).css("color", "#f00");
    $(this).toggleClass('blur');
};

function setBlur() {

    //$(this).css("color", "#00f");
    $(this).toggleClass('blur');
};