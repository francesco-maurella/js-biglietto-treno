var km = parseInt(prompt('Quanti Km percorrerà il passeggero, durante il viaggio?'));
var age = parseInt(prompt('Quanti anni ha il passeggero?'));

alert('Grazie! Stiamo elaborando la richiesta.');

var cost = km * 0.21;

if (age <= 18) {
  cost = Math.floor(cost - (cost * 20) / 100);
};


if(age >= 65) {
  cost = Math.floor(cost - (cost * 40) / 100);
};


alert('Il prezzo del biglietto è di Euro ' + (cost) + '. Le auguriamo Buon viaggio!');
