// Função criada para formatação do valor criado com auxilio da Luri:
function formatarValor(valor) {
  let partes = valor.toFixed(2).split(".");
  partes[0] = partes[0].replace(/\B(?=(\{3})+(?!\d))/g, ".");
  return partes.join(",");
}

// Solicitar o valor em Wons:
let valorWons = prompt("Digite um valor em Won:");

// Conversão do valor para Reais (com exemplo de cotação dado na aula):
let cotacaoWon = 0.004;
let valorEmReais = valorWons * cotacaoWon;

// Formata o valor chamando a função criada:
let valorFormatado = formatarValor(valorEmReais);

// Exibe o resultado final:
alert(
  "O valor de " + valorWons + " wons " + "é de " + valorFormatado + " reais."
);
