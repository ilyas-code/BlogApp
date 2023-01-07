import React,{useContext} from 'react'
import { authUser } from "../App"
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom"

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';


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
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <h1 className="navbar-brand">Blog-App</h1>
                <form className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control mr-sm-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <button className="btn bg-success text-light my-2 my-sm-0" name="search" type="submit">Search</button>
                    <button className="btn bg-danger text-light my-2 my-sm-0 ml-5" name="logout" type="submit" onClick={handleLogout}>Logout</button>
                </form>
            </nav>
        </div>

    )
}

export default NavBar
