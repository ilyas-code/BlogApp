import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import { authUser } from "../App"

function Login() {
    const authValue = useContext(authUser);
    let history = useHistory();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    //function for setting password and user
    function changeHandler(e) {
        const type = e.target.type;
        if (type === "text") {
            setUsername(e.target.value);
            // console.log(username);
        } else {
            setPassword(e.target.value);
            // console.log(password);
        }
    }

    // function for authorizing the user for logging in further
    async function authHandler(e) {
        e.preventDefault();
        console.log("responded");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ userName: username, password: password });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        try {
            const response = await fetch("http://localhost:8000/authUser/", requestOptions);
            const result = await response.text();
            if(result === "authorized"){
                localStorage.setItem("userName",username);
                authValue.signin();
                
                history.push(`/main/${username}`)
            }else{
                alert("user not found")
            }
        } catch (error) {
            console.log(error);
        }
        

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
                        <input type="text" className="form-control" id="InputEmail1" aria-describedby="emailHelp" onChange={changeHandler} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Password</label>
                        <input type="password" className="form-control" id="InputPassword1" onChange={changeHandler} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={authHandler}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
