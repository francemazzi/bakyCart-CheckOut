// import { v4 as uuidV4 } from 'uuid';
// uuidV4();
import { populateUser, creaProdotto } from './cartItem';

//dati utente
const you: {
  nome: string;
  cognome: string;
  isReturning: boolean;
}[] = [
  {
    nome: 'Bobby',
    cognome: 'Dog',
    isReturning: true,
  },
];

//Dati carrello
export const products: {
  immagine: string;
  titoloProdotto: string;
  costoDiConsegna: number;
  prezzo: number;
  spedizioneData: string;
}[] = [
  {
    immagine: '/public/img/iTem1.png',
    titoloProdotto:
      'TRAMEZZINI Prosciutto di Praga e mozzarella di Bufala + maionese (x1), Prosciutto crudo e mozzarella di Bufala + maionese (x1) MARITOZZI SALATI Baccalà mantecato e lamponi (x1), Mortadella, ricotta e granella di pistacchi (x1)',
    costoDiConsegna: 6.9,
    prezzo: 39,
    spedizioneData: 'Dalle 08:30 del 21-10-2022',
  },
  {
    immagine: '/public/img/iTem.2.jpg',
    titoloProdotto: 'Cake al Limone da 6 a 12 porzioni 6/8 porzioni',
    costoDiConsegna: 6.9,
    prezzo: 22,
    spedizioneData: 'Dalle 08:30 del 21-10-2022',
  },
  {
    immagine: '/public/img/item3.jpg',
    titoloProdotto:
      'RINVENIMENTO La Vaporiera (x1) SFIZI Edamame - classico/piccante - Classico (x1), Edamame - classico/piccante - Piccante (x1), Pickles - Cetriolini Sottaceto (x1)',
    costoDiConsegna: 6.9,
    prezzo: 19,
    spedizioneData: 'Dalle 18:00 di oggi',
  },
  {
    immagine: '/public/img/item4.jpg',
    titoloProdotto: 'Secchiello in zinco delicato  ',
    costoDiConsegna: 6.9,
    prezzo: 50,
    spedizioneData: 'Dalle 15:00 di oggi',
  },
];
let i = 0;
populateUser(you[0].isReturning, you[0].nome);
creaProdotto(
  products.length,
  products[i].immagine,
  products[i].titoloProdotto,
  products[i].costoDiConsegna,
  products[i].prezzo,
  products[i].spedizioneData,
);
