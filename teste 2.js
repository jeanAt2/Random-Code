var valorInicial = 0;
var valorFinal = 22;
var digito = 0;
var contador = 0;
var responta = 0;

for (let index = 0; valorInicial <= valorFinal; index++) {
  if (digito == valorInicial) {
    responta = index;
  } else {
    contador++;
    valorInicial++;
  }
}
console.log(resposta);
