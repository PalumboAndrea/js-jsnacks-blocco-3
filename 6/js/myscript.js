/*
Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
*/





function getSumOfArrayElements(array){

    let sum = 0;
    
    for (i=0; i<array.length; i++){

        let castedElement = parseInt(array[i], 10);

        if ( !Number.isNaN(castedElement)){
            sum = sum + castedElement;
        }
    }

    return sum;
    
}

const lista = [10, 20, 6, 12, 30, 'ciao', 22];

console.log(getSumOfArrayElements(lista));





























