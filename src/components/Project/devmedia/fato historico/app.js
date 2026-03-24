import express from 'express'
import {servicoBuscarFatorPorAno ,validarAno}from './servico.js'
const app = express()

app.get('/', (req,res)=>{
    let anoFator= req.query.ano
    /* var fator = servicoBuscarFatorPorAno(anoFator) */
    if(validarAno(anoFator)){
        var fator = servicoBuscarFatorPorAno(anoFator)
        res.status(200).json({fator: fator})
    }else{
        res.status(404).json({erro:'Fator não encontrado para o ano informado'})
    }


    /* res.json({ano:fator}) */
})



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
});