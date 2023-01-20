import React,{useContext} from 'react'
import { authUser } from "../App"
// import { useHistory } from "react-router-dom";
import { useNavigate, Link} from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import InputGroup from 'react-bootstrap/InputGroup'


function NavBar() {
    const authValue = useContext(authUser);
    const navigate = useNavigate();
  
    function handleLogout(e) {
        e.preventDefault();
        sessionStorage.setItem("userName", null);
        sessionStorage.setItem("isAuthenticated", false);
         authValue.signout();
        console.log("signed out");
        console.log(authValue);
            navigate("/login",{replace:true});
        
     
        
    }
    return (
        <>
        {["md"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3 ">
            <Container fluid>
              <Navbar.Brand>Bloogie</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Bloogie
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    
                     <Link className="nav-link" to='/'>Home</Link> 
                     <Link className="nav-link" to='/about'>About</Link> 
                  </Nav>
  
                  <div className="d-flex gap-3 flex-column flex-lg-row  align-items-lg-baseline ">
                    <Form className="d-flex">
                      <InputGroup>
                      <Form.Control
                        type="search"
                        placeholder="Search"
                      
                        aria-label="Search"
                      />
                      <Button variant="outline-secondary">Search</Button>
                      </InputGroup>
                    </Form>
  
                    <Button name="signIn" variant="dark" onClick={handleLogout} >
                      Sign-Out
                    </Button>
                    
                  </div>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>

    )
}

export default NavBar
