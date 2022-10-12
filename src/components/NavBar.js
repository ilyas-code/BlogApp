import React,{useContext} from 'react'
import { authUser } from "../App"
import { useHistory } from "react-router-dom";


function NavBar() {
    const authValue = useContext(authUser);
    let history = useHistory();
    function handleLogout(e) {
        e.preventDefault();
        localStorage.setItem("userName", null);
        authValue.signout();
        console.log("signed out");
        history.push("/");
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
