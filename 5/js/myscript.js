/*
Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
*/

function getRandomNumber (firstNumber, secondNumber){
    const randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
    return randomNumber;
}

let variable = getRandomNumber(parseInt(prompt('Inserisci un numero')), parseInt(prompt('Inserisci un altro numero')));
console.log(variable);



























