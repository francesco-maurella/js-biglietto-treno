var km = parseInt(prompt('Quanti Km percorrerà il passeggero, durante il viaggio?'));
var age = parseInt(prompt('Quanti anni ha il passeggero?'));

if (isNaN(km) || isNaN(age)) {
  alert('Ti preghiamo di utilizzare soltanto caratteri numerici.')
} else {

  alert('Grazie! Stiamo elaborando la richiesta.');

  var cost = Math.ceil(km * 0.21);

  if (age <= 18) {
    cost = Math.floor(cost - (cost * 20) / 100);
  };

  if(age >= 65) {
    cost = Math.floor(cost - (cost * 40) / 100);
  };

  var result = document.getElementById('result')

  result.innerHTML = 'Il prezzo del biglietto è di Euro <strong>' + (cost) + ',00</strong>. Le auguriamo Buon viaggio!';

}
