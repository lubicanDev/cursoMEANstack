// Putting jQuery Into No-Conflict Mode

// by default, jQuery uses $ as a shortcut for jQuery. Thus, if you are using another JavaScript library that uses the $ variable, you can run into conflicts with jQuery. In order to avoid these conflicts, you need to put jQuery in no-conflict mode immediately after it is loaded onto the page and before you attempt to use jQuery in your page.
// When you put jQuery into no-conflict mode, you have the option of assigning a new variable name to replace the $ alias.


var $j = jQuery.noConflict();
// $j is now an alias to the jQuery function; creating the new alias is optional.

$j(document).ready(function() {
    $j("div").hide();
});

// The $ variable now has the prototype meaning (librería Prototype), which is a shortcut for
// document.getElementById(). mainDiv below is a DOM element, not a jQuery object.
window.onload = function() {
    var mainDiv = $("main");
}