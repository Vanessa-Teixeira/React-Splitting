import ComponentesProdutos from '../../Componentes/Produto/Produtos.jsx'
import {useState,useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';



export default  function Produtos () {

    
const[produtos, setProdutos] = useState([]);

useEffect( async ()=>{
console.log(""); 
const url = "http://localhost:4000";// dados Json //
const resposta = await fetch(url);
setProdutos(await resposta.json());

console.log(resposta)

}, []);
    



return (

   
    <Container>
        <Row>
        
        {produtos && produtos.map(item =>

        <ComponentesProdutos key={item.idprodutos} categoria ={item.categoria} descricao = {item.descricao} preco ={item.preco}
        precofinal ={item.precofinal} Imagem ={item.Imagem} data_inclusao = {item.data_inclusao} />
        )}
        </Row>
    </Container>


);

}





