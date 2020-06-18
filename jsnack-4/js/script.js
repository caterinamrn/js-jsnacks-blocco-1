var generaBtn = document.getElementById('btngeneratore')

generaBtn.addEventListener ("click", function(){
  var num = Math.floor(Math.random() * 10 + 1);
  console.log(num);
  if (num % 2 == 0) {
    document.getElementById('numero').className="dispari";
  }
  else {
    document.getElementById('numero').className="pari";
  }
});
