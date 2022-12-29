import React, { useContext } from "react";
import { authUser } from "../App";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar_Home() {
  // const authValue = useContext(authUser);
  // let history = useHistory();
  // function handleLogout(e) {
  //     e.preventDefault();
  //     localStorage.setItem("userName", null);
  //     authValue.signout();
  //     console.log("signed out");
  //     history.push("/");
  // }


  return (
    // <div>
    //     <nav className="navbar navbar-dark bg-primary">
    //         <h1 className="navbar-brand">Blog-App</h1>
    //         <form className="form-inline">
    //             <div className="input-group">
    //                 <div className="input-group-prepend">
    //                     <span className="input-group-text" id="basic-addon1">@</span>
    //                 </div>
    //                 <input type="text" className="form-control mr-sm-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
    //             </div>
    //             <button className="btn bg-success text-light my-2 my-sm-0" name="search" type="submit">Search</button>
    //             <button className="btn bg-danger text-light my-2 my-sm-0 ml-5" name="logout" type="submit" onClick={handleLogout}>Logout</button>
    //         </form>
    //     </nav>
    // </div>

    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
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
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>About</Nav.Link>
                  
                </Nav>

                <div className="d-flex gap-3 flex-sm-column flex-lg-row  align-items-lg-baseline">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                 <Link to="/login">
                    <Button variant="secondary" >Sign-in</Button>
                </Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar_Home;
