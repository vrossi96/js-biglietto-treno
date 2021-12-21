console.log('JS OK');

/* 
TRACCIA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/* 
  1- chiedere i chilometri
  2- chiedere l'età
  3- aggiungere prezzo per km, 0.21 per km
  4- aggiungere sconti
    4a- sconto 20% minorenni
    4b- sconto 40% over 65
  5- output prezzo con massimo due decimali
*/

// * 1 Chilometri
const userKm = parseInt(prompt('Inserire i chilometri per il viaggio', '21'));
console.log('userKm: ', userKm);

// * 2 Età
const userAge = parseInt(prompt("Inserire l'età", '18'));
console.log('userAge: ', userAge);

// * 3 Prezzo per km
const kmPrice = 0.21;
console.log('kmPrice: ', kmPrice);


// Risultato prezzo - con massimo due decimali
const totalCost = Math.round((userKm * kmPrice) * 100) / 100;
console.log('totalCost: ', totalCost);

// Calcolo della percentuale del costo della tratta
const discount = totalCost / 100;
console.log('discount: ', discount);


// * 4-5 Applicazione Sconti se necessario, calcolo prezzo finale
let finalPrice = totalCost;
let appliedDiscount = 'Nessuno sconto';

// Aggiunta validazione
if ((!isNaN(userAge) && !isNaN(userKm)) && (userAge >= 0 && userAge < 130) && (userKm > 0)) {
  if (userAge < 18) {
    /* Con massimo due decimali, il biglietto è calcolato togliendo lo sconto corretto in base al prezzo iniziale del biglietto */
    finalPrice =  Math.round((totalCost - (discount * 20)) * 100) / 100;
    appliedDiscount = '20%, under 18'
  } else if (userAge > 65) {
    finalPrice =  Math.round((totalCost - (discount * 40)) * 100) / 100;
    appliedDiscount = '40%, over 65'
  }
} else {
  alert('Età o KM errati');
}

console.log('finalPrice: ', finalPrice);
console.log('appliedDiscount: ', appliedDiscount);

// Mostra risultati in pagina
const documentKm = document.getElementById('km');
const documentAge = document.getElementById('age');
const showDiscount = document.getElementById('applied-discount');
const documentPrice = document.getElementById('final-price');


documentKm.innerText = userKm;
documentAge.innerText = userAge;
showDiscount.innerHTML = `${appliedDiscount} a ${totalCost}&euro;`;
documentPrice.innerHTML = `${finalPrice}&euro;`;