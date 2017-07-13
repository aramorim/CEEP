var usuario = "amorimantonio";
$.getJSON(
  "https://ceep.herokuapp.com/cartoes/carregar?callback=?",
  {usuario: usuario},
  function(res){
    var cartoes = res.cartoes;
    console.log(cartoes.length + " carregados em " + res.usuario);
    cartoes.forEach(function(cartao){
    ctrlcartao.adicionaCartao(cartao.conteudo);
    });
  }
);

$(document).on("precisaSincronizar", function(){
  $("#sync").removeClass("botaoSync--sincronizado");
  $("#sync").addClass("botaoSync--esperando");

 var cartoes = [];

 $(".cartao").each(function(){
   var cartao = {};
   cartao.conteudo = $(this).find(".cartao-conteudo").html();
   cartoes.push(cartao);
 });

 //escolha o usuario
 var mural = {
   usuario: usuario   //"seu.email@exeplo.com"
  ,cartoes: cartoes
 }

 $.ajax({
   url: "https://ceep.herokuapp.com/cartoes/salvar"
  ,method: "POST"
  ,data: mural
  ,success: function(res){
    $("#sync").addClass("botaoSync--sincronizado");
    console.log(res.quantidade + " cartoes salvos em " + res.usuario);
  }

  ,error:function(){
    $("#sync").addClass("botaoSync--deuRuim")
    console.log("Nao foi possivel salvar o mural");
  }
  ,complete: function(){
    $("#sync").removeClass("botaoSync--esperando");

  }
});

})

$("#sync").click(function(){
  $(document).trigger("precisaSincronizar");
});
