
//criando o contador
var contador = $(".cartao").length;

$(".novoCartao").submit(function(event){
  //impede que a pagina recarre
  event.preventDefault();

  //pega o usuario que digitou
  var campoConteudo = $(".novoCartao-conteudo");
  var conteudo = campoConteudo.val().trim();

  //cria os elementos do cartão no documento
  if (conteudo){

    //soma um no contador
    contador++
    var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
                                  .attr('data-ref', contador)
                                 .text("Remover")
                                 .click(removecartao);

   var opcoes = $("<div>").addClass("opcoesDoCartao").append(botaoRemove);
                                 // //cria o atributo data-ref no botaoRemove

   var conteudoTag = $("<p>").addClass("cartao-conteudo")
                             .append(conteudo);

   //acrescenta o append para colocar a div opcoes no cartao
   $("<div>").addClass("cartao")
             .attr('id', 'cartao_' + contador)
             .append(opcoes)
             .append(conteudoTag)
             .prependTo(".mural");


    // var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
    //                                .addClass("cartao")
    //                                .append(opcoes)
    //                                .append(conteudoTag)
    //                                .prependTo(".mural");
    //

    //
    // $('<div>').addClass("cartao")
    //         .append(conteudoTag)
    //         .prependTo(".mural");
    //
    // //cria o botão de remover

    //
    // var opcoes = $("<div>") = $("<p>").addClass("cartao-conteudo")
    //                           .append(botaoRemove);
    //


  }

  //apaga o conteudo da textarea
  campoConteudo.val("")

})
