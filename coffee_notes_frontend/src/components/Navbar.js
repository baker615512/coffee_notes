import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return(
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Coffee Notes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar