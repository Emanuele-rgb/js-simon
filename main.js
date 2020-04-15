var numeri = [];
var numeriUtente = [];
var punteggio = 0;

for (var i = 0; i < 5; i++) {
  var randomNumber = Math.floor(Math.random() * 100)

  numeri.push(randomNumber);
  alert(numeri);
}

setTimeout(function () {
  for (var i = 0; i < 5; i++){
    var numeroUtente = parseInt(prompt('Inserisci numero visto precedentemente'))

    if (numeri.includes(numeroUtente) == true) {
      punteggio = punteggio + 1;
    console.log(numeroUtente);

    }
    else {
      punteggio = punteggio + 0;
    }
  }
  console.log('Il tuo punteggio è ', punteggio);
}, 3000);



console.log(numeri);
