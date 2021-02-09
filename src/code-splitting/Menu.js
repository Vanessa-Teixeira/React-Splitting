
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
//import './Menu.css';



    function BaseMenu (props) {
    const{location} = props;

return (

<Navbar className="navbar-dark" bg="danger" expand="lg" fixed="top">
                        <Navbar.Brand>
                            Full Stark Eletro
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="item-menu"/>
                        <Navbar.Collapse id="item-menu">
                            <Nav activeKey={location.pathname} className="ml-auto mr-3">
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/" to = "/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/Produtos" to = "/Produtos">Produtos</Nav.Link>
                                </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link as={Link} href="/Lojas" to = "/Lojas">Lojas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/Contatos" to = "/Contatos">Contatos</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

);
    
}
const Menu = withRouter(BaseMenu);//Seta a propriedade por aqui
export default Menu;


