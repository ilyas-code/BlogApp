import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar_Home from "./NavBar-Home"
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';


class Home extends Component {
  render() {
    return (
       
        <NavBar_Home />

        

        // {/* <nav classNameName="navbar navbar-dark bg-primary">
        //             <h1 classNameName="navbar-brand">Blog-App</h1>
        //             <form classNameName="form-inline">
        //                 <Link to='/signup'>
        //                     <button className="btn btn-outline-light mr-3  my-sm-0" type="submit">Sign-Up</button>
        //                 </Link>
        //                 <Link to="/login"> 
        //                     <button className="btn btn-outline-light  my-sm-0" type="submit">login</button>
        //                 </Link>
        //             </form>
        //         </nav> */}
        
       
        
    );
  }
}

export default Home;
