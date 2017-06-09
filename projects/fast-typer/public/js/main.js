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




var projeto = $("#projeto");
projeto.on("input",function(){
  console.log("Input Ok")
  $("#nome-projeto").text("rtsda");
  attr("")
});




var esconderDivMenu = $("#botao-expandir");
esconderDivMenu.on("click",function (){
  if($('#opcoes-projeto').is(':visible')){
    $("#opcoes-projeto").hide();  
    console.log("Menu desabilitado com sucesso");
  }else{
    $("#opcoes-projeto").show();  
    console.log("Menu habilitado com sucesso");
  }
});



var personagemPular = $(".botao-pular");
personagemPular.on("click",function(){
  if($('.pular').is(':visible')){
    console.log("Devo estar no chao");
  }else{
    $(".pular").show();
    console.log("Devo estar no ar");
  }
  var tempoPulo = 1;
  var pulo = setInterval(function(){
    tempoPulo--;
    if (tempoPulo == 0) {
      console.log("meu tempo de pulo acabou");
      clearInterval(pulo)
      $(".pular").hide();
    }
  },350);
});






var esconderDivMenu = $("#mostrar-primeiro-menu");
esconderDivMenu.on("click",function (){
  if($('#mostrar-primeiro-submenu').is(':visible')){
    $("#mostrar-primeiro-submenu").hide();  
    console.log("Sub-menus 01 desabilitados");
  }else{
    $("#mostrar-primeiro-submenu").show();  
    console.log("Sub-menus 01 habilitados");
  }
});

var esconderDivMenu = $("#mostrar-segundo-menu");
esconderDivMenu.on("click",function (){
  if($('#mostrar-segundo-submenu').is(':visible')){
    $("#mostrar-segundo-submenu").hide();  
    console.log("Sub-menus 02 desabilitados");
  }else{
    $("#mostrar-segundo-submenu").show();  
    console.log("Sub-menus 02 habilitados");
  }
});











var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function(){
  var cronometroID = setInterval(function(){
    tempoRestante--;
    $("#tempo-digitacao").text(tempoRestante);
      if(tempoRestante < 1){
        campo.attr("disable", true);
        clearInterval(cronometroID);
      }
    console.log(tempoRestante);
  },1000);
});