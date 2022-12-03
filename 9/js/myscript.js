/*
Visualizzare in pagina 5 numeri casuali.
da li parte un timer di 30 secondi.
dopo 30 secondi i numeri scopaiono e l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente tramite prompt.
dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati indovinati
 */


let container = document.querySelector('.container');

const startEasy = document.getElementById('start-easy');
const startMiddle = document.getElementById('start-middle');
const startHard = document.getElementById('start-hard');

let numberContainerEasy = document.querySelector('.number-container-easy');
let numberContainerMiddle = document.querySelector('.number-container-middle');
let numberContainerHard = document.querySelector('.number-container-hard');

let randomNumber = document.createElement('div');

let userNumber;

let level;

let computerNumberChoice = [];

let userNumberChoice = [];

let winOrNot = document.getElementById('win-or-not');

function getRandomNumber (min, max, array){
    const random = Math.floor(Math.random() * (max - min +1) + min);
    array.push(random);
    return random;
}

function difficultyLevel (level, whereToPut){
    for (i=0; i<level; i++){
        randomNumber.classList.add('my-4')
        whereToPut.append(randomNumber);
        randomNumber.innerHTML += (getRandomNumber(1, 100, computerNumberChoice)) + ' ';
    }
}

function disappear (){
    randomNumber.innerHTML = '';
}

function askNumber (level, array1, array2){

    for (i=0; i<level; i++){
        const userNumber = parseInt(prompt('Inserire'), 10);
        array1.push(userNumber);
    }
    
    let win;
    for (i=0; i<level; i++){
        if (array1[i] == array2[i]){
            win = 1;
        } else {
            win = 0;
        }   
    }
    
    if (win == 1){
        let youWon = document.createElement('h1');
        winOrNot.append(youWon);
        youWon.innerHTML = 'HAI VINTO!';
    } else {
        let youWon = document.createElement('h1');
        winOrNot.append(youWon);
        youWon.innerHTML = 'HAI PERSO!';
    }

    randomNumber.innerHTML = 'I tuoi numeri: ' + userNumberChoice + ' I numeri del computer: ' + computerNumberChoice;

}

startEasy.addEventListener('click', function (){
    numberContainerEasy.innerHTML = '';
    winOrNot.innerHTML = '';
    level = 5;
    disappear();
    difficultyLevel(level, numberContainerEasy);
    setTimeout (disappear, 5000);
    setTimeout (askNumber, 5100, level, userNumberChoice, computerNumberChoice);
})

startMiddle.addEventListener('click', function (){
    numberContainerEasy.innerHTML = '';
    winOrNot.innerHTML = '';
    level = 10;
    disappear();
    difficultyLevel(level, numberContainerMiddle);
    setTimeout (disappear, 5000);
    setTimeout (askNumber, 5100, level, userNumberChoice, computerNumberChoice);
})

startHard.addEventListener('click', function (){
    numberContainerEasy.innerHTML = '';
    winOrNot.innerHTML = '';
    level = 15;
    disappear();
    difficultyLevel(level, numberContainerHard);
    setTimeout (disappear, 5000);
    setTimeout (askNumber, 5100, level, userNumberChoice, computerNumberChoice);
})


































