var listaInvitati = ["paola", "chiara", "luca","marco","giovanni","luisa","filippo","alvise"];
var nome = prompt("Inserire il proprio nome");
var presenza = false;

for (var i = 0; i < listaInvitati.length && presenza == false; i++) {
  if (nome == listaInvitati[i]) {
    presenza = true;
  }
  else {
    presenza = false;
  }
}
console.log(presenza);
if (presenza==true) {
  console.log("Puoi entrare alla festa")
} else {
  console.log("Non puoi entrare");
}
