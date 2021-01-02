import React, { useContext, useState } from 'react'
import { authUser } from "../App"
function Login() {
    // const authValue = useContext(authUser);
    // authValue.signin("salimbhai");
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    //function for setting password and user
    function changeHandler(e) {
        const type = e.target.type;
        if (type === "email") {
            setUsername(e.target.value);
            console.log(username);
        } else {
            setPassword(e.target.value);
            console.log(password);
        }
    }

    // function for authorizing the user for logging in further
    function authHandler(e) {
        console.log("responded");

    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <h1 className="navbar-brand">Blog-App</h1>
            </nav>
            <div className="card mt-5" style={{ width: "18rem", margin: "0 auto" }}>
                <div className="card-header"><h5>Login</h5></div>
                <form className="card-body">
                    <div className="form-group">
                        <label htmlFor="InputEmail1">Email or Username</label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" onChange={changeHandler} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Password</label>
                        <input type="password" className="form-control" id="InputPassword1" onChange={changeHandler} />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
