let contribuicaoINSSMensal = 0;
let contribuicaoINSSAnual = 0;
let quantidadePessoasNecessarias = 0;

var s = 12230.5;
console.log(s);

if (s <= 1045) {
  contribuicaoINSSMensal = s * 0.075;
} else if (s >= 1045.01 && s <= 2089.6) {
  contribuicaoINSSMensal = s * 0.09;
} else if (s >= 2089.61 && s <= 3134.04) {
  contribuicaoINSSMensal = s * 0.12;
} else if (s >= 3134.41 && s <= 6101.06) {
  contribuicaoINSSMensal = s * 0.14;
} else {
  x = 6101.06;
  contribuicaoINSSMensal = x * 0.14;
}
contribuicaoINSSAnual = contribuicaoINSSMensal * 13.3;

quantidadePessoasNecessarias = s / contribuicaoINSSMensal;

console.log(
  contribuicaoINSSMensal.toFixed(2),
  contribuicaoINSSAnual.toFixed(2),
  quantidadePessoasNecessarias.toFixed(2)
);
