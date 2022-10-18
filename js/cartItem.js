"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateUser = void 0;
const titleDisplay = document.querySelector("#title");
function populateUser(isReturning, nomePrimo) {
    console.log(isReturning, nomePrimo);
    const accesso = isReturning ? "Bentornato" : "";
    titleDisplay.innerHTML = `<h2>${accesso} ${nomePrimo}, il tuo carrello contiene: </h2>`;
}
exports.populateUser = populateUser;
//# sourceMappingURL=cartItem.js.map