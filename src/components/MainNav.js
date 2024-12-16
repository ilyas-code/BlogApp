import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { authUser } from "../App";
                  

function MainNav() {
      const authValue=useContext(authUser)
      
      function handleLogout(e) {
      localStorage.setItem("userName", null);
      authValue.signout();
      console.log("signed out");
      
    }; 

  
  

  return authValue.isAuthenticated?(
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow"
      aria-label="Main navigation"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          BlogBox
        </Link>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          id="navbarSideCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
              <Link className="nav-link" to="/HomeMain">
              <i className="bi bi-house px-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/main/${authValue}`}>
              <i className="bi bi-speedometer2 px-1"></i>Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
              <i className="bi bi-bell px-1"></i> Notifications
              </Link>
            </li>
           
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person px-1"></i>Profile
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Home" onClick={handleLogout} >
                    Signout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                className="form-control text-bg-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-light"
                
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  ):(
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow"
      aria-label="Main navigation"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          BlogBox
        </Link>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          id="navbarSideCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
              <Link className="nav-link" to="/HomeMain">
              <i className="bi bi-house px-1"></i>Home
              </Link>
            </li>
            
           
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person px-1"></i>Profile
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login" >
                    Signin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                className="form-control text-bg-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-light"
                
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
