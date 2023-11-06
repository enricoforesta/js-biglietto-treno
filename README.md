# Calcolare il prezzo del biglietto

## Descrizione
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



## Logica

1. Chiedere all'utente i km da percorre e salvarlo in una variabile e trasformarlo in numero.

2. Chiedere all'utente l'età e salvarlo in una variabile e trasformarlo in numero.

3. Calcolare il prezzo, kilometri inseriti * 0,21€.

       -- Se l'età è inferiore a 18 anni devo applichiamo lo sconto del 20%.

       -- Altrimenti Se l'età è superiore di 65 anni devo applichiamo lo sconto del 40%.

       -- Altrimenti non si applica lo sconto.

4. Il prezzo finale dovrà essere con massimo due decimali, ES. 10,99€



