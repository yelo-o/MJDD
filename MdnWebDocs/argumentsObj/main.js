'use strict'

function list(type) {
    var result = "<" + type + "l><li>";
    var args = Array.prototype.slice.call(arguments, 1);
    result += args.join("</li><li>");
    result += "</li></" + type +"l>";

    return result;
}

var listHTML = list("u", "One", "Two", "Three");

function foo(...args) {
    return arguments;
}

foo(1, 2, 3);