import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import Logo from './LogoDoisTech.png';




function Menu() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Container>
        <Navbar.Brand  href="./App"><img src={Logo} alt="DoisTech" width='120px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav >
            <Nav.Link  href="/Clientes">Clientes</Nav.Link>
            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cadastro de Produtos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Composição do Produto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pedidos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Realizar Pedidos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pedidos em Abertos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pedidos Concluidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="Nav2">
            <NavDropdown title="Configuração" id="basic-nav-dropdown"  className="Nav2">
              <NavDropdown.Item href="#action/3.1">Conta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Usuários
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sair">Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
  );
}

export default Menu;

