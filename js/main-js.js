"use strict"

/*
1. Chiedere all'utente i km da percorre, salvarlo in una variabile e trasformarlo in numero.
*/

const elementKm=parseInt(prompt("inserire i km da percorrere")); 

console.log( "I kilometri sono:" , elementKm , "km");

/*
2. Chiedere all'utente l'età, salvarlo in una variabile e trasformarlo in numero.
*/

const elementEta=parseInt(prompt("inserire la tua età"));


console.log("Età: ", elementEta);


/* 3. Calcolare il prezzo, kilometri inseriti * 0,21€.
    I prezzi finali dovranno essere con massimo due decimali, ES. 10,99€

       -- Se l'età è inferiore a 18 anni devo applichiamo lo sconto del 20%.

       -- Altrimenti Se l'età è superiore di 65 anni devo applichiamo lo sconto del 40%.

       -- Altrimenti non si applica lo sconto.*/


const elementSomma=(elementKm * 0.21);


if(elementEta < 18) {

    const elementSomma= ((elementKm * 0.21) * 0.8);

    console.log("Somma con sconto 20% ", elementSomma, "€");

}

else if(elementEta > 65){

    const elementSomma= ((elementKm * 0.21) * 0.6);

    console.log("Somma con sconto 40% ", elementSomma, "€");

}

else{
    console.log("Somma", elementSomma, "€");
}









console.log("FINE")