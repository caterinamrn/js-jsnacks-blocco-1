
// parseInt prende il valore numerico e non la stringa, utile per firefox che considera solo la prima cifra per il confronto

var num1 = prompt("inserire un numero");
var num2 = prompt("inserire un secondo numero");


if ( !isNaN(num1) && !isNaN(num2) ) {
  
  num1 = parseInt(num1);
  num2 = parseInt (num2);

  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else {
    console.log("uguali");
  }
}
