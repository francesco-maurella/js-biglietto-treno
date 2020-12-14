alert('ticket.train ti da il Benvenuto!\nCompila i campi seguenti per conoscere la tariffa del tuo viaggio.')
var km = parseInt(prompt('Quanti Km percorrerà il passeggero?'));
var age = parseInt(prompt('Quanti anni ha il passeggero?'));

if (isNaN(km) || isNaN(age)) {
  alert('Ti preghiamo di utilizzare soltanto caratteri numerici.');
  location.reload();
} else {

  alert('Grazie! Stiamo elaborando la richiesta.');

  var cost = (km * 0.21);

  if (age <= 18) {
    cost = cost - ((cost * 20) / 100);
  };

  if(age >= 65) {
    cost = cost - ((cost * 40) / 100);
  };

  var result = document.getElementById('result');

  result.innerHTML = 'Il prezzo del biglietto è di <strong>Euro ' + (cost).toFixed(2) + '</strong>. Le auguriamo Buon viaggio!';
};
