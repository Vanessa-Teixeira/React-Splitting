import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from './imagens/22.png';
import imagem2 from './imagens/23.png';
import imagem3 from './imagens/24.png'
//import './home.css';  


export default  function Slogan () {

return (
  <div className="Container"> 
  <div>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagem2}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagem1}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagem3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
  
  </div>
  



  
      
          

  );
}
            