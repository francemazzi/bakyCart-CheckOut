import { populateUser } from './cartItem';

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
const products: {
  immagine: string;
  titoloProdotto: string;
  costoDiConsegna: number;
  prezzo: number;
  spedizioneData: string;
}[] = [
  {
    immagine:
      'img/CoffeBreak_Roscioli_salato_Cosaporto-e1593435853690-300x300.png',
    titoloProdotto:
      'TRAMEZZINI Prosciutto di Praga e mozzarella di Bufala + maionese (x1), Prosciutto crudo e mozzarella di Bufala + maionese (x1) MARITOZZI SALATI Baccalà mantecato e lamponi (x1), Mortadella, ricotta e granella di pistacchi (x1)',
    costoDiConsegna: 6.9,
    prezzo: 39,
    spedizioneData: 'Dalle 08:30 del 19-10-2022',
  },
];
populateUser(you[0].isReturning, you[0].nome);
