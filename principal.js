
var mural = document.querySelector(".mural")
var btn  = document.querySelector("#mudalayout")

function mudalayout(){

  mural.classList.toggle("mural--linha")

  if(mural.classList.contains("mural--linha")) {
    btn.textContent = "Bloco"
  } else {
    btn.textContent = 'Linha'
  }
}






// btn  = document.querySelector(".btnremove")


// var btns  = document.querySelectorAll(".opcoesDoCartao-remove")
//
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click",removecartao)
// }
//
// function removecartao(){
//   var cartao = document.querySelector("#cartao_" + this.dataset.ref);
// //console.log(cartaoatual)
//   cartao.classList.add("cartao--some");
//
//   setTimeout(function() {
//     cartao.remove();
//   },800);
// }



// console.log(btn) usado para depurar e se passa aqui

// segunda montagem
  // if(mural.classList.contains("mural--linha")) {
  //   mural.classList.remove('mural--linha')
  //   btn.textContent = "bloco"
  // } else {
  //   mural.classList.add('mural--linha')
  //   btn.textContent = 'linha'
  // }

 // primeira montagem
  // document.querySelector(".mural").classList.add("mural--linha")

  // document.querySelector("#mudalayout").textContent = "bloco"
  // document.querySelector(".mural").style.flexDirection="column"
