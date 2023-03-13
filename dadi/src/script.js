/* 

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/

var nomeUtente = prompt("Inserisci il tuo nome utente per giocare: ");

var dadoUtente =prompt("Inserisci il tuo numero fortunato ");
var dadoComputer = Math.floor(Math.random() * 6) + 1 ;


if (dadoUtente > dadoComputer) {
  document.getElementById('estrazione').innerHTML = "Hai vinto. oggi è il tuo giorno fortunato. " + nomeUtente + ". Complimenti!";
} else if(dadoUtente < dadoComputer){
  document.getElementById('estrazione').innerHTML = "Hai perso. Sarà per la prossima!";
} else if(dadoUtente = dadoComputer){
    document.getElementById('estrazione').innerHTML = "Hai pareggiato col computer.";
}

document.getElementById('numeriEstratti').innerHTML = "Sig. " + nomeUtente + " " + " il tuo numero e'  " + dadoUtente + " e il numero  del computer e' "  + ": " + dadoComputer + ".";