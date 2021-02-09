
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import Menu from './Componentes/Menu/Menu.jsx';
//import Footer from './Componentes/Footer/Footer.jsx';
//import Routes from './Router/Router.jsx';
import {lazy, Suspense} from 'react';

import './App.css';

const Header = lazy( () => import('./code-splitting/Menu'));
const Footer = lazy( () => import('./code-splitting/footer'));
const Routes = lazy( () => import('./code-splitting/Routers'));



class App extends React.Component {
    render() {
        return ( 

          <BrowserRouter>
          <header>
          <Suspense fallback ={
                  <p>Carregando... </p>
              }
              ><Header/>
              
              </Suspense>
          </header>
          <main>
              <Suspense fallback ={
                <p> Carregando...</p>
              }
                    
                  
                  >
                      <Routes/>
              </Suspense>
          </main>
          <footer>
              <Suspense fallback ={
                      <p>Carregando...</p>
                  }
                  >
                      <Footer/>
              </Suspense>
          </footer>
      </BrowserRouter>
  
);
}
}
          




             
            
        

export default App;