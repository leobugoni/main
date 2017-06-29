let campo = $(".campo-digitacao");

$(function(){
  $("#botao-salvar").click(iniciaJogo);
  inicializaContadores();
  $("#botao-reiniciar").click(reiniciaJogo);
  campo.attr("placeholder", "Insira uma frase e defina o tempo para começar");
});

function atualizaTamanhoFrase() {
  let frase = $(".frase").text();
  let numPalavras  = frase.split(" ").length;
  let tamanhoFrase = $("#tamanho-frase").text();
  $("#tamanho-frase").text(numPalavras);
  //TODO nao altera numero de palavras pra 0 quando vazio
  /*if (tamanhoFrase) {
    $("#tamanho-frase").text("0");
  }*/
}

function insereFraseDesafio(){
  let fraseDesafio = $("#frase-digitar").val();
  $(".frase").text(fraseDesafio);
}
function insereTempoDesafio(){
  let tempoDesafio = $("#tempo-jogo").val();
  $("#tempo-digitacao").text(tempoDesafio);
}

function inicializaContadores() {
  campo.on("input", function() {
    let conteudo = campo.val();

    let qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    let qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);

  });
}

function inicializaCronometro() {
  let tempoRestante = $("#tempo-jogo").val();
  if(tempoRestante){
  campo.one("focus", function() {
    inicializaCorretor();
    let cronometroID = setInterval(function() {
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        clearInterval(cronometroID);
        finalizaJogo();
      }
    }, 1000);

  });
  }
}


function inicializaCorretor() {
  let frase = $(".frase").text();
  campo.on("input", function() {
      let digitado = campo.val();
      let comparavel = frase.substr(0 , digitado.length);

      if(digitado == comparavel) {
          campo.addClass("campo-correto");
          campo.removeClass("campo-errado");
      } else {
          campo.addClass("campo-errado");
          campo.removeClass("campo-correto");
      }
  });
}

function iniciaJogo(){
  insereFraseDesafio();
  insereTempoDesafio();
  atualizaTamanhoFrase();
  insereTempoDesafio();
  inicializaContadores();
  inicializaCronometro();
  campo.val("");
  campo.attr("disabled" ,false);
  campo.attr("placeholder", "Insira uma frase e defina o tempo para começar");
}

function reiniciaJogo(){
  inicializaCronometro();
  insereTempoDesafio();
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  campo.val("");
  campo.attr("disabled" ,false);
  campo.removeClass("campo-correto");
  campo.removeClass("campo-errado");
  campo.attr("placeholder", "Insira uma frase e defina o tempo para começar");
}

function pausaJogo() {
  //TODO fazer função para pausar o jogo, calcular tempo e ppm
}

function finalizaJogo(){
  campo.attr("disabled", true);
  campo.val("");
  campo.attr("placeholder", "TEMPO ESGOTADO");
  inserePlacar();
}

let titulo = $("LOCAL DO TITULO NOVO").text();
$("#titulo").text(titulo);