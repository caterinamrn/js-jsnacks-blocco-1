var btn = document.getElementById('bottone');

 btn.addEventListener("click", function() {
   var num = prompt("inserire un numero positivo o negativo");

  if (!isNaN(num)) {
    if (num > 0) {
       document.getElementById('colore').className = "verde";
    }
    else if (num < 0) {
      document.getElementById('colore').className = "rosso";
    } else {
      document.getElementById('colore').className = "blu";
    }
  }
});
