
import { Switch, Route} from 'react-router-dom';

//Componentes
import Home from '../Pages/Home/Home.jsx';
import Produtos from '../Pages/Produtos/Produtos.jsx';
import Lojas from '../Pages/Lojas/Lojas.jsx';
import Contato from '../Pages/Contato/Contato.jsx';

export default function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Produtos" component={Produtos}></Route>
            <Route exact path="/Lojas" component={Lojas}></Route>
            <Route exact path="/Contatos" component={Contato}></Route>
        </Switch>
    );
}