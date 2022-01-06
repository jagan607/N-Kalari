import { render } from '@testing-library/react'
import React from 'react'
import firebase from './../../helpers/firebase'

handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {

        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
      
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")

        }).catch((error) => {
         
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")

    }).catch((error) => {
   
    });
  }

export function Login(){
    return(
        <div>
        <h2>Login Form</h2>
        <form onSubmit={onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}