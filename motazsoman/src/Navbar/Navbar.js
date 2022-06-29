import "./navbar.css";
import { Nav, Container,Navbar } from "react-bootstrap";
import {About} from "../About me/About"
function Nav_bar() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#Home">Motaz Soman</Navbar.Brand>
            <Nav className="me-right">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="/About">Project</Nav.Link>
              <Nav.Link href="#ContactMe">Contact Me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </>
    </div>
  );
}
export default Nav_bar;
