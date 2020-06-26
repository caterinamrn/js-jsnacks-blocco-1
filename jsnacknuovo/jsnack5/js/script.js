var array = [];
for (var i = 0; i < 6; i++) {
 var num = prompt("Inserisci un numero");
 console.log(num);
  if (num%2) {
    array.push(num);
  }
}
console.log(array);
