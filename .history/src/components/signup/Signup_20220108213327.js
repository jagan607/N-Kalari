import React, { Component } from "react"

class Signup extends Component{
    constructor(props){
        super(props);

    }


render(){
    return(
        <div className="login-input-section">
        <h1 className="Login-heading">Signup to Nkalari</h1>
        <form onSubmit={this.handleSubmit}>
              <h3 style={{ color: "#222831" }}>Sign Up</h3>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  
                  noValidate
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  className="form-control"
                  placeholder="Enter password"

                  noValidate
                />
               
              </div>

              <button type="submit" className="btn btn-light">
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Already registered? <a href="/login">Login</a>
              </p>
            </form>
            </div>
    );
}
}

export default Signup;