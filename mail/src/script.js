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

// controllo array
var email = ["franz@fr.com", "class92@boolean.com", "cristiano@ronaldo.com", "forzanapoli@gmail.it"];

var utente = prompt("Per proseguire inserisci l'email valida");


console.log("La mail è " + utente);

var emailGiusta=0;

// 2. Confrontarla con le altre email

for (var i = 0; i < email.length; i++) {
  if (utente == email[i]) {
    console.log("Ok")
    emailGiusta = 1;
  }
}

//3. Stampare un messaggio di sull'esito

if (emailGiusta == 1) {
  console.log("Puoi entrare");
  document.getElementById("messaggio").innerHTML = "Accesso Garantito"
  document.getElementById("disclaimer").innerHTML = "La tua mail è giusta e puoi proseguire con la navigazione."
} else {
  console.log("Non puoi entrare");
  document.getElementById("messaggio").innerHTML = "Non puoi entrare"
  document.getElementById("disclaimer").innerHTML = "La mail che hai inserito è errata, ricarica la pagina e prova con un altro indirizzo."
}


