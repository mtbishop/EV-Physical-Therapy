import { Container, Navbar } from 'react-bootstrap';
import '../components/assets/style/HeaderStyle.css';

function Header() {
  return (
    <>
      <Navbar bg="dark">
        <div id="headerCont">
          <Container>
            <span id="contactNum">
              <Navbar.Brand>Contact # 435-878-2722</Navbar.Brand>
            </span>
          </Container>
        </div>
      </Navbar>
    </>
  );
}
export default Header;
