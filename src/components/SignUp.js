import React, { useState } from "react";
// import { Link } from "react-router-dom";
import NavBarHome from "./NavBar-Home";
// import Button from 'react-bootstrap/Button';

// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function SignUp() {
//     return (
//         <div>
//             <nav className="navbar navbar-dark bg-primary">
//                 <h1 className="navbar-brand">Blog-App</h1>
//             </nav>
//             <div className="card mt-5" style={{ width: "18rem", margin: "0 auto" }}>
//                 <div className="card-header"><h5>Sign-Up</h5></div>
//                 <form className="card-body">
//                     <div className="form-group">
//                         <label htmlFor="exampleInputEmail1">Email</label>
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleUserName">Username</label>
//                         <input type="text" className="form-control" id="exampleUserName" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputPassword1">Password</label>
//                         <input type="password" className="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputPassword2">Confirm-Password</label>
//                         <input type="password" className="form-control" id="exampleInputPassword2" />
//                     </div>

//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

import { Form, Button, Card, FloatingLabel } from "react-bootstrap";

const SignUp = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    terms: false,
    nameError: "",
    emailError: "",
    passwordError: "",
    passwordConfirmError: "",
    termsError: "",
  });

 

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let passwordConfirmError = "";
    let termsError = "";

    if (!formState.name) {
      nameError = "Name is required";
    }

    if (!formState.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (formState.password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    }

    if (formState.password !== formState.passwordConfirm) {
      passwordConfirmError = "Passwords do not match";
    }
    if (!formState.terms) {
      termsError = "Terms Not Agreed";
    }

    if (
      nameError ||
      emailError ||
      passwordError ||
      passwordConfirmError ||
      termsError
    ) {
      setFormState({
        ...formState,
        nameError,
        emailError,
        passwordError,
        passwordConfirmError,
        termsError,
      });
      
      return false;
      
    }
    
    return true;
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(formState);
      // Clear form
      setFormState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        terms: false,
        nameError: "",
        emailError: "",
        passwordError: "",
        passwordConfirmError: "",
        termsError: "",
      });
    }
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });

      

      
       
  };

  return (
    <React.Fragment>
      <NavBarHome />
      <Card
        style={{
          width: "18rem",
          margin: "0 auto",
          position: "relative",
          top: "50px",
        }}
      >
        <Card.Header className="fw-bold fs-3">SignUp</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group
              className="mb-3 position-relative"
              
            >
              <FloatingLabel  label="name">
                <Form.Control
                  
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  isInvalid={!!formState.nameError}
                  placeholder="name"
                  
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {formState.nameError}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3 position-relative"
              
            >
              <FloatingLabel  label="email">
                <Form.Control
                  
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  isInvalid={!!formState.emailError}
                  placeholder="Email"
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {formState.emailError}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3 position-relative"
              
            >
              <FloatingLabel  label="password">
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                  isInvalid={!!formState.passwordError}
                  placeholder="Password"
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {formState.passwordError}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3 position-relative"
              
            >
              <FloatingLabel  label="confirm">
                <Form.Control
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  value={formState.passwordConfirm}
                  onChange={handleChange}
                  isInvalid={!!formState.passwordConfirmError}
                  placeholder="Confirm"
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {formState.passwordConfirmError}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3 position-relative">
              <Form.Check
                
                name="terms"
                value={formState.terms}
                id="AgreeCheck"
                type="checkbox"
                isInvalid={!!formState.termsError}
                onChange={handleChange}
                label="Agree to terms and conditions"
                feedbackType="invalid"
                feedback={formState.termsError}
                feedbackTooltip
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
              Sign-up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default SignUp;
