var num = prompt("Inserire un numero di 4 cifre");
var somma = 0;
console.log(num);
for (var i = 0; i < num.length; i++) {
  somma += parseInt(num[i]);
}
console.log(somma);
