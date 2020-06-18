
var calcolaBtn = document.getElementById('calcolaBtn');

calcolaBtn.addEventListener ("click", function(){
  var risultato;
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var operazione = document.getElementById('operazione').value;
  console.log( num1 , num2, operazione);

  if (operazione == "somma") {
    risultato = num1 + num2;
  }
  else if (operazione == "sottrazione") {
    risultato = num1 - num2;
  }
  else if (operazione == "moltiplicazione") {
    risultato = num1 * num2;
  }
  else if (operazione == "divisione") {
    risultato = num1 / num2;
  }
  else {
    risultato = "è necessario selezionare un'operazione perchè venga eseguito il calcolo"
  }
  document.getElementById('risultato').innerHTML = "il risultato dell'operazione è: " + risultato;
});
