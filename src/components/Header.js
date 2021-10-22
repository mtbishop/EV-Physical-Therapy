import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import '../style/headerStyle.css';

function Header() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>Contact #----</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
