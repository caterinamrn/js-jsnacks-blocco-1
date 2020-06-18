var lancioBtn = document.getElementById('lanciobtn');
var testa = document.getElementById('testa');
var croce = document.getElementById('croce');



 lancioBtn.addEventListener("click", function(){
   testa.className = "hidden";
   croce.className = "hidden";
   var num;
   num = Math.floor(Math.random()*10);
   console.log(num);
   if (!(num % 2)) {
    console.log("testa");
    testa.className = "display";
   }
   else {
    console.log("croce");
    croce.className = "display";
   }
 });
