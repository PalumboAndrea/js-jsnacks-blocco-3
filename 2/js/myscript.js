/*
Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
 */

const list = [0];

let requestedNumber = parseInt(prompt('Inserisci un numero'));

let sum = list[0] + requestedNumber;

while (sum < 50) {
    requestedNumber = parseInt(prompt('Inserisci un numero'));
    sum = sum + requestedNumber;
}

console.log(sum)























