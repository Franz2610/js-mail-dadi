const dadi = [
    '1' , '2' , '3' , '4' , '5' , '6' ,
];

const btn = document.querySelector('button');
btn.addEventListener('click', estrai);

function estrai(){
    var dadoUtente = Math.floor(Math.random() * 6) + 1;
    var dadoComputer = Math.floor(Math.random() * 6) + 1 ;
  console.log(dadoComputer);
  console.log(dadoUtente);

if (dadoUtente > dadoComputer) {
  document.getElementById('estrazione').innerHTML = "Hai vinto. Oggi è il tuo giorno fortunato. " +  ". Complimenti!";
} else if(dadoUtente < dadoComputer){
  document.getElementById('estrazione').innerHTML = "Hai perso. Sarà per la prossima!";
} else if(dadoUtente = dadoComputer){
    document.getElementById('estrazione').innerHTML = "Hai pareggiato col computer.";
}

document.getElementById('numeriEstratti').innerHTML = " Il tuo numero e'  " + dadoUtente + " e il numero  del computer e' "  + ": " + dadoComputer + ".";
}



