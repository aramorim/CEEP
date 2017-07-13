(function() {
var btns  = document.querySelectorAll(".opcoesDoCartao-remove")

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",removecartao)
}

function removecartao(){
  var cartao = document.querySelector("#cartao_" + this.dataset.ref);
//console.log(cartaoatual)
  cartao.classList.add("cartao--some");

  setTimeout(function() {
    cartao.remove();
    $(document).trigger("precisaSincronizar");
  },800);
}
window.removecartao = removecartao;
}) ()
