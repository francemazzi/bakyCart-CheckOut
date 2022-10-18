const titleDisplay = document.querySelector("#title");

export function populateUser(isReturning: boolean, nomePrimo: string) {
  const accesso = isReturning ? "Bentornato" : "";
  titleDisplay.innerHTML = `<h2>${accesso} ${nomePrimo}, il tuo carrello contiene: </h2>`;
}
