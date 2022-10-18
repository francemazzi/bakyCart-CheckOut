const titleDisplay = document.querySelector("#title") as HTMLDivElement;

export function populateUser(isReturning: boolean, nomePrimo: string) {
  console.log(isReturning, nomePrimo);

  const accesso = isReturning ? "Bentornato" : "";
  titleDisplay.innerHTML = `<h2>${accesso} ${nomePrimo}, il tuo carrello contiene: </h2>`;
}
