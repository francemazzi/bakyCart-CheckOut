"use strict";
exports.__esModule = true;
exports.populateUser = void 0;
var titleDisplay = document.querySelector("#title");
function populateUser(isReturning, nomePrimo) {
    console.log(titleDisplay);
    var accesso = isReturning ? "Bentornato" : "";
    titleDisplay.innerHTML = "<h2>".concat(accesso, " ").concat(nomePrimo, ", il tuo carrello contiene: </h2>");
}
exports.populateUser = populateUser;
