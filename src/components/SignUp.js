import React from 'react'

function SignUp() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <h1 className="navbar-brand">Blog-App</h1>
            </nav>
            <div className="card mt-5" style={{ width: "18rem", margin: "0 auto" }}>
                <div className="card-header"><h5>Sign-Up</h5></div>
                <form className="card-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleUserName">Username</label>
                        <input type="text" className="form-control" id="exampleUserName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Confirm-Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
