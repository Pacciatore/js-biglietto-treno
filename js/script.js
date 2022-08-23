// Dichiarazione costanti
const costoPerKm = 0.21;
const scontoMaggiorenni = 0.2;
const scontoSenior = 0.4;
const maggioreEta = 18;
const seniorEta = 65;

// Dichiarazione variabili
let kmDaPercorrere;
let etaPasseggero;

let prezzoBiglietto;

// Inizio istruzioni

// Richiesta km da percorrere
kmDaPercorrere = parseFloat(prompt('Inserire numero di kilometri che si vuole percorrere:'));
console.log('kmDaPercorrere ' + kmDaPercorrere);

// Richiesta età del passegero
etaPasseggero = parseFloat(prompt('Inserire età passeggero:'));
console.log('etaPassegero ' + etaPasseggero);

// Calcolo del costo del biglietto
prezzoBiglietto = costoPerKm * kmDaPercorrere;
console.log('prezzoBiglietto ' + prezzoBiglietto);

// TODO E se viene inserito un NaN?

// Se il passeggero è maggiorenne controlli se è senior ed applica gli sconti di conseguenza,
// Altrimenti stampi il prezzo del biglietto pieno
if (etaPasseggero >= maggioreEta) {

    if (etaPasseggero >= seniorEta) {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * scontoSenior);
        alert('Il prezzo del biglietto è ' + prezzoBiglietto.toFixed(2) + '€, sconto per gli over 65 applicato.')
    } else {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * scontoMaggiorenni);
        alert('Il prezzo del biglietto è ' + prezzoBiglietto.toFixed(2) + '€, sconto per i maggiorenni applicato.')
    }

} else {
    alert('Il prezzo del biglietto è ' + prezzoBiglietto.toFixed(2) + '€, senza sconti applicati.')
}