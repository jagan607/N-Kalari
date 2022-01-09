

class Signup extends Component{
    constructor(props){
        super(props);

    }


render(){
    return(
        <div className="login-input-section">
        <h1 className="Login-heading">Signup to Nkalari</h1>
        <form onSubmit={this.onSignInSubmit}>
          {/* <div id="sign-in-button" ></div> */}
          <input className="mobile-input" type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          
    
          <input className="email-input" type="text" name="email" placeholder="email (Optional)" onChange={this.handleChange}/>
          
        </form>
        <button type="submit" className="btn-signin">Submit</button> 

        <h1>Enter OTP</h1>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
}

export default Signup;