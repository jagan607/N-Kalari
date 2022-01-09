import React, { Component } from "react"

class Signup extends Component{
    constructor(props){
        super(props);

    }
    handleChange = (e) =>{
        const {name, value } = e.target
        this.setState({
            [name]: value
          })
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
                  required onChange={this.handleChange}
                  noValidate
                />
            
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  className="form-control"
                  required onChange={this.handleChange}
                  noValidate
                />
            
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  name="mobile"
                  className="form-control"
                  required onChange={this.handleChange}
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
                  placeholder="(Optional)"
                  onChange={this.handleChange}
                  noValidate
                />
            
              </div>

           

              <button type="submit" className="btn-signin">Sign up</button> 
              <p className="forgot-password text-right">
                Already registered? <a href="/login">Login</a>
              </p>
            </form>
            </div>
    );
}
}

function mapState(state) {
    console.log("state", state);

    return { state };
  }
  
  const actionCreators = {
    getTransactions: userActions.getTransactions,
  };
  
const SignupPage = connect(mapState, actionCreators)(Signup);

export { SignupPage as Signup };