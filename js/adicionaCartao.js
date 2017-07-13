
(function () {

    $(".novoCartao").submit(function(event){
      //impede que a pagina recarre
      event.preventDefault();

      //pega o usuario que digitou
      var campoConteudo = $(".novoCartao-conteudo");
      var conteudo = campoConteudo.val().trim().replace(/\n/g,"<br>");

      //cria os elementos do cartão no documento
      if (conteudo){

        ctrlcartao.adicionaCartao(conteudo);
        $(document).trigger("precisaSincronizar");

      }

      //apaga o conteudo da textarea
      campoConteudo.val("")

    })
    //window.adicionaCartao = adicionaCartao

}) ()
