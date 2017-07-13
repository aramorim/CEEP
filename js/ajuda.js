
(function(){
  $("#ajuda").click(function(){

  $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes", function(res){
    console.log(res);
    res.instrucoes.forEach(function(instrucao){
      console.log(instrucao);
      ctrlcartao.adicionaCartao(instrucao.conteudo, instrucao.cor);
    })
  }) //fim da function "#ajuda"

})
})()
