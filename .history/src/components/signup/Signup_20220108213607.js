import React, { Component } from "react"

class Signup extends Component{
    constructor(props){
        super(props);

    }


render(){
    return(
        <div className="login-input-section">
        <h1 className="Login-heading">Signup to Nkalari</h1>
        <form >

        <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="first-name"
                  className="form-control"
                  placeholder=""
                  
                  noValidate
                />
            
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  className="form-control"
                  noValidate
                />
            
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  name="mobile"
                  className="form-control"
                  placeholder=""

                  noValidate
                />
               
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder=""
                  
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