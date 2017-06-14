var campo = $(".campo-digitacao");

$(function(){
  $("#botao-salvar-frase").click(insereFraseDesafio);
  $("#botao-salvar-frase").click(atualizaTamanhoFrase);
  $("#botao-salvar-frase").click(inicializaCorretor);
  $("#botao-salvar-tempo").click(insereTempoDesafio);
  $("#botao-salvar-tempo").click(inicializaCronometro);
  $("#botao-salvar-tempo").click(atualizaTamanhoFrase);
  $("#botao-salvar-tempo").click(insereFraseDesafio);
  insereTempoDesafio();
  insereFraseDesafio();
  atualizaTamanhoFrase();
  inicializaContadores();
  reiniciaJogo();
  inicializaCronometro();
  $("#botao-reiniciar").click(reiniciaJogo);
  campo.attr("placeholder", "Insira uma frase e defina o tempo para começar");
});

function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numPalavras  = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase").text();
  $("#tamanho-frase").text(numPalavras);
  //TODO nao altera numero de palavras pra 0 quando vazio
  /*if (tamanhoFrase) {
    $("#tamanho-frase").text("0");
  }*/
}

function insereFraseDesafio(){
  var fraseDesafio = $("#frase-digitar").val();
  $(".frase").text(fraseDesafio);
}
function insereTempoDesafio(){
  var tempoDesafio = $("#tempo-jogo").val();
  $("#tempo-digitacao").text(tempoDesafio);
}

function inicializaContadores() {
  campo.on("input", function() {
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);

  });
}

function inicializaCronometro() {
  var tempoRestante = $("#tempo-jogo").val();
  if(tempoRestante){
  campo.one("focus", function() {
    var cronometroID = setInterval(function() {
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled", true);
        clearInterval(cronometroID);
        campo.val("");
        campo.attr("placeholder", "TEMPO ESGOTADO");
      }
    }, 1000);
  });
  }
}

function inicializaCorretor() {
  var frase = $(".frase").text();
  campo.on("input", function() {
      var digitado = campo.val();
      var comparavel = frase.substr(0 , digitado.length);

      if(digitado == comparavel) {
          campo.addClass("campo-correto");
          campo.removeClass("campo-errado");
      } else {
          campo.addClass("campo-errado");
          campo.removeClass("campo-correto");
      }
  });
}

function reiniciaJogo(){
  campo.attr("disabled" ,false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  inicializaCronometro();
  insereTempoDesafio();
  campo.removeClass("campo-correto");
  campo.removeClass("campo-errado");
  campo.attr("placeholder", "Insira uma frase e defina o tempo para começar");
}