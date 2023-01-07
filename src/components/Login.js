import React, { useContext, useState } from "react";
// import { useHistory } from "react-router-dom";
import { authUser } from "../App";
import { useNavigate, Link} from "react-router-dom";
import { Form, Button, Card, FloatingLabel, Alert} from "react-bootstrap";
import NavBarHome from "./NavBar-Home";

function Login() {
  const authValue = useContext(authUser);
  let navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [show,setShow] = useState({state:false, message:""})
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
    // for test purposes
    // authValue.signin();

    // navigate(`/main/${username}`)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ userName: username, password: password });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:8000/authUser/",
        requestOptions
      );
      const result = await response.text();
      if (result === "authorized") {
        localStorage.setItem("userName", username);
        authValue.signin();

        navigate(`/main/${username}`);
      } else {
        setShow({state:true, message:"user not found"})
      }
    } catch (error) {
      // console.log(error);
      // alert("server - error")
      setShow({state:true, message:"server error"})

    }
  }

  const alertEle = <Alert show={show.state} variant = "danger" className="w-25 mx-auto"> {show.message}</Alert>
  return (
    <div>
      
      {/* <nav className="navbar navbar-dark bg-primary">
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
                <p className="card-link mb-3">Signup</p>
            </div> */}
      <NavBarHome />
      {/* alert element for error */}
      {alertEle} 
      <Card
        style={{
          width: "18rem",
          margin: "0 auto",
          position: "relative",
          top: "50px",
        }}
      >
        <Card.Header>
          <h4>sign-in</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={authHandler}>
            <Form.Group
              className="mb-3 position-relative"
              id="exampleForm.ControlInput1"
            >
              <FloatingLabel label="Email or Username">
                <Form.Control
                  required
                  type="text"
                  name="name"
                  id="name1"
                  onChange={changeHandler}
                  placeholder="Email or Username"
                />

                <Form.Control.Feedback
                  type="invalid"
                  tooltip
                ></Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group
              className="mb-3 position-relative"
              id="exampleForm.ControlInput2"
            >
              <FloatingLabel label="password">
                <Form.Control
                  required
                  type="password"
                  name="password"
                  id="name"
                  onChange={changeHandler}
                  placeholder="password"
                  
                />

                <Form.Control.Feedback
                  type="invalid"
                  tooltip
                ></Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <div className="vstack gap-3">
              <Button variant="dark" type="submit" className="w-100">
                Login
              </Button>

              <Link to="/forgotPage">forget password?</Link>
            </div>
            <hr />
          </Form>
          <Button
            variant="outline-secondary"
            className="w-100 mb-3"
            onClick={(e) => {
              navigate("/signup");
            }}
          >
            Sign-up
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
