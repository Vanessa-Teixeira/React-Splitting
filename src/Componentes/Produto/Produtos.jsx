import React from "react";
import './produtos.css';




export default function ComponenteProdutos(props){

    return(
        

<div class="container-floud">
<div class="col sm 2" >
        
        </div>
        <div class="col">
        <figure className={props.categoria  }> 
        
        <img src={(`./imagens ${props.Imagem}`).default} alt="Imagem de Produtos" width="150" height="150" aling="center"/>  
    
        <p className="nome-prod">
            {props.descricao}
        </p>
        <p className="preco-prod">
            R$ {props.preco}
        </p>
        <p className="precofinal-prod">
            R$ {props.precofinal}
        </p>
        <hr>
        </hr>
    </figure>
    </div>
        </div>
          




)}