// $( document ).ready()

// A page can't be manipulated safely until the document is "ready."
// Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

// A $( document ).ready() block.

$(document).ready(function() {
    console.log("ready!");
});

// Experienced developers sometimes use the shorthand $() for $( document ).ready()

$(function() {
    console.log("Ready!!");
});

// You can also pass a named function to $( document ).ready() instead of passing an anonymous function.

// función que va a llamarse 

function readyFn() {
    // Código de la función
}

$(document).ready(readyFn);