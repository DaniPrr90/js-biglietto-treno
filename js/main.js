console.log('sono collegato alla pagina');


 
/*1) Definisco una variabile kmNumber - salvo il valore di un prompt all'interno della variabile; 
1a) Trasformo il valore di kmNumber da stringa a numero;
2) Definisco una variabile priceuserAge -   salvo il valore di un prompt all'interno di una variabile;*/

const kmNumber = Number(prompt('inserisci il numero dei km che vuoi percorrere'));
console.log(kmNumber);

/*2b) Trasformo il valore di UserAge da stringa a numero;*/

const userAge=Number(prompt ('Inserisci la tua età'));

/*3) Salvo in una variabile kmPrice il prezzo a km 0.21€ al km;*/

const kmPrice= 0.21;

/*3a) Salvo in una variabile underAge un valore che definisce l'utente minorenne =18;*/
const underAge=18;
/*3b) salvo in una variabile overAge il valore che determina l'età che definisce un utente over - 65;*/
const overAge=65;

//4) salvo una variabile il valore di sconto -20 /in percentiale

underDiscount=20;

//5) salvo in una variabile il valore di sconto -40 /in percentuale

overDiscount=40;

//# Logica di calcolo con condizionali 
//4) Definisco una varibile price e salvo il valore del calcolo kmNumber * price all'interno della variabile;

let price= kmNumber * kmPrice;


/*5) Se utente è minorenne applico condizione (userAge < underAge);
 - price - 20%

 */

 if(userAge <  underAge){
    console.log ('utente minorenne calcolo lo sconto del 20%');

    price= price - (price * (underDiscount) / 100);

 }else if(userAge > overAge){
    console.log ("L'utente ha più di 65 anni calcolo sconto 40%");
    price= price - (price * (overDiscount) / 100);
 } 





 //# output

 const result = `Il prezzo finale è ${price.toFixed(2)}€`;

 console.log(result);



 /*altrimenti se utente over 65 applico condizione (userAge > di overAge);
  - price - 40%


!) Restituisco in console / allert / dom informazione di prezzo in formato umano (price); */
