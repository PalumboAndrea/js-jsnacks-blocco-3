/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
 */

let list2 = [10, 20, 40, 30, 22, 54, 23, 56];
let list1 = [5, 40, 30, 5];

let plus = [Math.floor(Math.random() * 100)];

console.log(list1.length);
console.log(list2.length);

if (list1.length > list2.length){
    while (list1.length !== list2.length){
        list2.push(plus)
    }
} else {
    while (list1.length !== list2.length){
        list1.push(plus)
    }
}

console.log(list1.length);
console.log(list2.length);
























