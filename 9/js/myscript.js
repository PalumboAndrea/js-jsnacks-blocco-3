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

function getRandomNumber (min, max){
    const random = Math.floor(Math.random() * (max - min +1) + min);
    return random;
}

function difficultyLevel (level, whereToPut){
    for (i=0; i<level; i++){
        randomNumber.classList.add('my-4')
        whereToPut.append(randomNumber);
        randomNumber.innerHTML += (getRandomNumber(1, 100)) + ' ';
    }
}

function disappear (a){
    randomNumber.innerHTML = '';
    let a = prompt('Inserisci i numeri che hai visto in ordine');
    return a;
}

startEasy.addEventListener('click', function (){
    disappear();
    difficultyLevel(5, numberContainerEasy);
    setTimeout (disappear, 5000, userNumber);

})

startMiddle.addEventListener('click', function (){
    disappear();
    difficultyLevel(10, numberContainerMiddle);
    setTimeout (disappear, 5000);
})

startHard.addEventListener('click', function (){
    disappear();
    difficultyLevel(15, numberContainerHard);
    setTimeout (disappear, 5000);
})


































