import { useContext } from "react";
import { Link } from "react-router";
import sushiLogo from '../../assets/sushi.svg';
import './NavBar.css';

// React bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <>
      <Navbar sticky="top" expand={false} className="mb-5 custom-navbar" >
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={sushiLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Mentai-Log
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <img
                  alt=""
                  src={sushiLogo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Mentai-Log
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {user ? (
                    <>
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <Nav.Link as={Link} to="/logs">Logs</Nav.Link>
                      <Nav.Link as={Link} to="/logs/new">New Log</Nav.Link>
                      <Nav.Link as={Link} to="/" onClick={handleSignOut}>
                        Sign Out
                      </Nav.Link>
                    </>
                ) : (
                  <>
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
                      <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                  </>
                )}
                </Nav>
              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>        
  );
};

export default NavBar;
