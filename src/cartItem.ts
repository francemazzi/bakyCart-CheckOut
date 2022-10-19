import { products } from './index';
const titleDisplay = document.querySelector('#title') as HTMLDivElement;
const tabellaDisplay = document.querySelector(
  '#tabellaCarta',
) as HTMLDivElement;

//Welcome
export function populateUser(isReturning: boolean, nomePrimo: string) {
  const accesso = isReturning ? 'Bentornato' : '';
  titleDisplay.innerHTML = `<h2>${accesso} ${nomePrimo}, il tuo carrello contiene: </h2>`;
}

// product item
export const creaProdotto = (
  prodotti: number,
  immagine: string,
  titoloProdotto: string,
  costoDiConsegna: number,
  prezzo: number,
  spedizioneData: string,
) => {
  for (let i = 0; i < products.length; i++) {
    const prodottoItem = document.createElement('div');
    tabellaDisplay.appendChild(prodottoItem);
    prodottoItem.classList.add('prodottoItem');
    const image = document.createElement('img');
    image.setAttribute('src', products[i].immagine);
    prodottoItem.innerHTML = `
    <button class="deleteBtn">❌</button>
          <div id="img">
            <img src="${products[i].immagine}" alt="" />
          </div>
          <div>
            <span>Prodotto:</span>
            <div id="descrizioneProdottoItem">
              ${products[i].titoloProdotto}
            </div>
          </div>
          <div>
            <span>Costo di consegna:</span>
            <div id="prezzoSpedizione">${products[i].costoDiConsegna}</div>
          </div>
          <div>
            <span class="spedizione">Spedizione</span>
            <div id="dataSpedizione">${products[i].spedizioneData}</div>
          </div>
          <div>
            <button id="addButton" class="btn">+</button
            ><input type="text" /><button class="btn" id="removeButton">
              -
            </button>
          </div>
          <div>
            <span>Totale</span>
            <div id="prezzoTotale">${products[i].prezzo}</div>
          </div>
    `;
  }
};
