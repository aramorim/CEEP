
var mural = document.querySelector(".mural")
var btn  = document.querySelector("#mudalayout")

function mudalayout(){

  mural.classList.toggle("mural--linha")

  if(mural.classList.contains("mural--linha")) {
    btn.textContent = "bloco"
  } else {
    btn.textContent = 'linha'
  }

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
}
