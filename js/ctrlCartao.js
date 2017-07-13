var ctrlcartao = (function(){
    //criando o contador
    var contador = $(".cartao").length;
    function adicionaCartao(conteudo){
      //soma um no contador
      contador++
      var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
                                     .addClass("opcoesDoCartao-opcao")
                                     .attr('data-ref', contador)
                                     .text("Remover")
                                     .click(removecartao);

     var opcoes = $("<div>").addClass("opcoesDoCartao").append(botaoRemove);

     var tipoCartao = decideTipoCartao(conteudo);

     var conteudoTag = $("<p>").addClass("cartao-conteudo")
                               .append(conteudo);

     //cria um novo cartao e passa todas as variaveis dele.....
     $("<div>").attr('id', 'cartao_' + contador)
               .addClass("cartao")
               .addClass(tipoCartao)
               .append(opcoes)
               .append(conteudoTag)
               .prependTo(".mural");
    }

    function decideTipoCartao(conteudo){
      var quebras = conteudo.split("<br>").length;
      var totalDeLetras = conteudo.replace(/<br>/g, " ").length;

      var ultimoMaior = " ";
      conteudo.replace(/<br>/g, " ")
              .split(" ")
              .forEach(function(palavra){
                if (palavra.length > ultimoMaior.length) {
                  ultimoMaior = palavra
                }
              })
      var tamMaior = ultimoMaior.length;

      //no minimo todo cartao tem o texto menor
      var tipoCartao = "cartao--textoPequeno";

      if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
        tipoCartao = "cartao--textoGrande";
      } else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
        tipoCartao = "cartao--textoMedio";
      }
      return tipoCartao;
    }  //fim function decideTipoCartao

    return {
      adicionaCartao: adicionaCartao
    }
})()
