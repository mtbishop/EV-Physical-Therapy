import { Container, Navbar } from 'react-bootstrap';
import '../style/HeaderStyle.css';

function Header() {
  return (
    <>
      <Navbar bg="dark">
        <div id="headerCont">
          <Container>
            <span id="contactNum">
              <Navbar.Brand>Contact #----</Navbar.Brand>
            </span>
          </Container>
        </div>
      </Navbar>
    </>
  );
}
export default Header;
