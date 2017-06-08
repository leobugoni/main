var frase = $(".frase").text(); //Create var to receive .text from class .frase 
var numPalavras = frase.split(/\S+/).length -1; //Create var numPalavras what separeted frase in spaces and return the lentght
//console.log(numPalavras); //Print at console the var numPalavras
var tamanhoFrase = $("#numero-palavras"); //Create var tamanhoFrase what receive a id of object call #numero-palavras
tamanhoFrase.text(numPalavras); //Change de .text of var tamanhoFrase to numPalavras

var campo = $(".campo-digitacao");
campo.on("input", function(){
  var conteudo = campo.val();

  var qtdPalavras = conteudo.split(/\S+/).length -1; //Create var numPalavras what separeted frase in spaces and return the lentght
  $("#contador-palavras").text(qtdPalavras);

  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);

});