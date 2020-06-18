var creaBtn = document.getElementById('crea');

creaBtn.addEventListener("click", function(){
  var nome = document.getElementById('nome').value;
  var cognome = document.getElementById('cognome').value;

  var nomcogn = nome + " " + cognome;
  console.log(nomcogn);
});
