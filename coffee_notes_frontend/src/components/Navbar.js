import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return(
    <Navbar bg="info" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">Coffee Notes</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
    </Navbar>
  )
}
export default NavBar