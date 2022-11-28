/*
Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 */

const lista1 = ['a', 'b', 'c', 'd', 'e', 'd'];

const lista2 = [1, 2, 3, 4, 5, 6, 7];

let lista3 = [];

let i = 0;

while (lista3.length !== (lista1.length * 2)){
    lista3.push(lista1[i]);
    lista3.push(lista2[i]);
    i = i+1;
}

console.log(lista3);
























