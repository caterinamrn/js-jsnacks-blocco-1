// ciclo for
// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   somma += parseInt(prompt("Inserisci un numero"));
//
// }
// console.log(somma);
// ciclo while
var somma =0;
var i = 0;
var num =[];
while (i < 5) {
  num[i]= parseInt(prompt("Inserisci un numero"));
  somma += num[i];
  i++;
}
console.log(num);
console.log(somma);
