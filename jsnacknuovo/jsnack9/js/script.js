var somma=0;
for (var i = 0; i < 10; i++) {
  num = parseInt(prompt("Inserisci un numero"));
  console.log(num);
  somma += num;
}
var media = somma / 10;
console.log(somma,media);
