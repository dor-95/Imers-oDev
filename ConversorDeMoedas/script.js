function ConversorDeMoedas(number) {
  var valorEmDolar = parseFloat(document.getElementById("valor").value);

  var valorConvertido = calculoDeConversao(number, valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  elementoValorConvertido.innerHTML = valorConvertido;
}

function calculoDeConversao(number, valorEmDolar) {
  if (number == 1) {
    var valorConvertido =
      "Conversão para Real: R$ " + (valorEmDolar * 5.15).toFixed(2);
  } else if (number == 2) {
    var valorConvertido =
      "Conversão para Euro: € " + (valorEmDolar * 5.23).toFixed(2);
  } else {
    var valorConvertido =
      "Conversão para Bitcoin: ฿ " + (valorEmDolar / 21241.2).toFixed(7);
  }

  return valorConvertido;
}