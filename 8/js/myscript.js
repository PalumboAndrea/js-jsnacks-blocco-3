/**
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 */


 const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

 const endingList = [];


 console.log(Math.max(...startingList));
 console.log(Math.min(...startingList));




 for ( let i= 0; i < 10; i++){
    endingList.push(Math.floor(Math.random() * (Math.max(...startingList) - Math.min(...startingList) + 1) + Math.min(...startingList)));
 }

 console.log(endingList);



























