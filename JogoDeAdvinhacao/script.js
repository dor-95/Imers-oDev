var numeroSecreto;
var tentativasDisponiveis;

document.addEventListener("DOMContentLoaded", () => {
  inicializaJogo();
  tentativas();
});

function inicializaJogo() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativasDisponiveis = 4;
  console.log(numeroSecreto);
}

function reinicializaJogo() {
  setTimeout(function () {
    window.location.reload(false);
  }, 3000);
}

function tentativas() {
  tentativasDisponiveis--;
  var numeroTentativas = document.getElementById("tentativas");
  numeroTentativas.innerHTML = "Número de Tentativas: " + tentativasDisponiveis;
}

function chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativasDisponiveis > 1) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou!";
      reinicializaJogo();
    } else if (chute < 0 || chute > 10) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
      dicaNumeroSecreto(chute, elementoResultado);
      tentativas();
    }
  } else if (tentativasDisponiveis == 1) {
    tentativas();
    elementoResultado.innerHTML =
      "Game over, o número secreto é " + numeroSecreto;
    reinicializaJogo();
  }
}

function dicaNumeroSecreto(chute, elementoResultado) {
  if (numeroSecreto > chute) {
    elementoResultado.innerHTML =
      "Você Errou! O número secreto é MAIOR que " + chute;
  } else {
    elementoResultado.innerHTML =
      "Você Errou! O número secreto é MENOR que " + chute;
  }
}

/*Desafios

Colocar um numero de tentativas (3 tentativas);
Na mensagem de erro, mostre, se o numero e maior ou menor que o numero secreto;
Diferença entre == e ===;
Scuba Dev
*/