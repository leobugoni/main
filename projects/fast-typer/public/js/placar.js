function inserePlacar(){
  let corpoTabela = $(".placar").find("tbody");
  let usuario = "Leonardo";
  let numPalavras = $("#contador-palavras").text();

  let linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-excluir").click(removeLinha);

  corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras) {
  let linha = $("<tr>");
  let colunaUsuario = $("<td>").text(usuario);
  let colunaPalavras = $("<td>").text(palavras);
  let colunaExcluir = $("<td>");

  let link = $("<a>").addClass("botao-excluir").attr("href", "#");
  let icone = $("<i>").addClass("small material-icons").text("delete");

  link.append(icone);

  colunaExcluir.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaExcluir);

  return linha;
}

function removeLinha() {
  event.preventDefault();
  $(this).parent().parent().remove();
}