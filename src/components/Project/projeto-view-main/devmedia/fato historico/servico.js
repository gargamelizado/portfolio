import fatosHistoricos from "./fator.js"

function validarAno(ano){
  if(isNaN(ano)){
   return false
  }else{
    if(ano>= 1920 && ano<=2020){
        return true
    }else{
      return false
    }
  }
}
function servicoBuscarFatorPorAno(ano) {
    
let fatorEscolhido= fatosHistoricos.find(fator=>{
    return fator.Ano == ano
})

    return fatorEscolhido.Fato
}


export  {servicoBuscarFatorPorAno, validarAno}