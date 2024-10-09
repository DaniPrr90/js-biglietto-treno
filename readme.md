# calcolo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Create un file README.md e provate prima a scrivere il processo per la risoluzione del problema come visto in classe.

Dopo trasformate il vostro linguaggio formale in js.

----------------------------------------------------------------
# definizione imput, variabili visibili al programma
1) Definisco una variabile kmNumber - salvo il valore di un prompt all'interno della variabile;
1a) Trasformo il valore di kmNumber da stringa a numero;
2) Definisco una variabile priceuserAge -   salvo il valore di un prompt all'interno di una variabile;
2b) Trasformo il valore di UserAge da stringa a numero;
3) Salvo in una variabile kmPrice il prezzo a km 0.21€ al km;
3a) Salvo in una variabile underAge un valore che definisce l'utente minorenne =18;
3b) salvo in una variabile overAge il valore che determina l'età che definisce un utente over - 65;
4) salvo una variabile il valore di sconto -20 /in percentiale
5) salvo in una variabile il valore di sconto -40 /in percentuale


# Logica di calcolo con condizionali 

4) Definisco una varibile price e salvo il valore del calcolo kmNumber * price all'interno della variabile;
5) Se utente è minorenne applico condizione (userAge < underAge);
 - price - 20%
 altrimenti se utente over 65 applico condizione (userAge > di overAge);
  - price - 40%
# output

!) Restituisco in console / allert / dom informazione di prezzo in formato umano (price);

