import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <h1 className="navbar-brand">Blog-App</h1>
                    <form className="form-inline">
                        <Link to='/signup'>
                            <button className="btn btn-outline-light mr-3  my-sm-0" type="submit">Sign-Up</button>
                        </Link>
                        <Link to="/login"> 
                            <button className="btn btn-outline-light  my-sm-0" type="submit">login</button>
                        </Link>
                    </form>
                </nav>
            </div>


        )
    }
}

export default Home
